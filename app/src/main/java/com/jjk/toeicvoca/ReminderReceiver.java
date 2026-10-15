package com.jjk.toeicvoca;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

import java.util.Calendar;

/**
 * 일일 학습 알림.
 * - 정한 시간에 알림을 띄우고, 다음 날 같은 시간으로 다시 예약
 * - 휴대폰을 껐다 켜면(BOOT_COMPLETED) 저장된 설정으로 다시 예약
 */
public class ReminderReceiver extends BroadcastReceiver {
    private static final String PREFS = "reminder";
    private static final String CHANNEL = "daily_study";
    private static final int REQ = 1001;

    @Override
    public void onReceive(Context ctx, Intent intent) {
        if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            schedule(ctx);
            return;
        }
        show(ctx);
        schedule(ctx);   // 다음 날 예약
    }

    /** 설정 저장 후 예약(켜기) 또는 취소(끄기) */
    public static void save(Context ctx, boolean on, int hour, int minute) {
        ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit()
                .putBoolean("on", on).putInt("h", hour).putInt("m", minute).apply();
        schedule(ctx);
    }

    static void schedule(Context ctx) {
        SharedPreferences p = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
        PendingIntent pi = PendingIntent.getBroadcast(ctx, REQ, new Intent(ctx, ReminderReceiver.class),
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        am.cancel(pi);
        if (!p.getBoolean("on", false)) return;

        Calendar c = Calendar.getInstance();
        c.set(Calendar.HOUR_OF_DAY, p.getInt("h", 20));
        c.set(Calendar.MINUTE, p.getInt("m", 0));
        c.set(Calendar.SECOND, 0);
        c.set(Calendar.MILLISECOND, 0);
        if (c.getTimeInMillis() <= System.currentTimeMillis() + 1000) c.add(Calendar.DAY_OF_YEAR, 1);
        // 정확한 알람 권한 없이 쓸 수 있는 방식: 정한 시간부터 10분 안에 울림
        am.setWindow(AlarmManager.RTC_WAKEUP, c.getTimeInMillis(), 10 * 60 * 1000L, pi);
    }

    private static void show(Context ctx) {
        NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= 26) {
            nm.createNotificationChannel(new NotificationChannel(CHANNEL, "일일 학습 알림", NotificationManager.IMPORTANCE_DEFAULT));
        }
        Intent open = new Intent(ctx, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent tap = PendingIntent.getActivity(ctx, 0, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(ctx, CHANNEL) : new Notification.Builder(ctx);
        b.setSmallIcon(R.drawable.ic_notify)
                .setContentTitle("오늘의 단어 학습 시간이에요 📖")
                .setContentText("오늘 Day를 풀고 오답까지 끝내볼까요?")
                .setContentIntent(tap)
                .setAutoCancel(true);
        try { nm.notify(REQ, b.build()); } catch (SecurityException ignored) { }   // 알림 권한이 꺼져 있으면 조용히 넘어감
    }
}
