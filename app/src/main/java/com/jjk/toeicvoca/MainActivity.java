package com.jjk.toeicvoca;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Insets;
import android.net.Uri;
import android.os.Build;
import android.graphics.Color;
import android.view.Gravity;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;
import android.widget.LinearLayout;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;

import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Locale;

public class MainActivity extends Activity {
    private WebView web;
    private LinearLayout root;
    private BillingBridge billing;
    private TextToSpeech tts;
    private volatile boolean ttsReady = false;

    // ---- 광고 (AdMob) ----
    // 지금은 구글 공식 "테스트" 광고 ID. 출시 전에 AdMob에서 발급받은 실제 ID로 교체해야 함
    private static final String BANNER_ID = "ca-app-pub-3940256099942544/6300978111";
    private static final String INTERSTITIAL_ID = "ca-app-pub-3940256099942544/1033173712";
    private AdView banner;
    private boolean bannerLoaded = false;
    private InterstitialAd interstitial;

    private void loadInterstitial() {
        InterstitialAd.load(this, INTERSTITIAL_ID, new AdRequest.Builder().build(), new InterstitialAdLoadCallback() {
            @Override public void onAdLoaded(InterstitialAd ad) { interstitial = ad; }
            @Override public void onAdFailedToLoad(LoadAdError e) { interstitial = null; }
        });
    }

    /** JS에서 window.AndroidAds.banner(true/false), window.AndroidAds.interstitial() 로 호출 */
    public class Ads {
        @JavascriptInterface
        public void banner(boolean on) {
            runOnUiThread(() -> {
                if (on) {
                    banner.setVisibility(View.VISIBLE);
                    if (!bannerLoaded) { banner.loadAd(new AdRequest.Builder().build()); bannerLoaded = true; }
                } else {
                    banner.setVisibility(View.GONE);
                }
            });
        }

        @JavascriptInterface
        public void interstitial() {
            runOnUiThread(() -> {
                if (interstitial != null) {
                    interstitial.show(MainActivity.this);
                    interstitial = null;
                }
                loadInterstitial();   // 다음 번을 위해 미리 받아두기
            });
        }
    }

    /** JS에서 window.AndroidApp.* 로 호출: 앱 버전, 일일 학습 알림 */
    public class AppBridge {
        @JavascriptInterface
        public String version() {
            try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionName; }
            catch (Exception e) { return "-"; }
        }

        /** 알림 켜기/끄기 + 시간. 켤 때 알림 권한이 없으면 요청하고 false 반환 */
        @JavascriptInterface
        public boolean setDailyReminder(boolean on, int hour, int minute) {
            ReminderReceiver.save(MainActivity.this, on, hour, minute);
            if (on && Build.VERSION.SDK_INT >= 33
                    && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                runOnUiThread(() -> requestPermissions(new String[]{ Manifest.permission.POST_NOTIFICATIONS }, 7));
                return false;
            }
            return true;
        }

        /** 백업 파일 저장: 저장 위치를 고르는 창 → 고르면 내용 기록 → JS onBackupSaved(true/false) */
        @JavascriptInterface
        public void saveBackup(String name, String text) {
            pendingBackup = text;
            runOnUiThread(() -> {
                Intent i = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("application/json");
                i.putExtra(Intent.EXTRA_TITLE, name);
                try { startActivityForResult(i, REQ_SAVE); } catch (Exception e) { callJs("onBackupSaved(false)"); }
            });
        }

