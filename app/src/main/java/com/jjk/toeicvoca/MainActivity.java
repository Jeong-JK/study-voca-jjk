package com.jjk.toeicvoca;

import android.app.Activity;
import android.graphics.Color;
import android.view.Gravity;
import android.view.View;
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

import java.util.Locale;

public class MainActivity extends Activity {
    private WebView web;
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
        web.loadUrl("file:///android_asset/index.html");

        // 화면 = 웹 화면(위) + 배너 광고(아래, 평소엔 숨김)
        LinearLayout root = new LinearLayout(this);
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
        super.onDestroy();
    }
}
