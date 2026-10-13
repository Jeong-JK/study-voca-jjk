package com.jjk.toeicvoca;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.util.Locale;

public class MainActivity extends Activity {
    private WebView web;
    private TextToSpeech tts;
    private volatile boolean ttsReady = false;

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
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        tts = new TextToSpeech(this, status -> ttsReady = (status == TextToSpeech.SUCCESS));

        web = new WebView(this);
        web.setBackgroundColor(Color.TRANSPARENT);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);   // localStorage로 진도 저장
        s.setAllowFileAccess(true);
        web.setWebViewClient(new WebViewClient());
        web.setWebChromeClient(new WebChromeClient());   // confirm() 확인창이 뜨도록
        web.addJavascriptInterface(new Speaker(), "Android");   // 발음 듣기
        web.loadUrl("file:///android_asset/index.html");
        setContentView(web);
    }

    @Override
    protected void onPause() {
        super.onPause();
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
        super.onDestroy();
    }
}
