# 토익 단어 (ToeicVoca)

하루 100단어 · 4지선다(A–D) · 틀린 단어만 다 맞출 때까지 반복. 진도는 폰에 자동 저장.

## 최신 APK 받기 (폰에서 이 링크만 열면 됨)
https://github.com/Jeong-JK/study-voca-jjk/releases/latest/download/ToeicVoca.apk

main에 push하면 GitHub Actions가 자동으로 빌드해서 위 링크를 최신 버전으로 바꿉니다(3–5분).
서명 키(`app/debug.keystore`)가 고정이라 새 APK를 덮어 설치해도 학습 기록이 유지됩니다.

## 단어장
| 단어장 | 내용 |
|---|---|
| 토익 | TSL + 숙어 + BSL |
| 기본 | NGSL (기능어 제외) |
| 전부 | 위 전체 |

## 단어 추가/수정
`app/src/main/assets/` 의 파일에 `단어|품사|뜻` 형식으로 한 줄씩 (품사: 명/동/형/부/숙)
- `words.js` TSL · `phrases.js` 숙어 · `bsl.js` BSL · `ngsl.js` NGSL

출처: TOEIC Service List, Business Service List, New General Service List — Browne, Culligan & Phillips, newgeneralservicelist.com, CC BY-SA 4.0. 한글 뜻은 별도로 붙인 것이며 같은 라이선스를 따릅니다.
