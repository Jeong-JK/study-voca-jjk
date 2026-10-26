package com.jjk.toeicvoca;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.webkit.JavascriptInterface;

import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.PendingPurchasesParams;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.android.billingclient.api.QueryPurchasesParams;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

/**
 * Google Play 월 구독 (Basic / Premium).
 * JS에서 window.AndroidBilling.refresh() / buy('basic'|'premium') / manage() 로 호출하고,
 * 결과는 window.onBillingProducts(json) · onBillingPlan(plan) · onBillingResult(code) 로 돌려줌.
 *
 * Play Console에 만들 구독 상품 ID: basic_monthly, premium_monthly (각각 월간 자동 갱신 기본 요금제 1개)
 */
public class BillingBridge implements PurchasesUpdatedListener {
    static final String BASIC = "basic_monthly", PREMIUM = "premium_monthly";

    private final Activity act;
    private final Consumer<String> js;   // window.<js> 실행
    private final BillingClient client;
    private final Map<String, ProductDetails> details = new HashMap<>();
    private Purchase active;              // 지금 활성 구독 (등급 변경 시 기존 구독 교체용)

    BillingBridge(Activity act, Consumer<String> js) {
        this.act = act;
        this.js = js;
        client = BillingClient.newBuilder(act)
                .setListener(this)
                .enablePendingPurchases(PendingPurchasesParams.newBuilder().enableOneTimeProducts().build())
                .build();
    }

    /** 연결돼 있으면 바로, 아니면 연결한 뒤 실행 */
    private void whenReady(Runnable r) {
        if (client.isReady()) { r.run(); return; }
        client.startConnection(new BillingClientStateListener() {
            @Override public void onBillingSetupFinished(BillingResult res) {
                if (res.getResponseCode() == BillingClient.BillingResponseCode.OK) r.run();
                else js.accept("onBillingResult('unavailable')");
            }
            @Override public void onBillingServiceDisconnected() { }
        });
    }

    /** 상품 가격 + 현재 구독 상태를 JS로 */
    @JavascriptInterface
    public void refresh() {
        whenReady(() -> { loadProducts(); loadPurchases(); });
    }

    private void loadProducts() {
        List<QueryProductDetailsParams.Product> ps = new ArrayList<>();
        for (String id : new String[]{ BASIC, PREMIUM })
            ps.add(QueryProductDetailsParams.Product.newBuilder().setProductId(id).setProductType(BillingClient.ProductType.SUBS).build());
        client.queryProductDetailsAsync(QueryProductDetailsParams.newBuilder().setProductList(ps).build(), (res, result) -> {
            if (res.getResponseCode() != BillingClient.BillingResponseCode.OK) return;
            JSONObject out = new JSONObject();
            try {
                for (ProductDetails d : result.getProductDetailsList()) {
                    details.put(d.getProductId(), d);
                    String price = price(d);
                    if (price != null) out.put(BASIC.equals(d.getProductId()) ? "basic" : "premium", price);
                }
            } catch (Exception ignored) { }
            js.accept("onBillingProducts(" + JSONObject.quote(out.toString()) + ")");
        });
    }

    /** 기본 요금제의 정가 (마지막 가격 단계 = 할인·무료 체험 이후 정상 가격) */
    private static String price(ProductDetails d) {
        List<ProductDetails.SubscriptionOfferDetails> offers = d.getSubscriptionOfferDetails();
        if (offers == null || offers.isEmpty()) return null;
        List<ProductDetails.PricingPhase> phases = offers.get(0).getPricingPhases().getPricingPhaseList();
        return phases.isEmpty() ? null : phases.get(phases.size() - 1).getFormattedPrice();
    }

    private void loadPurchases() {
        client.queryPurchasesAsync(QueryPurchasesParams.newBuilder().setProductType(BillingClient.ProductType.SUBS).build(),
                (res, list) -> { if (res.getResponseCode() == BillingClient.BillingResponseCode.OK) apply(list); });
    }

    /** 구독 목록 → 등급 결정 (Premium > Basic > Free), 승인 안 된 결제는 승인 */
    private void apply(List<Purchase> list) {
        Purchase basic = null, premium = null;
        boolean pending = false;
        for (Purchase p : list) {
            if (p.getPurchaseState() == Purchase.PurchaseState.PENDING) { pending = true; continue; }
            if (p.getPurchaseState() != Purchase.PurchaseState.PURCHASED) continue;
            if (!p.isAcknowledged()) {
                client.acknowledgePurchase(AcknowledgePurchaseParams.newBuilder().setPurchaseToken(p.getPurchaseToken()).build(), r -> { });
            }
            if (p.getProducts().contains(PREMIUM)) premium = p;
            else if (p.getProducts().contains(BASIC)) basic = p;
        }
        active = premium != null ? premium : basic;
        String plan = premium != null ? "premium" : basic != null ? "basic" : "free";
        js.accept("onBillingPlan('" + plan + "')");
        if (pending) js.accept("onBillingResult('pending')");
    }

    /** 구독 결제창 열기. 이미 다른 등급을 구독 중이면 그 구독을 바꾸는 방식으로 */
    @JavascriptInterface
    public void buy(String plan) {
        String id = "premium".equals(plan) ? PREMIUM : BASIC;
        act.runOnUiThread(() -> whenReady(() -> {
            ProductDetails d = details.get(id);
            List<ProductDetails.SubscriptionOfferDetails> offers = d == null ? null : d.getSubscriptionOfferDetails();
            if (offers == null || offers.isEmpty()) { js.accept("onBillingResult('noproduct')"); loadProducts(); return; }
            BillingFlowParams.Builder b = BillingFlowParams.newBuilder().setProductDetailsParamsList(Collections.singletonList(
                    BillingFlowParams.ProductDetailsParams.newBuilder()
                            .setProductDetails(d)
                            .setOfferToken(offers.get(0).getOfferToken())
                            .build()));
            if (active != null && !active.getProducts().contains(id)) {
                b.setSubscriptionUpdateParams(BillingFlowParams.SubscriptionUpdateParams.newBuilder()
                        .setOldPurchaseToken(active.getPurchaseToken())
                        .setSubscriptionReplacementMode(BillingFlowParams.SubscriptionUpdateParams.ReplacementMode.WITH_TIME_PRORATION)
                        .build());
            }
            BillingResult r = client.launchBillingFlow(act, b.build());
            if (r.getResponseCode() != BillingClient.BillingResponseCode.OK) js.accept("onBillingResult('error')");
        }));
    }

    /** Google Play 구독 관리 화면 (해지·결제 수단 변경) */
    @JavascriptInterface
    public void manage() {
        String url = "https://play.google.com/store/account/subscriptions?package=" + act.getPackageName()
                + (active != null && !active.getProducts().isEmpty() ? "&sku=" + active.getProducts().get(0) : "");
        act.runOnUiThread(() -> {
            try { act.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url))); } catch (Exception ignored) { }
        });
    }

    @Override
    public void onPurchasesUpdated(BillingResult res, List<Purchase> list) {
        int code = res.getResponseCode();
        if (code == BillingClient.BillingResponseCode.OK) loadPurchases();   // 승인 + 등급 반영
        else if (code == BillingClient.BillingResponseCode.USER_CANCELED) js.accept("onBillingResult('cancel')");
        else if (code == BillingClient.BillingResponseCode.ITEM_ALREADY_OWNED) loadPurchases();
        else js.accept("onBillingResult('error')");
    }

    void destroy() { client.endConnection(); }
}
