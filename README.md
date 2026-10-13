# 토익 단어 (ToeicVoca)

하루 100단어 · 4지선다(A–D) · 틀린 단어만 다 맞출 때까지 반복. 진도는 폰에 자동 저장.

## APK 받는 법 (GitHub Actions)
1. GitHub에서 새 저장소를 만들고 이 폴더 전체를 업로드(push)
2. 저장소의 **Actions** 탭 → "Build APK" 실행 완료(약 3–5분) 기다리기
3. 실행 결과 하단 **Artifacts → toeic-voca-apk** 다운로드 → 압축 풀면 `app-debug.apk`
4. 폰으로 옮겨 설치 (설정에서 "출처를 알 수 없는 앱 설치" 허용)

Android Studio가 있다면: 폴더 열기 → Build → Build APK(s).

## 단어장
| 단어장 | 내용 | 개수 |
|---|---|---|
| 토익 | TSL 1,244 + 숙어 305 + BSL 1,076 | 2,625 (27일) |
| 기본 | NGSL 2,593 (기능어 제외) | 2,593 (26일) |
| 전부 | 위 전체 | 5,218 (53일) |

단어장마다 진도·기록이 따로 저장됩니다.

## 단어 추가/수정
`app/src/main/assets/` 의 파일에 `단어|품사|뜻` 형식으로 한 줄씩 (품사: 명/동/형/부/숙)
- `words.js` TSL · `phrases.js` 숙어 · `bsl.js` BSL · `ngsl.js` NGSL

출처: TOEIC Service List, Business Service List, New General Service List — Browne, Culligan & Phillips, newgeneralservicelist.com, CC BY-SA 4.0. 한글 뜻은 별도로 붙인 것이며 같은 라이선스를 따릅니다.
