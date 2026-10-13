plugins {
    id("com.android.application")
}

android {
    namespace = "com.jjk.toeicvoca"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.jjk.toeicvoca"
        minSdk = 24
        targetSdk = 34
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
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("debug")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