        /** 백업 파일 불러오기: 파일 고르는 창 → 내용을 JS onBackupLoaded(text) 로 전달 (취소하면 null) */
        @JavascriptInterface
        public void openBackup() {
            runOnUiThread(() -> {
                Intent i = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                try { startActivityForResult(i, REQ_OPEN); } catch (Exception e) { callJs("onBackupLoaded(null)"); }
            });
        }
    }

    private static final int REQ_SAVE = 41, REQ_OPEN = 42;
    private String pendingBackup;

    private void callJs(String js) {
        runOnUiThread(() -> { if (web != null) web.evaluateJavascript("window." + js, null); });
    }

    @Override
    @SuppressWarnings("deprecation")
    protected void onActivityResult(int req, int res, Intent data) {
        super.onActivityResult(req, res, data);
        Uri uri = (res == RESULT_OK && data != null) ? data.getData() : null;
        if (req == REQ_SAVE) {
            String text = pendingBackup; pendingBackup = null;
            if (uri == null || text == null) return;   // 취소
            try (OutputStream out = getContentResolver().openOutputStream(uri, "wt")) {
                out.write(text.getBytes(StandardCharsets.UTF_8));
                callJs("onBackupSaved(true)");
            } catch (Exception e) { callJs("onBackupSaved(false)"); }
        } else if (req == REQ_OPEN) {
            if (uri == null) { callJs("onBackupLoaded(null)"); return; }
            try (InputStream in = getContentResolver().openInputStream(uri)) {
                ByteArrayOutputStream buf = new ByteArrayOutputStream();
                byte[] b = new byte[8192]; int n;
                while ((n = in.read(b)) > 0) { buf.write(b, 0, n); if (buf.size() > 20_000_000) break; }
                callJs("onBackupLoaded(" + JSONObject.quote(buf.toString("UTF-8")) + ")");
            } catch (Exception e) { callJs("onBackupLoaded('')"); }
        }
    }

    /** 웹 화면(JS)에서 window.Android.speak("word", "us" | "uk") 로 호출 */
    public class Speaker {
        /** 0 = 재생, -100 = 음성 엔진 준비 중, 그 외 음수 = 해당 언어 음성 데이터 없음 */
        @JavascriptInterface
        public int speak(String text, String accent) {
            if (!ttsReady || tts == null) return -100;
            Locale loc = "uk".equals(accent) ? Locale.UK : Locale.US;
            int r = tts.setLanguage(loc);
            if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) return -1;
            tts.setSpeechRate(0.9f);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "word");
            return 0;
        }

        /** 미국 → (잠깐 쉬고) → 영국 순서로 읽기. 0 = 둘 다, -2 = 영국 음성 없어 미국만, -100 = 준비 중, -1 = 둘 다 없음 */
        @JavascriptInterface
        public int speakBoth(String text) {
            if (!ttsReady || tts == null) return -100;
            tts.setSpeechRate(0.9f);
            int us = tts.setLanguage(Locale.US);
            boolean usOk = us != TextToSpeech.LANG_MISSING_DATA && us != TextToSpeech.LANG_NOT_SUPPORTED;
            if (usOk) tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "us");
            int uk = tts.setLanguage(Locale.UK);
            boolean ukOk = uk != TextToSpeech.LANG_MISSING_DATA && uk != TextToSpeech.LANG_NOT_SUPPORTED;
            if (ukOk) {
                if (usOk) tts.playSilentUtterance(500, TextToSpeech.QUEUE_ADD, "gap");
                tts.speak(text, usOk ? TextToSpeech.QUEUE_ADD : TextToSpeech.QUEUE_FLUSH, null, "uk");
            }
            if (usOk && ukOk) return 0;
            if (usOk) return -2;
            return -1;
        }

        @JavascriptInterface
        public void stop() {
            if (tts != null) tts.stop();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        tts = new TextToSpeech(this, status -> ttsReady = (status == TextToSpeech.SUCCESS));
        MobileAds.initialize(this, status -> {});
        loadInterstitial();

        web = new WebView(this);
        web.setBackgroundColor(Color.TRANSPARENT);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);   // localStorage로 진도 저장
        s.setAllowFileAccess(true);
        web.setWebViewClient(new WebViewClient());
        web.setWebChromeClient(new WebChromeClient());   // confirm() 확인창이 뜨도록
        web.addJavascriptInterface(new Speaker(), "Android");   // 발음 듣기
        web.addJavascriptInterface(new Ads(), "AndroidAds");    // 광고
        web.addJavascriptInterface(new AppBridge(), "AndroidApp");   // 앱 버전 · 알림
        // 구독 결제: 플레이스토어용(release) 빌드에서만. 직접 설치하는 테스트 APK(debug)는 예전처럼 등급을 바로 바꿀 수 있음
        if ((getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) == 0) {
            billing = new BillingBridge(this, this::callJs);
            web.addJavascriptInterface(billing, "AndroidBilling");
        }
        web.loadUrl("file:///android_asset/index.html");

        // 화면 = 웹 화면(위) + 배너 광고(아래, 평소엔 숨김)
        root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.addView(web, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, 0, 1f));
        banner = new AdView(this);
        banner.setAdUnitId(BANNER_ID);
        banner.setAdSize(AdSize.BANNER);
        banner.setVisibility(View.GONE);
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        lp.gravity = Gravity.CENTER_HORIZONTAL;
        root.addView(banner, lp);
        setContentView(root);
        applySystemBars();

        // Android 15+ 는 화면이 상태바·내비게이션바 밑까지 그려짐 → 그만큼 안쪽으로 띄움 (키보드가 올라오면 키보드 높이만큼)
        if (Build.VERSION.SDK_INT >= 35) {
            root.setOnApplyWindowInsetsListener((v, ins) -> {
                Insets bars = ins.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout());
                Insets ime = ins.getInsets(WindowInsets.Type.ime());
                v.setPadding(bars.left, bars.top, bars.right, Math.max(bars.bottom, ime.bottom));
                return WindowInsets.CONSUMED;
            });
        }

        // Android 13+ 뒤로가기 (targetSdk 36부터는 onBackPressed가 호출되지 않음)
        if (Build.VERSION.SDK_INT >= 33) {
            backCallback = this::handleBack;
            getOnBackInvokedDispatcher().registerOnBackInvokedCallback(OnBackInvokedDispatcher.PRIORITY_DEFAULT, backCallback);
        }
    }

    private OnBackInvokedCallback backCallback;

    private boolean isNight() {
        return (getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES;
    }

    /** 상태바·내비게이션바 영역을 앱 배경색으로, 아이콘 색은 밝기에 맞게 */
    private void applySystemBars() {
        boolean night = isNight();
        root.setBackgroundColor(night ? 0xFF121214 : 0xFFF5F4EF);   // index.html 의 --bg 와 같은 색
        if (Build.VERSION.SDK_INT >= 30) {
            WindowInsetsController c = getWindow().getInsetsController();
            if (c != null) {
                int light = WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS;
                c.setSystemBarsAppearance(night ? 0 : light, light);
            }
        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if (root != null) applySystemBars();
    }

    /** 앱 안의 이전 화면으로. 첫 화면(학습 탭)이면 앱을 뒤로 보냄 */
    private void handleBack() {
        if (web == null) { moveTaskToBack(true); return; }
        web.evaluateJavascript("(window.goBack && window.goBack()) ? 1 : 0", v -> {
            if (!"1".equals(v)) moveTaskToBack(true);
        });
    }

    /** Android 12 이하 뒤로가기: 앱 안의 이전 화면으로. 첫 화면(학습 탭)일 때만 앱 기본 동작 */
    @Override
    @SuppressWarnings("deprecation")
    public void onBackPressed() {
        if (web == null) { super.onBackPressed(); return; }
        web.evaluateJavascript("(window.goBack && window.goBack()) ? 1 : 0", v -> {
            if (!"1".equals(v)) super.onBackPressed();
        });
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (tts != null) tts.stop();   // 앱을 내리면 읽던 발음 멈춤
        if (web != null) web.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (web != null) web.onResume();
    }

    @Override
    protected void onDestroy() {
        if (tts != null) tts.shutdown();
        if (banner != null) banner.destroy();
        if (billing != null) billing.destroy();
        super.onDestroy();
    }
}
