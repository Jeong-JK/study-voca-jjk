plugins {
    id("com.android.application")
}

android {
    namespace = "com.jjk.toeicvoca"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.jjk.toeicvoca"
        minSdk = 24
        targetSdk = 36
        // GitHub 빌드 번호를 버전으로 사용 → 새 APK가 항상 업데이트로 인식됨
        val build = (System.getenv("GITHUB_RUN_NUMBER") ?: "1").toInt()
        versionCode = build
        versionName = "1.$build"
    }

    // 고정 서명 키: 빌드할 때마다 같은 키로 서명돼서, 새 버전을 덮어 설치해도 학습 기록이 유지됨
    signingConfigs {
        getByName("debug") {
            storeFile = file("debug.keystore")
            storePassword = "android"
            keyAlias = "androiddebugkey"
            keyPassword = "android"
        }
        // 플레이스토어 업로드용 정식 키: GitHub Secrets에서 넣어 줌 (키 파일은 저장소에 올리지 않음)
        val ks = System.getenv("RELEASE_KEYSTORE")
        if (ks != null && file(ks).exists()) {
            create("release") {
                storeFile = file(ks)
                storePassword = System.getenv("RELEASE_KEYSTORE_PASSWORD")
                keyAlias = "upload"
                keyPassword = System.getenv("RELEASE_KEYSTORE_PASSWORD")
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.findByName("release") ?: signingConfigs.getByName("debug")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
    implementation("com.google.android.gms:play-services-ads:23.6.0")   // AdMob 광고
    implementation("com.android.billingclient:billing:8.0.0")          // Google Play 구독 결제
}
