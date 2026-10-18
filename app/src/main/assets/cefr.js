// CEFR 일반 영어 단어 — CEFR-J Wordlist 1.5 (Yukio Tono, TUFS) · Octanove Vocabulary Profile C1/C2 1.0 (Octanove Labs, CC BY-SA 4.0)
// 기존 단어장(TSL·BSL·NGSL)과 겹치는 단어, 기능어, 영국식 철자 중복은 제외. 품사·한글 뜻은 추가로 붙임
// 형식: 단어|품사|뜻
const CEFR_RAW = `
about|부|대략, 약
above|부|위에
again|부|다시
all right|형|괜찮은
along|부|따라서, 함께
also|부|또한
always|부|항상
April|명|4월
apron|명|앞치마
ask|동|묻다, 요청하다
August|명|8월
awake|형|깨어 있는
back|부|뒤로, 다시
banana|명|바나나
bat|명|박쥐, 방망이
bee|명|벌
before|부|전에
behind|부|뒤에
below|부|아래에
best|형|최고의
better|형|더 나은
biscuit|명|비스킷
boring|형|지루한
both|부|둘 다
boyfriend|명|남자 친구
broken|형|고장 난, 깨진
bucket|명|양동이
building|명|건물
burger|명|버거
butter|명|버터
butterfly|명|나비
bye|명|작별 인사
cafe|명|카페
call|명|전화, 통화
cartoon|명|만화
CD|명|시디
CD player|명|시디 플레이어
child|명|아이
closed|형|닫힌
come|동|오다
cop|명|경찰관
couch|명|소파
credit card|명|신용카드
cute|형|귀여운
dancing|명|춤
day|명|날, 하루
December|명|12월
dictionary|명|사전
dining room|명|식당, 다이닝룸
doll|명|인형
DVD|명|디브이디
e-mail|명|이메일
either|부|~도 (부정문)
elementary|형|초보의, 초등의
everywhere|부|모든 곳에
excited|형|신이 난
exciting|형|흥미진진한
fairy|명|요정
February|명|2월
feel|동|느끼다
feeling|명|감정, 느낌
fever|명|열
find|동|찾다
first|형|첫 번째의
fishing|명|낚시
foggy|형|안개 낀
following|형|다음의
Friday|명|금요일
frog|명|개구리
get|동|얻다, 받다
ghost|명|유령
girlfriend|명|여자 친구
give|동|주다
glasses|명|안경
go|동|가다
good|형|좋은
grandfather|명|할아버지
grandparent|명|조부모
grape|명|포도
great|형|훌륭한, 큰
haircut|명|이발
handsome|형|잘생긴
hello|명|인사, 안녕
here|부|여기에
hometown|명|고향
how|부|어떻게
interested|형|관심 있는
interesting|형|흥미로운
interviewer|명|면접관
January|명|1월
July|명|7월
June|명|6월
just|부|방금, 단지
kite|명|연
know|동|알다
last name|명|성
later|부|나중에
leaf|명|잎
life|명|삶, 생명
like|동|좋아하다
lily|명|백합
lion|명|사자
little|형|작은
living|형|살아 있는
living room|명|거실
lonely|형|외로운
long|형|긴
look|명|봄, 표정
lot|부|많이
make|동|만들다
math|명|수학
May|명|5월
maybe|부|아마
mean|동|의미하다
meeting|명|회의
merry|형|즐거운
mobile phone|명|휴대 전화
Monday|명|월요일
monkey|명|원숭이
much|부|많이
nationality|명|국적
new|형|새로운
no|부|아니요
not|부|~이 아니다
notebook|명|공책
November|명|11월
now|부|지금
o'clock|부|~시 (정각)
October|명|10월
off|형|꺼진, 쉬는
OK|형|괜찮은
okay|형|좋은, 괜찮은
Olympics|명|올림픽
only|형|유일한
out|부|밖으로
own|형|자신의
painting|명|그림
palace|명|궁전
pardon|명|용서
pencil|명|연필
people|명|사람들
point|명|점, 요점
prince|명|왕자
princess|명|공주
problem|명|문제
purple|명|보라색
rabbit|명|토끼
reading|명|독서, 읽기
really|부|정말로
ribbon|명|리본
right|형|옳은, 오른쪽의
rose|명|장미
rude|형|무례한
sailor|명|선원
same|형|같은
Saturday|명|토요일
saw|명|톱
say|동|말하다
see|동|보다
September|명|9월
shopping|명|쇼핑
show|동|보여주다
shy|형|수줍은
smith|명|대장장이
smoking|명|흡연
snake|명|뱀
still|형|가만히 있는, 고요한
Sunday|명|일요일
super|형|대단한
swimming|명|수영
swimming pool|명|수영장
T-shirt|명|티셔츠
take|동|가져가다, 잡다
tell|동|말하다
temple|명|사원, 절
thanks|명|감사
then|부|그때, 그러고 나서
there|부|거기에
thing|명|것, 물건
think|동|생각하다
Thursday|명|목요일
tiger|명|호랑이
time|명|시간
tired|형|피곤한
toilet|명|화장실, 변기
too|부|너무, ~도
trousers|명|바지
Tuesday|명|화요일
turkey|명|칠면조
TV|명|텔레비전
use|동|사용하다
very|부|매우
want|동|원하다
way|명|길, 방법
Wednesday|명|수요일
well|형|건강한
when|부|언제
where|부|어디에
why|부|왜
work|명|일, 직장
year|명|해, 년
yes|부|네
yet|부|아직
yogurt|명|요구르트
across|부|건너서
adjective|명|형용사
advanced|형|고급의, 선진의
advertising|명|광고
after|부|뒤에, 후에
aged|형|~살의, 나이 든
alarm clock|명|자명종
all|부|완전히
amused|형|재미있어하는
amusement|명|즐거움, 오락
ancestor|명|조상
angel|명|천사
angrily|부|화가 나서
ankle|명|발목
annoying|형|짜증나는
anyway|부|어쨌든
anywhere|부|어디든
armchair|명|안락의자
armed|형|무장한
around|부|주위에, 약
astronaut|명|우주 비행사
atom|명|원자
badminton|명|배드민턴
banking|명|은행 업무
barber|명|이발사
bay|명|만
beg|동|간청하다, 구걸하다
beginning|명|시작
being|명|존재
belly|명|배
besides|부|게다가
blackboard|명|칠판
blonde|형|금발의
bloom|명|꽃, 개화
board game|명|보드게임
boil|동|끓이다
boiled|형|삶은
bookshelf|명|책꽂이
bookshop|명|서점
bored|형|지루해하는
bra|명|브래지어
breeze|명|산들바람
bride|명|신부
bus station|명|버스 터미널
bus stop|명|버스 정류장
bush|명|덤불
businesswoman|명|여성 사업가
camping|명|캠핑
can|명|캔, 깡통
capital letter|명|대문자
carrot|명|당근
cassette|명|카세트
cereal|명|시리얼, 곡물
champagne|명|샴페인
chess|명|체스
chili|명|고추
chimpanzee|명|침팬지
chin|명|턱
chirp|명|짹짹 소리
classical music|명|클래식 음악
click|동|클릭하다
climbing|명|등산, 암벽 등반
clown|명|광대
cola|명|콜라
comic|형|웃기는, 희극의
company|명|회사, 동행
composer|명|작곡가
confused|형|혼란스러운
cooking|명|요리
cricket|명|크리켓, 귀뚜라미
crowded|형|붐비는
crown|명|왕관
cupboard|명|찬장
curry|명|카레
curse|명|저주
cycling|명|자전거 타기
dam|명|댐
dancer|명|무용수
daylight|명|햇빛, 낮
department store|명|백화점
developed|형|발달한, 선진의
digital camera|명|디지털 카메라
dinosaur|명|공룡
disappointed|형|실망한
disappointing|형|실망스러운
disco|명|디스코
dishonest|형|부정직한
dizzy|형|어지러운
drawing|명|그림, 데생
dressed|형|옷을 입은
driver's license|명|운전면허증
drugstore|명|약국
duck|명|오리
earring|명|귀걸이
embarrassing|형|난처한
endangered|형|멸종 위기의
ending|명|결말
envy|명|부러움
even|부|~조차
fascinating|형|매혹적인
fast food|명|패스트푸드
feather|명|깃털
first name|명|이름
fisherman|명|어부
flea|명|벼룩
footballer|명|축구 선수
frank|형|솔직한
fridge|명|냉장고
fried|형|튀긴
frightened|형|겁먹은
frightening|형|무서운
garlic|명|마늘
given|형|정해진, 주어진
good-looking|형|잘생긴
grace|명|우아함, 은혜
grandchild|명|손주
granddad|명|할아버지
granddaughter|명|손녀
grandson|명|손자
greedy|형|탐욕스러운
grilled|형|구운
grocery store|명|식료품점
guidebook|명|안내서
half-price|형|반값의
ham|명|햄
handbag|명|핸드백
handicapped|형|장애가 있는
happily|부|행복하게
harmony|명|조화
headphone|명|헤드폰
heating|명|난방
high school|명|고등학교
hiking|명|하이킹
hip hop|명|힙합
hockey|명|하키
honey|명|꿀
however|부|그러나
hug|동|껴안다
hunter|명|사냥꾼
ID|명|신분증
ID card|명|신분증
in|부|안에
insect|명|곤충
instant|형|즉석의
IT|명|정보 기술
jelly|명|젤리
killer|명|살인자
kilo|명|킬로
kindly|형|친절한
kingdom|명|왕국
latest|형|최신의
laziness|명|게으름
learner|명|학습자
left-hand|형|왼쪽의
lemon|명|레몬
lemonade|명|레모네이드
lively|형|활기찬
lost|형|길을 잃은, 잃어버린
luckily|부|운 좋게
lyric|형|서정적인
main course|명|주요리
make-up|명|화장
married|형|결혼한
marvellous|형|놀라운 (영국식)
marvelous|형|놀라운, 멋진
meaning|명|의미
medal|명|메달
melon|명|멜론
midday|명|정오
mineral water|명|생수
missing|형|실종된, 빠진
mosque|명|모스크, 이슬람 사원
most|부|가장
mug|명|머그잔
mushroom|명|버섯
mysterious|형|신비한
napkin|명|냅킨
need|동|필요로 하다
oak|명|참나무
olive oil|명|올리브유
Olympic|형|올림픽의
omelet|명|오믈렛
on|부|계속해서, 켜져
onion|명|양파
organized|형|체계적인
orphan|명|고아
over|부|끝나서, 넘어서
overweight|형|과체중의
pacific|형|평화로운
pal|명|친구
PC|명|개인용 컴퓨터
pea|명|완두콩
pear|명|배 (과일)
pen friend|명|펜팔 친구
pence|명|펜스 (영국 화폐)
perfume|명|향수
perhaps|부|아마
pilgrim|명|순례자
pity|명|동정, 유감
playful|형|장난기 많은
playground|명|운동장, 놀이터
pleased|형|기쁜
pleasing|형|만족스러운
plural|명|복수형
police officer|명|경찰관
police station|명|경찰서
policewoman|명|여자 경찰관
post office|명|우체국
pronunciation|명|발음
psychologist|명|심리학자
punctuation|명|구두점
queen|명|여왕
quite|부|꽤
quiz|명|퀴즈
racket|명|라켓
rap|명|랩 (음악)
rather|부|다소, 오히려
rating|명|평가, 등급
relaxed|형|느긋한
retired|형|은퇴한
rhythm|명|리듬
right-hand|형|오른쪽의
roast|동|굽다
rob|동|강탈하다
robbery|명|강도 사건
robin|명|울새
romance|명|연애, 로맨스
rope|명|밧줄
roundabout|명|로터리
rugby|명|럭비
running|명|달리기
sailing|명|항해, 요트 타기
sandy|형|모래의
sauce|명|소스
sausage|명|소시지
schoolchild|명|학생
schoolwork|명|학업
scissors|명|가위
screw|명|나사
shampoo|명|샴푸
shop assistant|명|점원
shorts|명|반바지
singing|명|노래
singular|형|단수의
sitting room|명|거실
skateboarding|명|스케이트보드 타기
skating|명|스케이트
skiing|명|스키
sleepless|형|잠 못 이루는
snowboarding|명|스노보드 타기
so|부|그래서, 매우
soda|명|탄산음료
soft drink|명|청량음료
softly|부|부드럽게
somewhere|부|어딘가에
spaceship|명|우주선
spaghetti|명|스파게티
splash|동|튀기다
spoon|명|숟가락
sports center|명|스포츠 센터
stomachache|명|복통
stove|명|난로, 레인지
sunflower|명|해바라기
sunglasses|명|선글라스
sunlight|명|햇빛
superlative|명|최상급
superstar|명|슈퍼스타
supper|명|저녁 식사
surfing|명|서핑
surname|명|성
surprised|형|놀란
surprising|형|놀라운
swallow|동|삼키다
sweat|동|땀을 흘리다
sweetheart|명|애인
swimming costume|명|수영복
swimsuit|명|수영복 (원피스)
symphony|명|교향곡
table tennis|명|탁구
tablespoon|명|큰 숟가락
teenage|형|십대의
terrify|동|겁먹게 하다
text message|명|문자 메시지
therefore|부|그러므로
thief|명|도둑
third|형|세 번째의
thought|명|생각
toast|명|토스트, 건배
toe|명|발가락
toothache|명|치통
toothbrush|명|칫솔
tour guide|명|여행 가이드
traffic light|명|신호등
training|명|훈련
tram|명|전차
treasure|명|보물
underwater|형|수중의
uneasy|형|불안한
unforgettable|형|잊을 수 없는
unhealthy|형|건강에 해로운
unimportant|형|중요하지 않은
up|부|위로
used|형|중고의
video game|명|비디오 게임
vocabulary|명|어휘
walking|명|걷기
washing machine|명|세탁기
web page|명|웹 페이지
website|명|웹사이트
wedding|명|결혼식
weep|명|울음
well-known|형|잘 알려진
worried|형|걱정하는
worse|형|더 나쁜
worst|형|최악의
writing|명|글쓰기
abnormal|형|비정상적인
aborigine|명|원주민
abundance|명|풍부
abundant|형|풍부한
academy|명|학원, 학회
accidental|형|우연한
accidentally|부|우연히
ache|명|아픔
acknowledgment|명|인정, 감사
acquaintance|명|아는 사람, 지인
addressee|명|수신인
admiration|명|감탄, 존경
adorable|형|사랑스러운
adverb|명|부사
adverbial|형|부사의
advert|명|광고
aerobics|명|에어로빅
affection|명|애정
afterwards|부|나중에
air conditioning|명|냉방 장치
air force|명|공군
alcoholic|형|알코올이 든
allergic|형|알레르기가 있는
aloud|부|소리 내어
alphabet|명|알파벳
amazed|형|놀란
amazing|형|놀라운
ambulance|명|구급차
amusing|형|재미있는
animated|형|활기찬, 만화 영화의
animation|명|애니메이션
annoyance|명|짜증
annoyed|형|짜증 난
ant|명|개미
anti|형|반대하는
antonym|명|반의어
anxiously|부|걱정스럽게
ape|명|유인원
applaud|동|박수를 치다
applause|명|박수
arithmetic|명|산수
arrow|명|화살
aspirin|명|아스피린
astronomer|명|천문학자
Atlantic|형|대서양의
atomic|형|원자의
auxiliary|형|보조의
avenue|명|대로, 거리
awesome|형|굉장한
babysit|동|아이를 봐주다
babysitter|명|아이 돌보미
backache|명|요통
backpacker|명|배낭여행자
backpacking|명|배낭여행
bacon|명|베이컨
bald|형|대머리의
bandage|명|붕대
bang|명|쾅 하는 소리
bank account|명|은행 계좌
bare|형|맨-, 벌거벗은
bark|명|나무껍질, 짖는 소리
barman|명|바텐더
basin|명|대야, 세면대
bathe|동|목욕하다
beard|명|턱수염
beast|명|짐승
beautifully|부|아름답게
beaver|명|비버
bedside|명|침대 옆
beloved|형|사랑하는
bent|형|구부러진
bilingual|형|2개 국어를 하는
biochemistry|명|생화학
bishop|명|주교
bleed|동|피를 흘리다
blessing|명|축복
blog|명|블로그
blogger|명|블로거
blush|명|홍조
boldly|부|대담하게
booking|명|예약
boredom|명|지루함
bow|명|활, 절
boxing|명|권투
bracelet|명|팔찌
brainstorming|명|브레인스토밍
brand-new|형|새것의
brass|명|놋쇠
bravely|부|용감하게
breathless|형|숨이 찬
breeding|명|번식, 사육
brightly|부|밝게
broccoli|명|브로콜리
bronze|명|청동
brotherhood|명|형제애
buddy|명|친구, 단짝
bullet|명|총알
bump|동|부딪치다
bureau|명|사무소, 국
burglar|명|빈집털이범
burning|형|불타는
butcher|명|정육점 주인
cabbage|명|양배추
calf|명|송아지, 종아리
calmness|명|침착함
camel|명|낙타
campsite|명|야영지
canal|명|운하
candle|명|양초
canned|형|통조림의
canoe|명|카누
canteen|명|구내식당
capsule|명|캡슐
carelessly|부|부주의하게
carelessness|명|부주의
carriage|명|마차, 객차
cashpoint|명|현금 인출기
categorize|동|분류하다
cave|명|동굴
CD-ROM|명|시디롬
central heating|명|중앙 난방
challenging|형|도전적인, 힘든
chariot|명|전차 (고대)
chat show|명|토크쇼
check-in|명|탑승 수속
check-in counter|명|탑승 수속 카운터
check-in desk|명|체크인 데스크
cheerful|형|쾌활한
chemist|명|화학자, 약사
cherish|동|소중히 여기다
chest of drawers|명|서랍장
chewing gum|명|껌
choir|명|합창단
choke|동|숨이 막히다
Christian|형|기독교의
chronological|형|시간 순서대로의
chuckle|명|킬킬 웃음
circular|형|원형의
civilization|명|문명
cliff|명|절벽
climber|명|등반가
coastal|형|해안의
cod|명|대구
coffin|명|관
columnist|명|칼럼니스트
comedian|명|코미디언
comet|명|혜성
comma|명|쉼표
common sense|명|상식
companion|명|동반자
complicated|형|복잡한
concerned|형|걱정하는
confusing|형|헷갈리는
connexion|명|연결 (옛 철자)
conquer|동|정복하다
consonant|명|자음
continual|형|거듭되는
counseling|명|상담
countless|형|셀 수 없이 많은
courage|명|용기
courageous|형|용감한
courgette|명|애호박
creator|명|창조자
crossing|명|횡단보도, 건널목
crossroads|명|교차로
crow|명|까마귀
cruel|형|잔인한
cucumber|명|오이
cultivate|동|경작하다, 기르다
curiosity|명|호기심
curiously|부|호기심에서
curly|형|곱슬곱슬한
curriculum|명|교육과정
customs|명|세관
CV|명|이력서
daisy|명|데이지
damaged|형|손상된
damp|형|축축한
dangerously|부|위험하게
dating|명|데이트
daze|명|멍한 상태
dazzle|명|눈부심
deadly|형|치명적인
deaf|형|귀가 먹은
debris|명|잔해
defender|명|수비수
definite article|명|정관사
delighted|형|아주 기뻐하는
delightful|형|매우 기쁜
depressed|형|우울한
depressing|형|우울하게 만드는
despair|명|절망
destructive|형|파괴적인
detective|명|탐정
devastating|형|파괴적인, 충격적인
devotion|명|헌신
diameter|명|지름
diaper|명|기저귀
diligent|형|부지런한
dioxide|명|이산화물
dirt|명|먼지, 흙
disabled|형|장애가 있는
disc|명|원반, 디스크
disc jockey|명|디스크자키
discomfort|명|불편함
disgusting|형|역겨운
disk jockey|명|디제이
distinctly|부|뚜렷하게
disturbance|명|소란
diver|명|잠수부
divine|형|신의, 신성한
diving|명|다이빙
divorced|형|이혼한
DJ|명|디제이
doc|명|의사 (구어)
dolphin|명|돌고래
doze|명|선잠
drown|동|익사하다
drunk|형|술 취한
dude|명|녀석
dustbin|명|쓰레기통
dusty|형|먼지투성이의
duty-free|형|면세의
duvet|명|이불
dynasty|명|왕조
eagerness|명|열의
earache|명|귀앓이
earnest|형|진지한
easy-going|형|느긋한
easygoing|형|태평한
eco|명|생태, 친환경
ecological|형|생태학의
ecology|명|생태학
economics|명|경제학
ecosystem|명|생태계
ecstasy|명|황홀감
elbow|명|팔꿈치
electron|명|전자
embarrassed|형|당황한
embarrassment|명|당혹감
emotionally|부|감정적으로
emperor|명|황제
encouragement|명|격려
encouraging|형|고무적인
endanger|동|위험에 빠뜨리다
engaged|형|약혼한, 통화 중인
engineering|명|공학
Englishman|명|영국 남자
enjoyment|명|즐거움
enquiry|명|문의 (영국식)
entertainer|명|연예인
environmentalist|명|환경 운동가
eternal|형|영원한
eternity|명|영원
examiner|명|시험관
exchange rate|명|환율
excitedly|부|흥분하여
exhausted|형|기진맥진한
experienced|형|경험 많은
extensively|부|광범위하게
extinct|형|멸종된
extinction|명|멸종
extreme sports|명|익스트림 스포츠
eyesight|명|시력
face to face|부|얼굴을 맞대고
face-to-face|형|대면의
faint|형|희미한
faithful|형|충실한
fake|형|가짜의
fallen|형|떨어진, 쓰러진
fantasy|명|공상
faraway|형|멀리 떨어진
farming|명|농업
farmland|명|농지
farther|부|더 멀리
farthest|부|가장 멀리
fashionable|형|유행하는
feast|명|잔치
festive|형|축제의
fetch|동|가져오다
feverishly|부|열광적으로
fifth|명|다섯 번째
filling|명|소, 충전재
film-maker|명|영화 제작자
finding|명|조사 결과
fire station|명|소방서
first floor|명|1층 (영국: 2층)
first lady|명|영부인
first-floor|형|1층의
flock|명|떼
fluently|부|유창하게
flunk|동|낙제하다
flute|명|플루트
fond|형|좋아하는
fondness|명|애정
foolish|형|어리석은
forbidden|형|금지된
forehead|명|이마
forgive|동|용서하다
fortnight|명|2주
freezer|명|냉동고
freezing|형|몹시 추운
freshman|명|신입생
friendliness|명|친절
fright|명|공포
frost|명|서리
frozen|형|얼어붙은
frustrated|형|좌절한
frying pan|명|프라이팬
full stop|명|마침표
full-time|형|정규직의
funeral|명|장례식
fur|명|털, 모피
furthest|부|가장 멀리
fuss|명|법석
gall|명|뻔뻔함
gaol|명|감옥 (영국식)
gardening|명|원예
genetically|부|유전적으로
genetics|명|유전학
geology|명|지질학
gifted|형|재능 있는
giggle|명|낄낄거림
ginger|명|생강
giraffe|명|기린
glide|명|미끄러지듯 나아감
glimpse|명|힐끗 봄
glint|명|반짝임
glorious|형|영광스러운
glory|명|영광
goalkeeper|명|골키퍼
goddess|명|여신
golfer|명|골프 선수
gorgeous|형|아주 멋진
gorilla|명|고릴라
gown|명|드레스, 가운
graceful|형|우아한
gratitude|명|감사
gravy|명|육즙 소스
greeting|명|인사
groom|명|신랑
ground floor|명|1층
grouping|명|그룹 나누기
guilt|명|죄책감
guitarist|명|기타 연주자
gymnastics|명|체조
habitat|명|서식지
hairdresser|명|미용사
hairdryer|명|헤어드라이어
hammer|명|망치
hand-held|형|손에 들고 쓰는
handball|명|핸드볼
handkerchief|명|손수건
handshake|명|악수
handwriting|명|손글씨
hanging|형|매달린
hard-working|형|열심히 일하는
hardship|명|고난
harness|명|마구, 안전벨트
hasty|형|성급한
hatch|명|해치, 뚜껑 문
hatred|명|증오
haunt|명|자주 가는 곳
haven|명|안식처
heal|동|치유하다
healing|형|치유하는
hearing|명|청력, 청문회
heart attack|명|심장마비
hearted|형|~한 마음을 가진
hearty|형|따뜻한, 푸짐한
heaven|명|천국
heavenly|형|천국의
heel|명|발뒤꿈치
helpless|형|무력한
herd|명|떼, 무리
hidden|형|숨겨진
hip|명|엉덩이
HIV|명|에이즈 바이러스
holy|형|신성한
honesty|명|정직
honeymoon|명|신혼여행
hop|명|깡충 뜀
hopeful|형|희망에 찬
hopeless|형|가망 없는
horn|명|뿔, 경적
horrify|동|소름 끼치게 하다
hostel|명|호스텔
housework|명|집안일
humanity|명|인류, 인간성
humid|형|습한
humorous|형|유머러스한
hurriedly|부|서둘러
hut|명|오두막
ice hockey|명|아이스하키
ice skating|명|아이스 스케이트
identity card|명|신분증
idiom|명|관용구
idol|명|우상
illegally|부|불법적으로
illuminate|동|비추다
imaginary|형|가상의
imitate|동|모방하다
immigrate|동|이주해 오다
immigration|명|이민, 출입국 관리
improper|형|부적절한
inconvenient|형|불편한
incredible|형|믿을 수 없는
incredibly|부|믿을 수 없을 정도로
indefinite article|명|부정관사
indoors|부|실내에서
infinitive|명|부정사
inhabitant|명|주민
inhale|동|들이마시다
inject|동|주사하다
innermost|형|가장 깊은 곳의
innovator|명|혁신가
insane|형|미친
inscribe|동|새기다
inscription|명|비문, 새긴 글
instal|동|설치하다 (영국식)
intentionally|부|의도적으로
intermission|명|중간 휴식
interviewee|명|면접 대상자
involuntarily|부|무의식적으로
involved|형|관련된
ironing|명|다림질
isle|명|섬
ivory|명|상아
jade|명|옥
jar|명|병, 단지
jealous|형|질투하는
jewel|명|보석
jogging|명|조깅
judgement|명|판단 (영국식)
jug|명|주전자, 물병
juicy|형|즙이 많은
jumper|명|스웨터
jungle|명|정글
kettle|명|주전자
killing|명|살인
kindness|명|친절
kitten|명|새끼 고양이
knit|동|뜨개질하다
lamb|명|새끼 양
last|부|마지막으로
lasting|형|지속되는
latecomer|명|지각자
lawful|형|합법적인
leading|형|선두의, 주요한
lessen|동|줄이다
lettuce|명|상추
liar|명|거짓말쟁이
liberate|동|해방시키다
liberation|명|해방
lifelong|형|평생의
lightly|부|가볍게
lightning|명|번개
likeness|명|닮음
limited|형|제한된
limp|동|절뚝거리다
liver|명|간
loaf|명|빵 한 덩이
lodge|명|오두막, 산장
lorry|명|화물차 (영국식)
lottery|명|복권
loudspeaker|명|확성기
lovingly|부|다정하게
lung|명|폐
magical|형|마법의
magician|명|마술사
magnificent|형|웅장한
mailbox|명|우편함
mankind|명|인류
maple|명|단풍나무
marble|명|대리석, 구슬
marine|형|바다의
marked|형|뚜렷한
mash|동|으깨다
mathematician|명|수학자
meditate|동|명상하다
meditation|명|명상
Mediterranean|명|지중해
melt|동|녹다
memorable|형|기억할 만한
mend|동|수선하다
mentally|부|정신적으로
message board|명|게시판
messy|형|지저분한
middle-aged|형|중년의
miracle|명|기적
mischief|명|장난
miserable|형|비참한
misery|명|고통, 비참함
misty|형|안개 낀
misunderstanding|명|오해
mixing bowl|명|믹싱 볼
modal|명|조동사
modal verb|명|조동사
moisture|명|수분
molecule|명|분자
monk|명|수도승
monster|명|괴물
more|부|더
moss|명|이끼
motherland|명|조국
motionless|형|움직이지 않는
motto|명|좌우명
mountaintop|명|산꼭대기
mourn|동|애도하다
mud|명|진흙
mule|명|노새
murderer|명|살인자
mustard|명|겨자
naked|형|벌거벗은
narrate|동|이야기하다, 서술하다
navy blue|형|남색의
near|형|가까운
nectar|명|꿀, 과즙
needle|명|바늘
nephew|명|조카 (남)
nervousness|명|긴장
ness|명|곶
newborn|형|갓 태어난
next door|부|옆집에
next-door|형|옆집의
nickname|명|별명
niece|명|조카 (여)
nightlife|명|밤 문화
nod|명|끄덕임
noisily|부|시끄럽게
nonsense|명|허튼소리
northeast|형|북동쪽의
northeastern|형|북동부의
northwest|형|북서쪽의
northwestern|형|북서부의
noticeable|형|눈에 띄는
noticeboard|명|게시판
notorious|형|악명 높은
novelist|명|소설가
nowhere|부|아무 데도
nucleus|명|핵
nutrient|명|영양소
nutritious|형|영양가 높은
oily|형|기름진
old-fashioned|형|구식의
onstage|형|무대 위의
opening|명|개막, 구멍
oppress|동|억압하다
oppression|명|억압
orbit|명|궤도
orderly|형|정돈된
organism|명|유기체
out-of-date|형|시대에 뒤진
outdoors|부|야외에서
outer|형|바깥쪽의
outlaw|명|무법자
outward|형|겉보기의
overjoyed|형|매우 기뻐하는
overwhelming|형|압도적인
overwork|명|과로
owing|형|미지불의
oxygen|명|산소
packing|명|짐 싸기, 포장
paddle|명|노
paid|형|유급의
palm|명|손바닥, 야자수
parachute|명|낙하산
paradise|명|낙원
paralyze|동|마비시키다
parental|형|부모의
parking|명|주차
parrot|명|앵무새
part-time|형|시간제의
participle|명|분사
patrol|명|순찰
peanut|명|땅콩
peculiar|형|이상한, 독특한
penniless|형|무일푼의
penny|명|페니
per cent|명|퍼센트
persuasive|형|설득력 있는
phantom|형|유령의, 환영의
philosopher|명|철학자
phoenix|명|불사조
phrasal verb|명|구동사
piety|명|경건함
pineapple|명|파인애플
pleasantly|부|즐겁게
pocket money|명|용돈
poisonous|형|독성이 있는
politely|부|공손하게
pollutant|명|오염 물질
pond|명|연못
pork|명|돼지고기
possessive|형|소유욕이 강한
postman|명|우체부
powder|명|가루
prayer|명|기도
prefix|명|접두사
prepared|형|준비된
preposition|명|전치사
preschool|형|취학 전의
preservation|명|보존
priest|명|신부, 사제
primary school|명|초등학교
primitive|형|원시적인
procrastination|명|미루는 버릇
prohibition|명|금지
pronoun|명|대명사
proverb|명|속담
public transport|명|대중교통
pullover|명|풀오버 스웨터
puppy|명|강아지
purify|동|정화하다
quake|명|지진
qualified|형|자격을 갖춘
question mark|명|물음표
radiation|명|방사선
railroad|명|철도
rainforest|명|열대 우림
raspberry|명|산딸기
razor|명|면도기
recite|동|암송하다
reclaim|동|되찾다, 개간하다
recording|명|녹음, 녹화
recycled|형|재활용된
recycling|명|재활용
reef|명|암초
refreshments|명|다과
relaxing|형|편안한
remembrance|명|추모, 기억
remote control|명|리모컨
respectable|형|존경할 만한, 괜찮은
retell|동|다시 말하다
retrospect|명|회상
reunification|명|재통일
reunify|동|재통일하다
riddle|동|구멍투성이로 만들다
ridiculous|형|터무니없는
ripe|형|익은
roadside|명|길가
rolling|형|구르는, 완만한
rotten|형|썩은
rubbish|명|쓰레기
rudely|부|무례하게
runaway|명|가출자, 도망자
runway|명|활주로
sacred|형|신성한
sadness|명|슬픔
safari|명|사파리
salmon|명|연어
sandal|명|샌들
satisfied|형|만족한
saucepan|명|냄비
saucer|명|받침 접시
scared|형|무서워하는
scary|형|무서운
scenic|형|경치 좋은
schoolmate|명|학교 친구
schoolteacher|명|학교 선생님
science fiction|명|공상 과학 소설
scold|동|꾸짖다
seawater|명|바닷물
seaweed|명|해초
second-hand|형|중고의
secondary school|명|중등학교
secretly|부|몰래
self-service|형|셀프서비스의
selfish|형|이기적인
sensation|명|감각, 센세이션
setting|명|배경, 설정
settler|명|정착민
shadowy|형|그늘진, 수상한
shallow|형|얕은
shame|명|수치심, 유감
shameful|형|부끄러운
shave|동|면도하다
sheriff|명|보안관
shiny|형|반짝이는
shiver|동|떨다
shocked|형|충격받은
shocking|형|충격적인
shrimp|명|새우
sickness|명|병
signpost|명|이정표
silk|명|비단
skeleton|명|해골, 뼈대
skyscraper|명|고층 빌딩
slavery|명|노예 제도
smoker|명|흡연자
sneeze|명|재채기
snowboard|명|스노보드
snowstorm|명|눈보라
soap opera|명|연속극
social networking|명|소셜 네트워킹
someplace|부|어딘가에
soothe|동|달래다
sophomore|명|2학년생
sore|형|아픈, 쓰린
sorrow|명|슬픔
sour|형|신, 시큼한
southeast|형|남동쪽의
southwest|형|남서쪽의
souvenir|명|기념품
sparkle|명|반짝임
spelling|명|철자
sphere|명|구, 영역
spice|명|양념
spicy|형|매운
spider|명|거미
spinach|명|시금치
spiral|형|나선형의
spiritual|형|정신적인
spoil|동|망치다, 버릇없게 만들다
sponge|명|스펀지
sports|형|스포츠의
sportsmanship|명|스포츠맨 정신
sticky|형|끈적거리는
stormy|형|폭풍우가 치는
storyteller|명|이야기꾼
strangely|부|이상하게
straw|명|빨대, 짚
strawberry|명|딸기
stressed|형|스트레스를 받은
stressful|형|스트레스가 많은
stricken|형|시달리는
stubborn|형|고집 센
stuck|형|갇힌, 꼼짝 못 하는
stuffed|형|속을 채운, 배부른
stumble|동|비틀거리다
stun|동|기절시키다, 깜짝 놀라게 하다
stunning|형|굉장히 멋진
stylish|형|세련된
subconscious|형|잠재의식의
submarine|명|잠수함
suffix|명|접미사
suicide|명|자살
sunbathe|동|일광욕하다
sundial|명|해시계
sunrise|명|일출
sunset|명|일몰
superstition|명|미신
supportive|형|지지하는
surgeon|명|외과 의사
surrounding|형|주변의
survivor|명|생존자
swarm|명|떼
sweatshirt|명|맨투맨 티
swimmer|명|수영 선수
swollen|형|부어오른
sword|명|칼, 검
syndrome|명|증후군
take-off|명|이륙
takeaway|명|포장 음식
takeoff|명|이륙
talented|형|재능 있는
talkative|형|수다스러운
tasteless|형|맛없는, 무례한
teaching|명|가르치기, 교육
teammate|명|팀 동료
teamwork|명|팀워크
tease|명|놀림
telecommunications|명|원격 통신
telegram|명|전보
temper|명|성질, 화
tense|형|긴장한
terribly|부|몹시
terrified|형|겁에 질린
terror|명|공포
terrorism|명|테러리즘
thankful|형|고마워하는
threatening|형|위협적인
thriller|명|스릴러
through|부|통과하여
thump|동|쿵 치다
thunder|명|천둥
thunderous|형|우레 같은
thus|부|따라서
tightly|부|단단히
tin|명|주석, 깡통
tiring|형|피곤하게 하는
toothpaste|명|치약
tornado|명|토네이도
toss|동|던지다
tracksuit|명|운동복
traffic jam|명|교통 체증
tragedy|명|비극
tragic|형|비극적인
transitional|형|과도기의
travel agent|명|여행사 직원
tremble|동|떨다
trumpet|명|트럼펫
trustworthy|형|신뢰할 수 있는
turbulence|명|난기류, 격동
turning|명|모퉁이, 갈림길
turtle|명|거북
unafraid|형|두려워하지 않는
unbelievable|형|믿기 어려운
uncontrollable|형|통제할 수 없는
underage|형|미성년의
underpants|명|팬티
undo|동|원래대로 하다, 풀다
undress|동|옷을 벗다
unfairly|부|부당하게
unfit|형|부적합한
unfold|동|펼치다
unfortunate|형|불운한
unfriendly|형|불친절한
unheard|형|들리지 않는
uninterested|형|무관심한
uninteresting|형|재미없는
unlucky|형|운이 없는
unpack|동|짐을 풀다
untidy|형|어수선한
unwanted|형|원치 않는
unwell|형|몸이 안 좋은
up-to-date|형|최신의
uplifted|형|고양된
upload|동|업로드하다
useless|형|쓸모없는
vain|형|헛된, 허영심 많은
vein|명|정맥
vet|명|수의사
vice president|명|부통령, 부사장
video clip|명|영상 클립
viewpoint|명|관점
violently|부|격렬하게
visually|부|시각적으로
vivid|형|생생한
vividly|부|생생하게
volcano|명|화산
vowel|명|모음
voyage|명|항해
wagon|명|마차, 화물차
wardrobe|명|옷장
warmly|부|따뜻하게
warmth|명|따뜻함
warning|명|경고
warrior|명|전사
washbowl|명|세숫대야
wasteful|형|낭비하는
waterfall|명|폭포
wax|명|왁스, 밀랍
weather forecast|명|일기 예보
webcam|명|웹캠
well-dressed|형|옷을 잘 입은
westward|부|서쪽으로
wetland|명|습지
while|명|잠깐, 동안
whistle|명|호루라기, 휘파람
wildly|부|거칠게, 열광적으로
windscreen|명|앞유리 (영국식)
windsurfing|명|윈드서핑
wither|동|시들다
wizard|형|훌륭한, 마법의
working|형|일하는, 작동하는
workout|명|운동
worn|형|닳은
wrapping|명|포장지
wrist|명|손목
written|형|글로 쓴
yell|명|고함
abandoned|형|버려진
abnormally|부|비정상적으로
aboriginal|형|원주민의
abruptly|부|갑자기
absentee|명|결석자
absurd|형|터무니없는
accessibility|명|접근성
achievable|형|성취할 수 있는
acute|형|극심한, 급성의
adaptable|형|적응할 수 있는
addict|명|중독자
addicted|형|중독된
addiction|명|중독
admirable|형|감탄할 만한
admiringly|부|감탄하며
admittedly|부|인정하건대
adopted|형|입양된
adore|동|아주 좋아하다
adorn|동|장식하다
advent|명|출현
adventurous|형|모험심이 강한
adversely|부|불리하게
adversity|명|역경
affectionate|형|다정한
affectionately|부|다정하게
ageless|형|나이를 먹지 않는
aggressively|부|공격적으로
agonize|동|고민하다
agony|명|극심한 고통
aircrew|명|항공기 승무원
alcoholism|명|알코올 중독
alphabetical|형|알파벳순의
altar|명|제단
altitude|명|고도
amazement|명|놀라움
amazingly|부|놀랍게도
ambiguity|명|애매함
ambiguous|형|애매모호한
ammonia|명|암모니아
amplifier|명|앰프
amplify|동|증폭시키다
analogy|명|비유
anchor|명|닻, 앵커
anchorage|명|정박지
anchorman|명|뉴스 앵커 (남)
anchorperson|명|뉴스 앵커
anguish|명|비통
animate|동|생기를 불어넣다
anonymous|형|익명의
antiaircraft|형|대공의
antibacterial|형|항균의
anticancer|명|항암
anticipation|명|기대, 예상
antipollution|명|오염 방지
antistatic|형|정전기 방지의
antivirus|명|바이러스 백신
apostrophe|명|아포스트로피
appreciative|형|감사하는
arch|명|아치
archeologist|명|고고학자
arctic|형|북극의
arena|명|경기장
aristocracy|명|귀족
armful|명|한 아름
arouse|동|불러일으키다
arrogant|형|거만한
artery|명|동맥
articulate|동|분명히 표현하다
artificially|부|인위적으로
artistry|명|예술성
ash|명|재
aspiration|명|열망
aspire|동|열망하다
assault|명|폭행, 공격
astonish|동|깜짝 놀라게 하다
astonished|형|깜짝 놀란
astonishing|형|놀라운
astonishment|명|깜짝 놀람
astronomy|명|천문학
athletics|명|육상 경기
attached|형|첨부된, 애착을 가진
attainable|형|이룰 수 있는
attainment|명|달성
attentive|형|주의 깊은
attentively|부|주의 깊게
attractiveness|명|매력
atypical|형|이례적인
aubergine|명|가지 (영국식)
authoritative|형|권위 있는
awe|명|경외감
ax|명|도끼
axe|명|도끼 (영국식)
backup|명|예비, 백업
backwards|부|뒤로
backyard|명|뒷마당
bad-tempered|형|성질 나쁜
balanced|형|균형 잡힌
balky|형|말을 안 듣는
ballad|명|발라드
ballet|명|발레
barbershop|명|이발소
barley|명|보리
barn|명|헛간
barometer|명|기압계, 지표
barren|형|척박한
bartender|명|바텐더
bathhouse|명|목욕탕
battlefield|명|전쟁터
beagle|명|비글
beak|명|부리
bearing|명|관련, 태도
beautify|동|아름답게 하다
bellow|동|고함치다
belongings|명|소지품
benevolence|명|자비심
benevolent|형|자비로운
berry|명|베리, 산딸기류
bestow|동|수여하다
bestseller|명|베스트셀러
betray|동|배신하다
bewilder|동|당황하게 하다
bewilderment|명|당혹감
bidding|명|입찰
bikini|명|비키니
billion|명|10억
bio|명|약력
biotechnology|명|생명 공학
birdcage|명|새장
birthplace|명|출생지
bitterly|부|몹시, 비통하게
bizarre|형|기이한
blade|명|칼날
blaze|명|화염
blindly|부|맹목적으로
blindness|명|실명
blink|동|눈을 깜빡이다
bloodstream|명|혈류
bloody|형|피투성이의
blooming|형|꽃이 핀
blossom|명|꽃
blur|동|흐릿하게 하다
blurt|명|불쑥 내뱉음
boiling|형|끓는
bolt|명|볼트, 빗장
bombard|명|포격
bomber|명|폭격기
bombing|명|폭격
bony|형|뼈만 앙상한
bookish|형|책을 좋아하는
bookmark|명|책갈피
bossy|형|으스대는
botany|명|식물학
bothered|형|신경 쓰는
bothersome|형|성가신
bourbon|명|버번위스키
boxer|명|권투 선수
brag|명|자랑
bravery|명|용감함
breakable|형|깨지기 쉬운
breakup|명|이별, 해체
breathtaking|형|숨 막히게 멋진
breezy|형|산들바람이 부는
brewery|명|양조장
brilliantly|부|훌륭하게
broadcaster|명|방송인
brother-in-law|명|처남, 매형
bruise|명|멍
bud|명|싹, 봉오리
bulimia|명|폭식증
bully|동|괴롭히다
bum|명|엉덩이, 부랑자
bumper|명|범퍼
bun|명|번 (빵)
burdensome|형|부담스러운
burglary|명|절도
burgle|동|도둑질하다
burial|명|매장
bustle|동|바삐 움직이다
bustling|형|북적거리는
buzz|명|윙윙거림
calmly|부|침착하게
candidate|명|후보자
cane|명|지팡이, 줄기
cannonball|명|포탄
canon|명|규범, 정전
caption|명|자막, 사진 설명
captive|명|포로
caravan|명|캠핑카, 대상
carbon dioxide|명|이산화탄소
carbon footprint|명|탄소 발자국
carbon monoxide|명|일산화탄소
cardboard|명|판지
cardigan|명|카디건
carefree|형|근심 걱정 없는
caring|형|배려하는
carnival|명|축제
carpool|명|카풀
carve|동|조각하다
cascade|명|작은 폭포
casually|부|무심코, 가볍게
catalyst|명|촉매
catastrophic|형|대재앙의
catchy|형|기억하기 쉬운
categorization|명|분류
catering|명|출장 요리
cathedral|명|대성당
cellar|명|지하 저장실
cellist|명|첼로 연주자
cello|명|첼로
cemetery|명|공동묘지
centigrade|명|섭씨
chancellor|명|총리, 총장
chaotic|형|혼란스러운
charming|형|매력적인
checkpoint|명|검문소
cheeky|형|건방진
cheerfully|부|쾌활하게
cheerfulness|명|쾌활함
chemotherapy|명|화학 요법
cherished|형|소중한
cherry|명|체리
chew|동|씹다
childish|형|유치한
chimney|명|굴뚝
chop|동|썰다
circuitry|명|전기 회로
citywide|형|시 전역의
clam|명|조개
clearness|명|명료함
clerical|형|사무직의
climate change|명|기후 변화
clog|동|막히다
clumsy|형|서투른
coaching|명|코칭, 지도
coarse|형|거친
coastline|명|해안선
cocktail|명|칵테일
cocoa|명|코코아
coconut|명|코코넛
coherence|명|일관성
coherent|형|일관성 있는
coincidence|명|우연의 일치
collocation|명|연어 (단어 결합)
colon|명|콜론, 결장
coma|명|혼수상태
commemorate|동|기념하다
commonwealth|명|연방
communicative|형|의사소통의
compassion|명|연민
compassionate|형|동정심 있는
complexion|명|안색
compress|명|압박 붕대
compression|명|압축
conceit|명|자만
conceivable|형|상상할 수 있는
conceive|동|상상하다, 임신하다
conception|명|개념, 구상
cone|명|원뿔
conference|명|회의, 학회
conferencing|명|회의 (원격)
confess|동|고백하다
confession|명|고백
confidently|부|자신 있게
conquest|명|정복
conscience|명|양심
consciousness|명|의식
consolation|명|위로
console|동|위로하다
contaminate|동|오염시키다
contempt|명|경멸
contradictory|형|모순된
converse|명|정반대
conversely|부|반대로
convinced|형|확신하는
coral|명|산호
cornerstone|명|초석
cornet|명|코넷 (악기)
corona|명|코로나
corporal|형|신체의
correctness|명|정확성
corresponding|형|상응하는
corridor|명|복도
cosiness|명|아늑함 (영국식)
cottage|명|오두막집
countryman|명|동포
countrywide|형|전국적인
coward|명|겁쟁이
cowardly|형|비겁한
coziness|명|아늑함
cozy|형|아늑한
crab|명|게
craftsman|명|장인
crater|명|분화구
crawl|동|기어가다
crease|명|주름
creatively|부|창의적으로
creek|명|개울
creepy|형|오싹한
critically|부|비판적으로, 위독하게
crocodile|명|악어
crossly|부|짜증 내며
cruelly|부|잔인하게
cruelty|명|잔인함
crystallize|동|구체화하다, 결정화하다
cube|명|정육면체
cubism|명|입체파
cuff|명|소맷부리
culmination|명|정점
culturally|부|문화적으로
curl|명|곱슬머리
cursor|명|커서
cyberaddict|명|인터넷 중독자
cybercafe|명|피시방
cybercrime|명|사이버 범죄
cyberpet|명|사이버 애완동물
cyberschool|명|온라인 학교
cyberspace|명|사이버 공간
cyclist|명|자전거 타는 사람
daft|형|바보 같은
dandelion|명|민들레
darling|형|사랑하는
dated|형|구식인
daughter-in-law|명|며느리
dawn|명|새벽
de facto|형|사실상의
dearly|부|몹시, 대단히
debit card|명|직불카드
decay|동|썩다
deceive|동|속이다
deceptive|형|기만적인
decisive|형|결정적인
decomposition|명|분해, 부패
decorative|형|장식용의
deduce|동|추론하다
deer|명|사슴
deforestation|명|삼림 벌채
dehumanize|동|인간성을 빼앗다
delicacy|명|별미, 섬세함
delicately|부|섬세하게
demanding|형|요구가 많은, 힘든
denim|명|데님
dense|형|빽빽한
densely|부|빽빽하게
descend|동|내려오다
desolation|명|황량함
desperately|부|필사적으로
desperation|명|절망
despise|동|경멸하다
destiny|명|운명
detachment|명|분리, 무관심
detailed|형|상세한
determined|형|단단히 결심한
determiner|명|한정사
developing|형|개발 중인
devil|명|악마
devoted|형|헌신적인
diarrhea|명|설사
dictator|명|독재자
digest|명|요약
dignify|동|위엄 있게 하다
dignity|명|존엄성
dim|형|어둑한
dime|명|10센트 동전
diphtheria|명|디프테리아
disappearance|명|사라짐
disapproval|명|반감
disapprove|동|못마땅해하다
disciple|명|제자
discredit|동|신용을 떨어뜨리다
disgrace|명|불명예
dishonesty|명|부정직
disillusion|동|환멸을 느끼게 하다
disorderly|형|무질서한
disorganized|형|체계적이지 못한
dispensable|형|없어도 되는
displeasure|명|불쾌감
disqualify|동|자격을 박탈하다
disregard|명|무시
dissatisfaction|명|불만
dissident|명|반체제 인사
distinguished|형|저명한
distressing|형|괴로운
diversion|명|우회로, 기분 전환
divided|형|분열된
DNA|명|디엔에이
donkey|명|당나귀
doorkeeper|명|문지기
doorway|명|출입구
dorm|명|기숙사
dormitory|명|기숙사
doubly|부|두 배로
dove|명|비둘기
downfall|명|몰락
dowry|명|지참금
drapery|명|휘장
draught|명|외풍 (영국식)
dread|동|몹시 두려워하다
dreadful|형|끔찍한
dreamy|형|꿈꾸는 듯한
drinkable|형|마실 수 있는
droop|명|축 늘어짐
dropout|명|중퇴자
duel|명|결투
dumb|형|멍청한, 말 못 하는
duplication|명|복제, 중복
dwarf|명|난쟁이
dye|명|염료
eagerly|부|열심히
eagle|명|독수리
earnings|명|소득
eastward|부|동쪽으로
ecologically|부|생태학적으로
ecologist|명|생태학자
ecstatic|형|황홀해하는
educated|형|교육받은
educator|명|교육자
elective|형|선택 과목의
electronics|명|전자 공학, 전자 제품
elegance|명|우아함
elegantly|부|우아하게
elemental|형|기본적인
eloquence|명|웅변
eloquent|형|웅변의, 설득력 있는
emphatically|부|단호하게
endeavor|명|노력
endlessly|부|끝없이
endurance|명|인내
enduring|형|지속되는
engulf|동|휩싸다
enquire|동|문의하다 (영국식)
enrol|동|등록하다 (영국식)
entertaining|형|재미있는
environmentally friendly|형|친환경적인
erect|형|똑바로 선
erupt|동|분출하다
eruption|명|폭발, 분출
essayist|명|수필가
estimated|형|추정된
eternally|부|영원히
ethic|명|윤리
evacuation|명|대피
everlasting|형|영원한
evidently|부|분명히
exactness|명|정확성
exaggeration|명|과장
exalt|동|높이다, 찬양하다
examinee|명|수험생
excel|동|뛰어나다
exceptionally|부|유난히
exclaim|동|외치다
exclamation mark|명|느낌표
exhausting|형|기진맥진하게 하는
exhaustion|명|탈진
exile|명|망명, 추방
existing|형|기존의
expected|형|예상되는
expedition|명|탐험
expressive|형|표현력이 풍부한
exquisite|형|정교한
extraordinarily|부|대단히
exultant|형|크게 기뻐하는
eyebrow|명|눈썹
eyelash|명|속눈썹
eyelid|명|눈꺼풀
fabulous|형|굉장한
facilities|명|시설
falter|동|흔들리다, 머뭇거리다
fame|명|명성
fantastically|부|환상적으로
fascinated|형|매료된
fascination|명|매혹
fatal|형|치명적인
father-in-law|명|시아버지, 장인
fearsome|형|무시무시한
feat|명|위업
fed up|형|진저리가 난
ferryboat|명|나룻배
fictional|형|허구의
fighting|명|싸움
figurative|형|비유적인
filial|형|자식으로서의
finely|부|잘게, 훌륭하게
fingernail|명|손톱
fire brigade|명|소방대
firearm|명|총기
fireplace|명|벽난로
firmness|명|단호함
first language|명|모국어
first person|명|1인칭
fixed|형|고정된
flame|명|불꽃
flap|동|펄럭이다
flawless|형|흠 없는
flax|명|아마 (식물)
flesh|명|살
flexibly|부|유연하게
flip|동|뒤집다
fluency|명|유창함
fluid|형|유동적인
flutter|명|펄럭임
folly|명|어리석음
fondly|부|다정하게
foolishly|부|어리석게
footnote|명|각주
forcefully|부|강력하게
foresee|동|예견하다
forestry|명|임업
formidable|형|가공할, 만만찮은
foul|형|더러운, 반칙의
fox|명|여우
fragrance|명|향기
frankly|부|솔직히
frantically|부|미친 듯이
freak|동|기겁하다
frigate|명|호위함
frugal|형|검소한
fulfil|동|이행하다 (영국식)
fume|명|연기, 가스
functionality|명|기능성
funk|명|펑크 음악
funky|형|멋진, 펑키한
furious|형|몹시 화난
furiously|부|격노하여
furor|명|격렬한 논란
furore|명|격렬한 논란 (영국식)
gaiety|명|흥겨움
gambling|명|도박
gang|명|무리, 갱단
gangster|명|폭력배
gasp|명|헉 하는 소리
gateway|명|관문
gaudy|형|야한
generosity|명|너그러움
generously|부|후하게
genius|명|천재
germ|명|세균
ghetto|명|빈민가
giveaway|명|증정품
glacis|명|완만한 비탈
glamorous|형|화려한
glare|명|노려봄, 눈부심
gleam|명|어슴푸레한 빛
glee|명|큰 기쁨
global warming|명|지구 온난화
glocal|형|세계화와 지역화를 함께하는
glorify|동|미화하다
glow|명|불빛, 홍조
goat|명|염소
godly|형|경건한
gorge|명|협곡
gracefulness|명|우아함
gradual|형|점진적인
graphically|부|생생하게
gravestone|명|묘비
gravitation|명|중력
greatness|명|위대함
grief|명|비탄
grieve|동|몹시 슬퍼하다
growing|형|증가하는
grown-up|형|성인의
guerrilla|명|게릴라
gulp|명|꿀꺽 삼킴
gunshot|명|총성
guts|명|배짱, 내장
gymnastic|형|체조의
habitant|명|거주자
hail|동|환호하다, 우박이 내리다
hairy|형|털이 많은
handicap|명|장애, 불리한 조건
handicraft|명|수공예
handout|명|유인물
handrail|명|난간
hard drive|명|하드 드라이브
harmless|형|무해한
harrow|명|써레
haste|명|서두름
hastily|부|서둘러
hatching|명|부화
haunting|형|잊히지 않는
hay|명|건초
health care|명|의료
heap|명|더미
heart-warming|형|훈훈한
heartbreaking|형|가슴 아픈
heartwarming|형|마음이 따뜻해지는
helper|명|조력자
hemp|명|삼, 대마
herb|명|허브, 약초
heritage|명|유산
hi-tech|형|첨단 기술의
high-tech|형|첨단 기술의
hijack|명|납치
hilarious|형|아주 웃기는
hollow|형|속이 빈
holocaust|명|대학살
homeward|형|집으로 향하는
hone|명|숫돌
honorable|형|명예로운
hood|명|두건, 후드
hospice|명|호스피스
hospitable|형|친절한, 환대하는
hospitalize|동|입원시키다
housemaster|명|사감
housewife|명|주부
hover|동|맴돌다
human rights|명|인권
humane|형|인도적인
humanist|명|인문주의자
humanize|동|인간답게 하다
humble|형|겸손한
humbug|명|허튼소리
humiliate|동|굴욕감을 주다
humiliating|형|굴욕적인
humiliation|명|굴욕
hunting|명|사냥
hush|동|조용히 시키다
hyperbole|명|과장법
hyphen|명|하이픈
iceman|명|얼음 장수
idiot|명|바보
idolize|동|우상화하다
ignorance|명|무지
ignorant|형|무지한
imagery|명|이미지, 형상화
imitation|명|모방
immerse|동|담그다, 몰두시키다
immoral|형|부도덕한
immortal|형|불멸의
immortality|명|불멸
impartial|형|공정한
impatiently|부|조급하게
impermanent|형|영구적이지 않은
impolite|형|무례한
impolitely|부|무례하게
impossibility|명|불가능
impractical|형|비현실적인
impressed|형|감명받은
impressionism|명|인상주의
impressionist|명|인상파 화가
imprison|동|투옥하다
imprisonment|명|투옥
improbable|형|있을 것 같지 않은
improperly|부|부적절하게
improved|형|개선된
impulse|명|충동
impulsive|형|충동적인
inaccurate|형|부정확한
inanimate|형|무생물의
inborn|형|타고난
incense|명|향
incurable|형|불치의
indebted|형|빚진, 은혜를 입은
indent|동|들여쓰다
indescribable|형|형언할 수 없는
indifferent|형|무관심한
indignity|명|모욕
indispensable|형|없어서는 안 될
indulge|동|마음껏 하다
indulgent|형|관대한
industrialize|동|산업화하다
inert|형|비활성의
infected|형|감염된
infectious|형|전염성의
inflammation|명|염증
inflammatory|형|선동적인, 염증성의
influenza|명|독감
infringe|동|침해하다
infringement|명|침해
inhabit|동|거주하다
injured|형|부상당한
innate|형|타고난
innocently|부|순진하게
inseparable|형|떼어 놓을 수 없는
inspirational|형|영감을 주는
instantly|부|즉시
instil|동|주입하다 (영국식)
instill|동|주입하다
insult|명|모욕
interpersonal|형|대인 관계의
interruption|명|방해
intimate|형|친밀한
intransitive|형|자동사의
intravenous|형|정맥 주사의
intrude|동|침범하다
intruder|명|침입자
intrusion|명|침입
invariable|형|변함없는
invariably|부|언제나
inventor|명|발명가
inverted commas|명|따옴표
invisible|형|보이지 않는
invitingly|부|유혹하듯
invoke|동|들먹이다, 발동하다
ironically|부|아이러니하게도
irrational|형|비이성적인
irresistible|형|거부할 수 없는
irresistibly|부|억누를 수 없게
irresponsible|형|무책임한
irritated|형|짜증 난
irritating|형|짜증 나게 하는
irritation|명|짜증
islander|명|섬 주민
italicize|동|이탤릭체로 쓰다
itch|동|가렵다
jaw|명|턱
jealously|부|질투하여
jeopardize|동|위태롭게 하다
jeweler|명|보석상
judo|명|유도
junk food|명|정크 푸드
juror|명|배심원
kangaroo|명|캥거루
karaoke|명|노래방
keeper|명|관리인, 골키퍼
kerosene|명|등유
keystroke|명|키 입력
kneel|동|무릎 꿇다
knot|명|매듭
knowingly|부|알면서도
known|형|알려진
laborer|명|노동자
lame|형|절름발이의, 설득력 없는
lance|명|창
landing|명|착륙, 층계참
landlady|명|여자 집주인
landslide|명|산사태, 압승
lap|명|무릎, 한 바퀴
lark|명|종달새
last minute|명|마지막 순간
last-minute|형|막바지의
lastly|부|마지막으로
lava|명|용암
lawmaker|명|입법자
layabout|명|게으름뱅이
leaflet|명|전단
learning|명|학습, 학문
leash|명|가죽끈
leek|명|부추류 채소, 리크
legend|명|전설
legendary|형|전설적인
legislate|동|법률을 제정하다
legislator|명|국회의원
leisurely|부|느긋하게
lengthen|동|늘이다
leopard|명|표범
lick|동|핥다
lid|명|뚜껑
lifeless|형|생명 없는
lighten|동|가볍게 하다, 밝게 하다
lighting|명|조명
limb|명|팔다리
linen|명|리넨
liner|명|여객선
ling|명|대구류 생선
linger|동|오래 머물다
literal|형|문자 그대로의
litter|명|쓰레기
loneliness|명|외로움
long-distance|형|장거리의
long-term|형|장기적인
loosely|부|느슨하게
lousy|형|형편없는
lower|동|낮추다
lowland|명|저지대
lush|형|무성한
luxurious|형|호화로운
lyrics|명|가사
madam|명|부인, 마님
madame|명|마담
madness|명|광기
maestro|명|거장
magnify|동|확대하다
malady|명|병폐
malaria|명|말라리아
mama|명|엄마
mamma|명|엄마
mango|명|망고
mansion|명|대저택
manufacturing|명|제조업
marathon|명|마라톤
marketing|명|마케팅
martial art|명|무술
massacre|명|대학살
masseur|명|안마사
masterpiece|명|걸작
mastery|명|숙달
mausoleum|명|능, 묘
means|명|수단
mechanize|동|기계화하다
medieval|형|중세의
mediocre|형|평범한, 그저 그런
melody|명|선율
memorial|명|기념관, 기념비
mercy|명|자비
metaphor|명|은유
micro|명|소형 컴퓨터
microbe|명|미생물
microcomputer|명|마이크로컴퓨터
micrometer|명|마이크로미터
microorganism|명|미생물
microscopic|형|미세한
microscopy|명|현미경 검사
midst|명|한가운데
mighty|형|강력한
millimeter|명|밀리미터
millionaire|명|백만장자
mimic|명|흉내쟁이
miniature|형|소형의
mint|명|박하, 조폐국
misconception|명|오해
misfortune|명|불운
misleading|형|오해의 소지가 있는
missile|명|미사일
mist|명|안개
mistreat|동|학대하다
mistrustful|형|불신하는
mock|형|모의의, 가짜의
modernization|명|현대화
modernize|동|현대화하다
mogul|명|거물
momentarily|부|잠깐
momentary|형|순간적인
monastery|명|수도원
moody|형|변덕스러운
moonlight|명|달빛
moonscape|명|달 표면 풍경
morality|명|도덕성
morally|부|도덕적으로
mortal|형|죽을 운명의
mortar|명|박격포, 회반죽
mortify|동|굴욕감을 주다
mother-in-law|명|시어머니, 장모
motivated|형|의욕이 있는
motorbike|명|오토바이
motorist|명|운전자
mournful|형|애절한
mover|명|이삿짐 운송업자
moving|형|감동적인, 움직이는
muddy|형|진흙투성이의
mumble|명|중얼거림
murmur|명|속삭임
muse|동|사색하다
mustache|명|콧수염
mutability|명|변덕
mutable|형|변할 수 있는
mutter|명|중얼거림
mutton|명|양고기
mystify|동|혼란스럽게 하다
nano|명|나노
narcissistic|형|자기도취적인
narrator|명|내레이터
narrowly|부|간신히
native speaker|명|원어민
naughty|형|버릇없는
naval|형|해군의
navigate|동|길을 찾다, 항해하다
navigation|명|항해, 길 찾기
navy|명|해군
needless|형|불필요한
negatively|부|부정적으로
neighboring|형|이웃의
neither|부|~도 아니다
nerves|명|신경, 긴장
nervously|부|초조하게
net surfer|명|인터넷 서퍼
netsurfer|명|인터넷 사용자
neurosis|명|신경증
newscaster|명|뉴스 진행자
newsworthy|형|보도 가치가 있는
nicely|부|멋지게, 잘
nightclub|명|나이트클럽
nightmare|명|악몽
nobility|명|귀족, 고귀함
noble|형|고귀한
nobleman|명|귀족
nomad|명|유목민
nominee|명|후보자
non-smoking|형|금연의
nonprofessional|형|비전문적인
northward|부|북쪽으로
nostril|명|콧구멍
nought|명|영, 0
nourish|동|영양분을 공급하다
nourishment|명|영양분
novelty|명|새로움
nuisance|명|성가신 것
nursery|명|어린이집, 묘목장
nut|명|견과, 너트
nutshell|명|견과 껍데기
oath|명|맹세
obedience|명|복종
obedient|형|순종적인
obey|동|복종하다
obsess|동|사로잡다
obsession|명|집착
obsessive|형|강박적인
offend|동|기분 상하게 하다
offender|명|범죄자
offhand|부|즉석에서
ointment|명|연고
olive|명|올리브
Olympia|명|올림피아
Olympiad|명|올림픽 대회
optimist|명|낙관주의자
orator|명|연설가
orchestral|형|관현악의
orchid|명|난초
originality|명|독창성
ornament|명|장식품
outback|명|오지
outdistance|동|훨씬 앞지르다
outdo|동|능가하다
outgrow|동|너무 커져 못 쓰게 되다
outing|명|야유회
outlive|동|~보다 오래 살다
outpatient|명|외래 환자
outrageous|형|터무니없는
outshine|동|~보다 뛰어나다
outskirts|명|변두리
outwardly|부|겉으로는
overboard|부|배 밖으로
overbook|동|예약을 초과로 받다
overcoat|명|외투
overemphasize|동|지나치게 강조하다
overestimate|동|과대평가하다
overhear|동|우연히 듣다
overly|부|지나치게
overshadow|동|가리다, 무색하게 하다
oversize|형|대형의
overstep|동|넘어서다
overtake|동|추월하다
overthrow|동|전복시키다
overturn|동|뒤집다
owl|명|올빼미
ox|명|황소
ozone|명|오존
packed|형|꽉 찬
paintbrush|명|그림붓
pajamas|명|잠옷
pallet|명|운반대
pancake|명|팬케이크
pandemic|형|전국적으로 유행하는
papaya|명|파파야
paperless|형|종이 없는
paradox|명|역설
paralysis|명|마비
paramedic|형|응급 구조의
paratrooper|명|낙하산병
parliament|명|의회
partisan|명|지지자
passionate|형|열정적인
passionately|부|열정적으로
pastor|명|목사
pastoral|형|목가적인
patiently|부|참을성 있게
patriot|명|애국자
patriotic|형|애국적인
patriotism|명|애국심
pave|동|포장하다
pavement|명|보도
paw|명|발 (동물)
pawnbroker|명|전당포 주인
pawnshop|명|전당포
peacefully|부|평화롭게
peach|명|복숭아
pearl|명|진주
pebble|명|조약돌
pedal|명|페달
pedantic|형|현학적인
peel|명|껍질
peep|명|엿보기
penetrate|동|관통하다
penguin|명|펭귄
penicillin|명|페니실린
pentagon|명|오각형
permanence|명|영속성
permeate|동|스며들다
perseverance|명|인내
persistence|명|끈기
personification|명|의인화
personify|동|의인화하다
perspiration|명|땀
persuasion|명|설득
pessimist|명|비관주의자
pessimistic|형|비관적인
petrified|형|겁에 질린
pH|명|수소 이온 농도
philosophical|형|철학적인
pi|명|원주율
pickle|명|피클
picky|형|까다로운
picturesque|형|그림 같은
pillowcase|명|베갯잇
pine|명|소나무
pint|명|파인트
piracy|명|해적 행위, 불법 복제
pirate|명|해적
planning|명|계획
playmate|명|놀이 친구
playwright|명|극작가
pluck|동|뽑다
plum|명|자두
pneumonia|명|폐렴
point of view|명|관점
pointless|형|무의미한
polar bear|명|북극곰
polio|명|소아마비
politeness|명|공손함
polity|명|정치 체제
polo|명|폴로 (경기)
ponder|동|숙고하다
popularize|동|대중화하다
porch|명|현관
posh|형|고급의
possessed|형|홀린
potent|형|강력한
powerfully|부|강력하게
practicality|명|실용성
practically|부|사실상
prance|명|껑충거림
prawn|명|새우
predicament|명|곤경
predicate|동|단언하다
predicative|형|서술적인
predictive|형|예측하는
prefect|명|반장, 지사
preferable|형|더 나은
preferably|부|되도록이면
prehistoric|형|선사 시대의
prehuman|명|원인 (인류 이전)
preindustrial|형|산업화 이전의
prejudge|동|미리 판단하다
preoccupy|동|사로잡다
prestige|명|위신, 명성
preventive|형|예방의
priceless|형|매우 귀중한
prick|명|찌르기
prime minister|명|총리
programming|명|프로그래밍
prom|명|졸업 파티
prominence|명|두드러짐
proponent|명|지지자
proposed|형|제안된
prose|명|산문
proudly|부|자랑스럽게
proven|형|입증된
proximity|명|근접
psychologically|부|심리적으로
pudding|명|푸딩
pulse|명|맥박
pumpkin|명|호박
punch|명|주먹질
punctuality|명|시간 엄수
purposeful|형|목적의식이 있는
puzzled|형|어리둥절한
quarantine|명|격리
quarrel|명|말다툼
quarrelsome|형|다투기 좋아하는
quotable|형|인용할 가치가 있는
racism|명|인종 차별
racist|명|인종 차별주의자
radar|명|레이더
radiate|동|방사하다, 내뿜다
radically|부|근본적으로
radium|명|라듐
rafter|명|서까래
rag|명|헝겊
rainbow|명|무지개
rainstorm|명|폭풍우
ram|명|숫양
ramp|명|경사로
ranger|명|산림 감시원
rash|형|성급한
rattle|명|덜거덕 소리
ravage|명|파괴
real estate|명|부동산
rebellious|형|반항적인
recollect|동|기억해 내다
recollection|명|기억
recommendable|형|추천할 만한
rectangular|형|직사각형의
redo|동|다시 하다
redundant|형|불필요한, 해고된
reed|명|갈대
referent|형|지시 대상의
reflective|형|반사하는, 사색적인
refrain|명|후렴
refuge|명|피난처
refute|동|반박하다
reggae|명|레게
regrettably|부|유감스럽게도
rejoin|동|다시 합류하다
related|형|관련된
relativity|명|상대성
relay|명|릴레이, 중계
relic|명|유물
relieved|형|안도한
remaining|형|남아 있는
remains|명|유적, 유해
reorganize|동|재편성하다
repaint|명|다시 칠하기
replica|명|복제품
repress|동|억누르다
repression|명|억압
reprove|동|꾸짖다
resonant|형|울려 퍼지는
respectably|부|점잖게
respected|형|존경받는
respiration|명|호흡
respiratory|형|호흡기의
retina|명|망막
revelation|명|폭로, 계시
revenge|명|복수
reverence|명|숭배, 존경
revolve|동|회전하다
rhinoceros|명|코뿔소
rhyme|동|운이 맞다
rhythmic|형|리듬감 있는
rib|명|갈비뼈
ridge|명|산등성이
righteousness|명|정의
rim|명|가장자리
rip|동|찢다
rite|명|의식
ritual|명|의식, 관례
roam|명|배회
roar|동|으르렁거리다
rocket|명|로켓
rocky|형|바위가 많은
roommate|명|룸메이트
rosy|형|장밋빛의
rub|동|문지르다
rubble|명|돌무더기
ruinous|형|파멸적인
rush hour|명|출퇴근 시간
rusty|형|녹슨
sag|명|처짐
sage|명|현인
salesmanship|명|판매 기술
saleswoman|명|여자 판매원
salsa|명|살사
salty|형|짠
sandstone|명|사암
sanitary|형|위생의
sanitation|명|위생
saving|명|절약
savings|명|저축
scar|명|흉터
scarcely|부|거의 ~않다
scarlet|명|진홍색
scent|명|향기
scheduled|형|예정된
scholasticism|명|스콜라 철학
schoolgirl|명|여학생
scientifically|부|과학적으로
scooter|명|스쿠터
scramble|동|기어오르다, 앞다투다
scribble|명|낙서
scrooge|명|구두쇠
scuba|명|스쿠버
scythe|명|큰 낫
second person|명|2인칭
seesaw|명|시소
self-confidence|명|자신감
self-confident|형|자신감 있는
selfless|형|이타적인
semi-final|명|준결승
semicolon|명|세미콜론
senator|명|상원 의원
serene|형|고요한
setback|명|차질
sexism|명|성차별
sexy|형|섹시한
shabby|형|허름한
shaken|형|동요한
Shakespearean|형|셰익스피어의
shaky|형|흔들리는
shatter|동|산산조각 내다
shipping|명|운송, 해운
shipwreck|명|난파
shooting|명|총격, 촬영
shopkeeper|명|가게 주인
shoplift|동|물건을 훔치다
shoplifter|명|좀도둑
shoplifting|명|가게 물건 절도
short-term|형|단기적인
shortness|명|짧음
showbiz|명|연예계
showcase|명|진열장, 공개 행사
shrug|동|어깨를 으쓱하다
silverware|명|은식기
simplification|명|단순화
simultaneous|형|동시의
since|부|그 이후로
sincere|형|진실한
sincerity|명|성실
sister-in-law|명|시누이, 처제
skateboarder|명|스케이트보드 타는 사람
skilful|형|숙련된 (영국식)
skilfully|부|능숙하게 (영국식)
skilled|형|숙련된
skillful|형|능숙한
skillfully|부|솜씨 있게
skip|동|건너뛰다
skylark|명|종다리
skyward|부|하늘로
slam|동|쾅 닫다
slang|명|속어
slap|명|철썩 때리기
slaughter|명|도살, 학살
sliver|명|조각
sloppy|형|엉성한
smash|동|박살 내다
smokestack|명|굴뚝
sneak|동|살금살금 가다
sneer|명|비웃음
sniff|동|냄새를 맡다
snore|명|코골기
snowball|명|눈뭉치
so-called|형|소위
soak|명|담그기
soaked|형|흠뻑 젖은
soaking|형|흠뻑 젖은
sob|동|흐느끼다
sociable|형|사교적인
socialize|동|어울리다
softness|명|부드러움
solar|형|태양의
solidity|명|견고함
soliloquy|명|독백
solo|형|혼자의
solvent|명|용제, 용매
son-in-law|명|사위
sonnet|명|소네트
sophisticated|형|세련된, 정교한
soundtrack|명|사운드트랙
southward|부|남쪽으로
Soviet|명|소련
soybean|명|콩, 대두
sparerib|명|돼지갈비
sparkling|형|반짝이는, 탄산이 든
sparrow|명|참새
spectacle|명|장관
speeder|명|과속 운전자
spellbound|형|넋을 잃은
splatter|명|튀김
spokeswoman|명|여성 대변인
sprint|명|전력 질주
squad|명|분대, 팀
squash|명|스쿼시, 호박
stab|동|찌르다
stagger|명|비틀거림
stammer|동|말을 더듬다
standby|형|대기의
standstill|명|정지
stanza|명|연 (시)
startle|동|깜짝 놀라게 하다
starvation|명|굶주림
starve|동|굶주리다
starving|형|굶주린
statesman|명|정치가
statewide|부|주 전체에
steely|형|강철 같은
steering wheel|명|운전대
stepfather|명|새아버지
stepmother|명|새어머니
stereotype|명|고정관념
stern|형|엄격한
stew|명|스튜
stiff|형|뻣뻣한
stimulant|명|흥분제
stimulation|명|자극
stingy|형|인색한
stink|동|악취가 나다
stitch|명|바늘땀
stock market|명|주식 시장
stockpile|명|비축량
stonework|명|석조물
stool|명|등받이 없는 의자
stopover|명|경유
stopwatch|명|초시계
straighten|동|똑바르게 하다
strait|명|해협
strand|명|가닥
strangle|동|목을 조르다
stride|동|성큼성큼 걷다
striking|형|눈에 띄는
stubbornly|부|완고하게
stylist|명|스타일리스트
subcontinent|명|아대륙
subculture|명|하위문화
subdivision|명|세분
subjunctive|명|가정법
subplot|명|부차적 줄거리
subside|동|가라앉다
subtitle|명|자막
suck|동|빨다
suffering|명|고통
suitably|부|적절하게
sulfur|명|황
sulphur|명|황 (영국식)
sunbeam|명|햇살
superintendent|명|관리자, 교육감
supernatural|형|초자연적인
surroundings|명|환경, 주변
suspiciously|부|의심스럽게
swan|명|백조
swift|형|신속한
syllable|명|음절
symbolic|형|상징적인
sympathetic|형|동정적인
sympathize|동|동정하다
synonym|명|동의어
tabloid|형|타블로이드판의
tack|동|압정으로 고정하다
tactile|형|촉각의
tame|형|길들여진
tan|명|선탠
tanned|형|햇볕에 그을린
tatter|명|넝마
tattoo|명|문신
taunt|명|조롱
teaspoon|명|찻숟가락
telescope|명|망원경
temperate|형|온화한
temptation|명|유혹
tenderly|부|부드럽게
tenderness|명|다정함
terrace|명|테라스
terrifying|형|무서운
that|부|그렇게
theorist|명|이론가
therapist|명|치료사
thermometer|명|온도계
thesis|명|논문
thickly|부|두껍게
thickness|명|두께
thigh|명|허벅지
thinker|명|사상가
third person|명|3인칭
thirdly|부|셋째로
though|부|그렇지만
thoughtful|형|사려 깊은
thoughtless|형|생각 없는
thread|명|실
thrilled|형|아주 신이 난
thrilling|형|스릴 넘치는
tickle|동|간지럽히다
tightrope|명|줄타기 줄
timeless|형|시대를 초월한
timeliness|명|시의적절함
timing|명|타이밍
tiptoe|동|발끝으로 걷다
tiredness|명|피로
tiresome|형|지루한, 성가신
toenail|명|발톱
toil|동|힘들게 일하다
tolerant|형|관대한
tomb|명|무덤
torch|명|횃불, 손전등
tortoiseshell|명|거북딱지
torture|동|고문하다
toxic|형|유독한
trailer|명|트레일러, 예고편
traitor|명|배신자
tramp|명|부랑자
trample|명|짓밟기
transcript|명|성적 증명서, 녹취록
transfusion|명|수혈
transient|형|일시적인
transistor|명|트랜지스터
transitive|형|타동사의
traverse|명|횡단
tread|동|밟다
trek|명|트레킹
tremendously|부|엄청나게
tremor|명|떨림, 미진
triangle|명|삼각형
trio|명|3인조
trivial|형|사소한
trolley|명|손수레
trophy|명|트로피
tropic|형|열대의
troublesome|형|골칫거리인
trunk|명|나무줄기, 트렁크
trusty|형|믿음직한
truthful|형|정직한
truthfulness|명|진실성
tub|명|통, 욕조
tuberculosis|명|결핵
tug|명|잡아당김
tulip|명|튤립
tumor|명|종양
turbulent|형|격동의
tutor|명|개인 교사
twinkle|명|반짝임
twisted|형|뒤틀린
typhoid|명|장티푸스
tyranny|명|폭정
tyrant|명|폭군
unacceptable|형|받아들일 수 없는
unashamedly|부|뻔뻔하게
unattractive|형|매력 없는
unaware|형|알지 못하는
unbearable|형|견딜 수 없는
unbeatable|형|무적의
uncharacteristic|형|이례적인
unclearly|부|불분명하게
uncomfortably|부|불편하게
uncommon|형|흔하지 않은
unconcerned|형|무관심한
unconscious|형|의식을 잃은
undergraduate|명|학부생
underneath|부|밑에
undersea|형|해저의
understandable|형|이해할 수 있는
understanding|형|이해심 있는
underwear|명|속옷
undreamed|형|꿈도 못 꾼
undressed|형|옷을 벗은
unease|명|불안
uneasily|부|불안하게
unenthusiastic|형|시큰둥한
uneven|형|고르지 않은
unfashionable|형|유행에 뒤떨어진
unforeseen|형|예상치 못한
ungodly|형|불경한, 터무니없는
unhappiness|명|불행
unhelpful|형|도움이 안 되는
unimaginable|형|상상할 수 없는
unimaginably|부|상상할 수 없을 만큼
united|형|연합한
unjustly|부|부당하게
unkind|형|불친절한
unlock|동|잠금을 풀다
unmistakable|형|틀림없는
unmistakably|부|틀림없이
unnatural|형|부자연스러운
unofficial|형|비공식적인
unrealistic|형|비현실적인
unreasonable|형|불합리한
unrest|명|불안, 동요
unsafe|형|안전하지 않은
unsatisfactory|형|불만족스러운
unselfish|형|이기적이지 않은
unstoppable|형|막을 수 없는
unsuccessful|형|성공하지 못한
unsuitable|형|부적합한
untalented|형|재능 없는
unthinkably|부|상상도 못 할 정도로
untie|동|풀다
untreated|형|치료받지 않은
untrimmed|형|다듬지 않은
unusualness|명|특이함
unwise|형|현명하지 못한
unworldly|형|세상 물정 모르는
upbringing|명|양육
upright|형|똑바른, 강직한
upside down|형|거꾸로 된
usher|동|안내하다
utter|동|말하다, 발언하다
utterly|부|완전히
valentine|명|밸런타인 카드, 연인
vanish|동|사라지다
vanity|명|허영심
varied|형|다양한
verbally|부|말로
verse|명|운문, 절
vibrate|동|진동하다
vibration|명|진동
vigor|명|활력
vigorous|형|활발한
vigorously|부|활발하게
villa|명|별장
villager|명|마을 사람
vinegar|명|식초
virtual reality|명|가상 현실
visibly|부|눈에 띄게
vocalist|명|보컬
vomit|명|구토
waist|명|허리
waistcoat|명|조끼
walkabout|명|도보 여행
walker|명|보행자
wallboard|명|벽판
walnut|명|호두
warship|명|군함
wartime|명|전시
wasp|명|말벌
waterproof|형|방수의
weakly|부|힘없이
wearisome|형|지루한
weary|형|지친
weave|명|짜임새
weed|명|잡초
well-balanced|형|균형 잡힌
well-built|형|체격이 좋은
well-organized|형|잘 정리된
well-paid|형|보수가 좋은
whip|동|채찍질하다
whiskey|명|위스키
whisky|명|위스키 (영국식)
widow|명|과부
width|명|폭, 너비
wilderness|명|황야
will|명|의지, 유언
willing|형|기꺼이 하는
willingly|부|기꺼이
winding|형|구불구불한
windshield|명|앞유리
wink|명|윙크
wit|명|재치
witty|형|재치 있는
wolf|명|늑대
wondrous|형|경이로운
woodcarving|명|목각
wordlessly|부|말없이
workaholic|형|일 중독의
workbench|명|작업대
workman|명|일꾼
worktable|명|작업대
worldly|형|세속적인
worldview|명|세계관
worm|명|벌레
worn out|형|닳아 해진, 지친
worn-out|형|낡은, 녹초가 된
wornout|형|지친
worrying|형|걱정스러운
worship|명|숭배, 예배
worthless|형|가치 없는
wreck|명|잔해, 난파선
wrongly|부|잘못
X-ray|명|엑스레이
yacht|명|요트
yawn|명|하품
yearn|동|갈망하다
youthful|형|젊은
yummy|형|맛있는
zebra|명|얼룩말
zip|명|지퍼
zoom|명|줌, 급등
abound|동|풍부하다
abstraction|명|추상화
accustomed|형|익숙한
acidic|형|산성의
acoustic|형|음향의, 어쿠스틱의
acoustically|부|음향상
acoustics|명|음향 시설
acutely|부|강렬하게
adjoin|동|인접하다
adjoining|형|인접한
adjustable|형|조절 가능한
adrenaline|명|아드레날린
advantageous|형|유리한
adversary|명|적수
aesthetic|형|미적인
aesthetically|부|미학적으로
agreeable|형|기분 좋은, 동의하는
aimless|형|목적 없는
aimlessly|부|목적 없이
alienate|동|소외시키다
alignment|명|정렬, 제휴
alleviate|동|완화하다
altruism|명|이타주의
altruistic|형|이타적인
amplification|명|증폭
amply|부|충분히
anchored|형|고정된
animatedly|부|활기차게
anthropologist|명|인류학자
anthropology|명|인류학
anticlimactic|형|용두사미의
antics|명|익살스러운 짓
antiquated|형|낡은
antiquity|명|고대
appal|동|섬뜩하게 하다 (영국식)
appall|동|섬뜩하게 하다
appalling|형|끔찍한
appallingly|부|끔찍하게
apprenticeship|명|견습 기간
apt|형|적절한
apt to|숙|~하는 경향이 있는
aqua|형|청록색의
aquarium|명|수족관
artistically|부|예술적으로
astray|부|길을 잃고
atmospheric|형|대기의, 분위기 있는
avid|형|열렬한
baldly|부|노골적으로
batter|동|두드리다
battered|형|낡은, 구타당한
bearded|형|수염이 있는
beguiling|형|매력적인
beguilingly|부|매혹적으로
believably|부|그럴듯하게
benign|형|양성의, 상냥한
benignly|부|상냥하게
bequeath|동|유증하다
billiards|명|당구
blankness|명|공허함
bliss|명|더없는 행복
blister|명|물집
blithely|부|태평하게
blockbuster|명|대작, 흥행작
bouquet|명|꽃다발
brainwash|동|세뇌하다
brainwashing|명|세뇌
bribery|명|뇌물 수수
bubbly|형|쾌활한, 거품이 이는
buffoon|명|어릿광대
bulk up|숙|몸집을 키우다
bulky|형|부피가 큰
bureaucratically|부|관료적으로
buzzer|명|버저
bypass|동|우회하다
calorie|명|칼로리
candid|형|솔직한
candidly|부|솔직하게
carpentry|명|목공
cavity|명|구멍, 충치
ceaseless|형|끊임없는
ceaselessly|부|끊임없이
cessation|명|중단
chaotically|부|혼란스럽게
characterization|명|성격 묘사
chauffeur|명|운전기사
chill|동|차게 하다
chisel|동|끌로 새기다
chiselled|형|윤곽이 뚜렷한
churn|동|휘젓다
clammy|형|끈적끈적한
clan|명|씨족
classy|형|고급스러운
claustrophobia|명|폐소 공포증
claustrophobic|형|밀실 공포증의
cleanly|부|깔끔하게
clench|동|꽉 쥐다
cleverness|명|영리함
climactic|형|절정의
climax|명|절정
cloak|명|망토
closeness|명|친밀함
clutch|동|움켜잡다
clutter|명|잡동사니
collaborate|동|협력하다
collaborative|형|협력적인
collaborator|명|협력자
commend|동|칭찬하다
commendation|명|표창
commercially|부|상업적으로
complementary|형|보완적인
compliant|형|순응하는
compliantly|부|고분고분하게
compromised|형|손상된
compulsion|명|강박
con|동|속이다
concerto|명|협주곡
concur|동|동의하다
conditionally|부|조건부로
confide|동|털어놓다
confinement|명|감금
conformity|명|순응
congregate|동|모이다
conjure|동|마술로 만들어 내다
connoisseur|명|감정가
conscientious|형|성실한
conscientiously|부|양심적으로
conservatory|명|온실, 음악 학교
conserve|동|보존하다
contested|형|논쟁의 대상인
contextual|형|문맥상의
contextually|부|문맥상
convoluted|형|난해한
corps|명|군단
cost-effective|형|비용 효율이 높은
coupled|형|결합된
crave|동|갈망하다
craving|명|갈망
creamy|형|크림 같은
credibly|부|믿을 수 있게
criteria|명|기준들
crudely|부|조잡하게
crumb|명|부스러기
crumble|동|부스러지다
customary|형|관례적인
cynic|명|냉소주의자
cynical|형|냉소적인
cynically|부|냉소적으로
cynicism|명|냉소
damply|부|축축하게
darkroom|명|암실
daunt|동|겁먹게 하다
daunting|형|벅찬
daydream|명|백일몽
debut|명|데뷔
deceit|명|속임수
degradation|명|저하, 수모
degrade|동|비하하다, 저하시키다
degrading|형|모욕적인
demo|명|시범, 데모
demographically|부|인구 통계학적으로
demography|명|인구 통계학
demolition|명|철거
depiction|명|묘사
deprivation|명|박탈
descent|명|하강, 혈통
desertion|명|탈영, 유기
detest|동|몹시 싫어하다
detestable|형|혐오스러운
detriment|명|손해
detrimental|형|해로운
detrimentally|부|해롭게
detritus|명|쓰레기, 잔해
devotee|명|열성 팬
digitalization|명|디지털화
digitalize|동|디지털화하다
discourse|명|담론
disdain|명|경멸
disillusionment|명|환멸
dislodge|동|떼어 내다
dismally|부|음울하게
dismay|동|실망시키다
dispensary|명|조제실
dispense|동|나누어 주다
disquieting|형|불안하게 하는
dissect|동|해부하다
dissection|명|해부
dither|동|망설이다
diverge|동|갈라지다
divergence|명|분기, 차이
divergent|형|갈라지는
docile|형|유순한
docilely|부|유순하게
domestically|부|국내에서
domesticate|동|길들이다
domestication|명|길들이기
dominantly|부|우세하게
domination|명|지배
dramatist|명|극작가
dutiful|형|순종적인
dutifully|부|충실하게
dynamically|부|역동적으로
eccentric|형|별난
eccentrically|부|별나게
eclectic|형|절충적인
eclectically|부|절충적으로
ecstatically|부|황홀하게
effortless|형|힘들지 않은
ego|명|자아
elaboration|명|정교화
elevation|명|고도, 승진
elitist|명|엘리트주의자
elongate|동|길게 늘이다
elude|동|피하다
elusive|형|찾기 힘든
embark|동|승선하다, 착수하다
engross|동|몰두하게 하다
engrossing|형|몰입하게 하는
enormously|부|엄청나게
enterprising|형|진취적인
enviable|형|부러운
envisage|동|예상하다
ethically|부|윤리적으로
evoke|동|불러일으키다
ewe|명|암양
exhibitionist|명|과시욕이 강한 사람
exhilarate|동|들뜨게 하다
exhilarating|형|신나는
exhilaration|명|흥분
exodus|명|대이동
exotically|부|이국적으로
exploitation|명|착취
explosively|부|폭발적으로
exterior|명|외부
extortion|명|강탈
extravagance|명|사치
exuberance|명|열의
exuberant|형|활기 넘치는
exuberantly|부|열광적으로
fabulously|부|엄청나게
facial|형|얼굴의
facilitation|명|촉진
fanatic|명|광신자
fanatically|부|광적으로
fanciful|형|공상적인
farce|명|소극, 웃음거리
fatality|명|사망자
favorably|부|호의적으로
ferocious|형|사나운
ferociously|부|사납게
fiddle|동|만지작거리다
fiddler|명|바이올린 연주자
fiddly|형|다루기 까다로운
fiend|명|악마, 광
fiendish|형|극악한
fiendishly|부|지독히
fiercely|부|맹렬히
firewall|명|방화벽
fissure|명|균열
flashback|명|회상 장면
flask|명|플라스크, 보온병
flatter|동|아첨하다
flattery|명|아첨
flick|동|튀기다
flicker|명|깜빡임
folktale|명|민담
forensic|형|법의학의
forfeit|동|몰수당하다
formality|명|형식상의 절차
fossil|명|화석
fragmentation|명|분열
frostily|부|쌀쌀맞게
frosty|형|서리가 내린, 냉담한
fuse|동|융합하다
fusion|명|융합
gadget|명|기기
gamely|부|용감하게
gape|동|입을 벌리고 보다
gem|명|보석
genome|명|게놈
geological|형|지질학의
geologically|부|지질학적으로
ghostly|형|유령 같은
gig|명|공연
glean|동|수집하다
glum|형|침울한
glumly|부|침울하게
gnaw|동|갉아먹다
goose|명|거위
gourmet|형|미식가의
graft|동|접목하다
grapefruit|명|자몽
grounds|명|근거, 구내
gruelling|형|녹초로 만드는
gruesome|형|소름 끼치는
gruesomely|부|섬뜩하게
grumble|동|투덜거리다
gush|동|분출하다
gushing|형|과장된
gushingly|부|과장되게
gusto|명|즐거움
gutsy|형|배짱 있는
hack|동|해킹하다, 마구 자르다
haggle|동|흥정하다
harass|동|괴롭히다
harassment|명|괴롭힘
headstrong|형|고집 센
hedgehog|명|고슴도치
heifer|명|어린 암소
heighten|동|고조시키다
hence|부|그러므로
heroine|명|여주인공
hibernate|동|동면하다
hibernation|명|동면
homely|형|가정적인, 수수한
honk|동|경적을 울리다
hostess|명|여주인
hypocrisy|명|위선
hypocrite|명|위선자
hypocritical|형|위선적인
hypocritically|부|위선적으로
immense|형|거대한
immensely|부|엄청나게
immortalize|동|불멸하게 하다
imp|명|꼬마 도깨비
impede|동|방해하다
impediment|명|장애
impersonal|형|비인간적인
impersonally|부|사무적으로
impersonate|동|흉내 내다
impersonation|명|흉내
impersonator|명|성대모사가
impervious|형|영향받지 않는
impish|형|장난꾸러기 같은
impishly|부|장난스럽게
implicate|동|연루시키다
impoverished|형|빈곤한
incision|명|절개
incisor|명|앞니
inclusively|부|포괄적으로
indefinite|형|무기한의
indefinitely|부|무기한으로
individuality|명|개성
induct|동|취임시키다
inexcusable|형|용서할 수 없는
inexcusably|부|용서할 수 없을 만큼
inexhaustible|형|무궁무진한
inexplicable|형|설명할 수 없는
inexplicably|부|설명할 수 없게
ingenious|형|기발한
ingenuity|명|독창성
inherently|부|본질적으로
inheritance|명|유산, 상속
injustice|명|불평등, 부당함
innovate|동|혁신하다
insecure|형|불안정한
insecurely|부|불안하게
insensitive|형|무신경한
insensitively|부|무신경하게
insightful|형|통찰력 있는
insightfully|부|통찰력 있게
instinctive|형|본능적인
instinctively|부|본능적으로
insubordinate|형|반항하는
insubordinately|부|반항적으로
insubordination|명|불복종
intellect|명|지성
interject|동|끼어들다
interjection|명|감탄사
intuit|동|직관으로 알다
intuition|명|직관
intuitive|형|직관적인
intuitively|부|직관적으로
irate|형|격분한
irately|부|격분하여
irony|명|아이러니
isolated|형|고립된
jersey|명|저지, 운동복 상의
justly|부|정당하게
juvenile|명|청소년
lackluster|형|활기 없는
lapse|명|실수, 경과
latent|형|잠재된
lavatory|명|화장실
lethargic|형|무기력한
lethargically|부|무기력하게
lethargy|명|무기력
liaison|명|연락, 연락 담당자
limitless|형|무한한
linearly|부|직선적으로
ludicrous|형|터무니없는
ludicrously|부|터무니없이
lust|명|욕망
macabre|형|섬뜩한
magnetically|부|자기적으로
magnetism|명|자성, 매력
manicure|명|손톱 손질
marginally|부|약간
mark-up|명|가격 인상
marvel|동|경탄하다
maternal|형|어머니의
maternalistic|형|어머니 같은
meaningless|형|의미 없는
meaninglessly|부|무의미하게
methodical|형|체계적인
midwife|명|조산사
mingle|동|어울리다, 섞이다
minutiae|명|세부 사항
monotonous|형|단조로운
monotonously|부|단조롭게
monotony|명|단조로움
motley|형|잡다한
mountaineer|명|등산가
munch|동|우적우적 먹다
muscular|형|근육질의
mythological|형|신화의
mythology|명|신화
naive|형|순진한
naively|부|순진하게
naivety|명|순진함
naturalness|명|자연스러움
neglectful|형|태만한
negligent|형|부주의한
negligently|부|부주의하게
negligible|형|무시해도 될 정도의
neutralization|명|중화
neutralize|동|무력화하다
nocturnal|형|야행성의
nondescript|형|특징 없는
norms|명|규범
numb|형|감각이 없는
obscurely|부|모호하게
occupational|형|직업의
oddity|명|이상한 것
offspring|명|자식, 새끼
orchard|명|과수원
ordinarily|부|보통
ornamental|형|장식용의
otter|명|수달
outset|명|시초
overalls|명|작업복
overdraft|동|초과 인출하다
overseer|명|감독관
panorama|명|전경
panoramic|형|전경이 펼쳐진
parasite|명|기생충
paternal|형|아버지의
paternalistic|형|가부장적인
pathos|명|비애감
paywall|명|유료 장벽
peacock|명|공작
peasant|명|농민
pedicure|명|발 관리
pendulous|형|축 늘어진
pendulum|명|추
peninsula|명|반도
perceptive|형|통찰력 있는
perceptively|부|예리하게
perpetuate|동|영속시키다
persecute|동|박해하다
persecution|명|박해
personalization|명|개인화
persuasively|부|설득력 있게
pertain to|숙|~에 관련되다
pertinent|형|적절한, 관련 있는
phenomenal|형|경이적인
phenomenally|부|경이적으로
physicality|명|신체성
physique|명|체격
pigeon|명|비둘기
pinnacle|명|정점
placid|형|차분한
placidly|부|차분하게
plaque|명|명판, 치석
plaster|명|석고, 반창고
plausibility|명|그럴듯함
plausibly|부|그럴듯하게
pleasurable|형|즐거운
ploy|명|술책
plumbing|명|배관
plummet|동|곤두박질치다
poetess|명|여류 시인
poise|명|침착함
popularization|명|대중화
portrayal|명|묘사
possessor|명|소유자
posture|명|자세
pounce|동|덮치다
preach|동|설교하다
preacher|명|설교자
premises|명|부지, 건물
primitively|부|원시적으로
principally|부|주로
privileged|형|특권을 가진
profess|동|공언하다
professionalism|명|전문성
profound|형|심오한
profoundly|부|깊이
prohibitive|형|엄두를 못 낼 만큼 비싼
prohibitively|부|엄청나게
proliferate|동|급증하다
prolific|형|다작의, 다산의
prolifically|부|왕성하게
prophet|명|예언자
prophetic|형|예언적인
protagonist|명|주인공
provisions|명|식량, 조항
provocative|형|도발적인
provocatively|부|도발적으로
prowl|동|배회하다
psyche|명|정신
psychiatric|형|정신 의학의
psychiatrist|명|정신과 의사
purity|명|순수
quarry|명|채석장, 사냥감
quest|명|탐구, 추구
quip|명|재치 있는 말
quirk|명|별난 점
quirky|형|별난
radiator|명|라디에이터
rapport|명|친밀한 관계
rarity|명|희귀함
raunchily|부|노골적으로
raunchy|형|선정적인
readable|형|읽기 쉬운
realism|명|현실주의
realist|명|현실주의자
reassurance|명|안심
recess|명|휴회, 휴식
recessive|형|열성의
recharge|동|재충전하다
recognisable|형|알아볼 수 있는 (영국식)
recognisably|부|알아볼 수 있을 만큼 (영국식)
recognizable|형|알아볼 수 있는
recognizably|부|알아볼 수 있을 만큼
rediscover|동|재발견하다
reenact|동|재연하다
refreshing|형|상쾌한
refreshingly|부|신선하게
refurbish|동|새로 꾸미다
refurbishment|명|개장
relapse|동|재발하다
relinquish|동|포기하다
reluctantly|부|마지못해
remedial|형|보충의, 치료의
reminisce|동|추억에 잠기다
reminiscent|형|연상시키는
remorse|명|후회
remorsefully|부|후회하며
remorseless|형|무자비한
remorselessly|부|가차 없이
remotely|부|원격으로, 조금도
removed|형|동떨어진
rendering|명|연주, 번역
repel|동|물리치다
repellant|명|방충제
repertory|명|레퍼토리
repute|동|평판하다
resent|동|분개하다
resilience|명|회복력
resilient|형|회복력 있는
resin|명|수지
resonate|동|울려 퍼지다
respite|명|일시적 중단
restoration|명|복원
restorative|형|회복시키는
retrace|동|되짚어 가다
revealing|형|드러내는
revere|동|숭배하다
riveting|형|매혹적인
robustly|부|튼튼하게
rotate|동|회전하다
roundup|명|요약
rudimentary|형|기초적인
rudiments|명|기초
rumble|동|우르릉거리다
rustle|동|바스락거리다
ruthless|형|무자비한
ruthlessness|명|무자비함
salivate|동|군침을 흘리다
saloon|명|술집
salvation|명|구원
salve|명|연고
sanctity|명|신성함
sap|명|수액
sarcasm|명|빈정거림
sarcastic|형|비꼬는
sarcastically|부|비꼬듯이
scathing|형|신랄한
scoff|동|비웃다
scorn|명|경멸
scornful|형|경멸하는
scornfully|부|경멸적으로
screenplay|명|각본
screenwriter|명|시나리오 작가
scrutinize|동|면밀히 조사하다
sedate|동|진정시키다
sedately|부|차분하게
sedentary|형|주로 앉아서 하는
seedling|명|묘목
self-conscious|형|남의 시선을 의식하는
self-worth|명|자존감
sentient|형|지각 있는
sentimental|형|감상적인
sentimentally|부|감상적으로
sequel|명|속편
settee|명|긴 의자
shambles|명|난장판
shortlist|동|최종 후보에 올리다
showy|형|화려한
silhouette|명|실루엣
sketchbook|명|스케치북
slackly|부|느슨하게
slob|명|게으름뱅이
smug|형|우쭐대는
smugly|부|우쭐대며
snail|명|달팽이
snooze|동|잠깐 자다
socialization|명|사회화
somber|형|침울한
somberly|부|침울하게
sombrely|부|침울하게 (영국식)
somersault|명|공중제비
spartan|형|검소한
specimen|명|표본
spontaneous|형|자발적인
spontaneously|부|자발적으로
sprawl|명|도시 확산
sprout|동|싹이 나다
squander|동|낭비하다
staccato|형|스타카토의
staggering|형|충격적인
stamina|명|체력
startling|형|놀라운
startlingly|부|놀랄 만큼
stately|형|위엄 있는
stiffen|동|뻣뻣해지다
stimuli|명|자극들
stoke|동|부채질하다
strap|명|끈
strapping|형|건장한
stray|동|길을 잃다
stressfully|부|스트레스를 받으며
stretching|명|스트레칭
structurally|부|구조적으로
stuffily|부|답답하게
stuffiness|명|답답함
stuffy|형|답답한
stylistic|형|문체의
stylistically|부|문체상
subtly|부|미묘하게
suburban|형|교외의
suburbia|명|교외
succulent|명|다육 식물
succulently|부|즙이 많게
suds|명|비누 거품
suffice|동|충분하다
suitor|명|구혼자
superficial|형|피상적인
superficially|부|피상적으로
supple|형|유연한
suspension|명|정학, 정지
sustainably|부|지속 가능하게
symptomatic|형|증상을 보이는
synopsis|명|개요
synthetically|부|합성으로
tact|명|요령, 재치
tactful|형|눈치 있는
tactfully|부|재치 있게
tangle|동|엉키다
tangled|형|엉킨
tantamount|형|~와 마찬가지인
tantrum|명|짜증, 성질 부림
tastebud|명|미뢰
taut|형|팽팽한
tautly|부|팽팽하게
tedious|형|지루한
tediously|부|지루하게
tedium|명|지루함
telltale|형|숨길 수 없는
temperament|명|기질
temperamental|형|변덕스러운
temperamentally|부|기질적으로
terrain|명|지형
testament|명|증거, 유언
timid|형|소심한
tinker|동|만지작거리다
torment|동|괴롭히다
torturous|형|고문 같은
toughness|명|강인함
tract|명|넓은 지역, 관
trampoline|명|트램펄린
tranquil|형|고요한
tranquility|명|평온
transatlantic|형|대서양 횡단의
transfix|동|얼어붙게 하다
trauma|명|정신적 외상
traumatic|형|충격적인
trying|형|힘든
turn to|숙|~에 의지하다
twitch|동|씰룩거리다
tycoon|명|재벌
unassisted|형|도움 없이
unconventional|형|색다른
unconvincing|형|설득력 없는
unconvincingly|부|설득력 없이
undaunted|형|굴하지 않는
unenviable|형|부럽지 않은
unenviably|부|딱하게
uneventful|형|평온한
uniformity|명|획일성
uninspiring|형|재미없는
unison|명|일치, 제창
unmanageable|형|다루기 힘든
unmanned|형|무인의
unmusical|형|음악적이지 않은
unmusically|부|음악성 없이
unoccupied|형|비어 있는
unreliably|부|믿을 수 없게
unscathing|형|상처 주지 않는
unsettle|동|불안하게 하다
unsettling|형|불안하게 만드는
unsustainable|형|지속 불가능한
unsustainably|부|지속 불가능하게
untangle|동|풀다
untangled|형|엉킨 것이 풀린
unwavering|형|확고한
unwaveringly|부|흔들림 없이
upheaval|명|격변
utensil|명|기구
vegetation|명|초목
venerate|동|공경하다
veneration|명|숭배
ventilate|동|환기하다
ventilation|명|환기
verandah|명|베란다
versatile|형|다재다능한
versatility|명|다재다능
verve|명|열정
vicious|형|잔인한
viciously|부|사납게
victorious|형|승리한
victoriously|부|의기양양하게
violet|형|보라색의
vitality|명|활력
voluntarily|부|자발적으로
voracious|형|게걸스러운, 열렬한
voraciously|부|탐욕스럽게
wares|명|상품
washtub|명|빨래통
waterfront|명|해안가
wayside|명|길가
wicked|형|사악한
wickedly|부|짓궂게
withdrawn|형|내성적인
wizened|형|쭈글쭈글한
woo|동|구애하다
wooded|형|숲이 우거진
wrangle|동|언쟁하다
wrench|동|비틀다
wry|형|비꼬는 듯한
wryly|부|비꼬듯
zany|형|엉뚱한
aberration|명|일탈
abhor|동|혐오하다
abhorrent|형|혐오스러운
abhorrently|부|혐오스럽게
abject|형|비참한
abundantly|부|풍부하게
acreage|명|면적
acrobatic|형|곡예의
acrobatically|부|곡예하듯
acrobatics|명|곡예
ad lib|형|즉흥의
ad-lib|동|즉흥적으로 말하다
additive|명|첨가물
adept|형|능숙한
adhesion|명|접착
adornment|명|장식
adulterate|동|불순물을 섞다
affectation|명|가식
aghast|형|경악한
agile|형|민첩한
agility|명|민첩성
all-encompassing|형|모든 것을 아우르는
allegorical|형|우화적인
allegory|명|우화
allot|동|할당하다
allotment|명|할당
allude|동|암시하다
allusion|명|암시
amorphous|형|형태가 없는
amorphously|부|모호하게
anarchic|형|무정부 상태의
angst|명|불안
angsty|형|불안해하는
angular|형|각진
angularity|명|각진 모양
annex|명|별관
anonymity|명|익명성
antediluvian|형|아주 낡은
anthology|명|선집
anthropological|형|인류학의
anthropologically|부|인류학적으로
anticlimactically|부|맥 빠지게
antidote|명|해독제
antithesis|명|정반대
antithetical|형|정반대의
apostle|명|사도
apprehend|동|체포하다, 이해하다
aptitude|명|적성
arcane|형|난해한
arcanely|부|불가해하게
archetypal|형|전형적인
archetype|명|원형
archival|형|기록 보관의
ardor|명|열정
arduous|형|고된
arduously|부|힘들게
armory|명|무기고
articulation|명|표현, 발음
artifact|명|인공물, 유물
artifice|명|책략
assimilate|동|동화시키다
assimilation|명|동화
astringent|명|수렴제
athleticism|명|운동 능력
attributive|형|한정적인
attrition|명|감소, 소모
attuned|형|익숙한
austere|형|엄격한, 꾸밈없는
austerely|부|엄격하게
austerity|명|긴축
authenticity|명|진정성
autonomously|부|자율적으로
autopilot|명|자동 조종
avian|형|조류의
axiom|명|공리
axiomatic|형|자명한
babble|동|횡설수설하다
banish|동|추방하다
banishment|명|추방
baroque|형|바로크 양식의
bauble|명|싸구려 장신구
behest|명|명령, 요청
belligerence|명|호전성
belligerent|형|호전적인
bereft|형|~을 잃은
bereftly|부|상실감 속에
besiege|동|포위하다
blandishment|명|감언이설
blight|명|병충해, 망치는 것
blitz|동|기습 공격하다
blubber|명|고래 지방
blubbery|형|뚱뚱한
blurb|명|홍보 문구
bogus|형|가짜의
bona fide|형|진짜의
bout|명|한바탕, 시합
brandish|동|휘두르다
breadwinner|명|가장, 생계 부양자
brevity|명|간결성
brim|동|넘치다
brimstone|명|유황
brink|명|가장자리, 직전
brood|동|곰곰이 생각하다
brouhaha|명|소동
buccaneer|동|해적질하다
buffoonery|명|익살
burgeoning|형|급증하는
buzzard|명|말똥가리
caffeinate|동|카페인을 넣다
calamitous|형|재앙적인
calamitously|부|비참하게
calamity|명|재앙
callous|형|냉담한
callously|부|냉담하게
calorific|형|열량이 높은
capacious|형|널찍한
carbonize|동|탄화시키다
catastrophically|부|파멸적으로
cay|명|작은 섬
centralized|형|중앙 집권화된
choreographical|형|안무의
choreography|명|안무
chronologically|부|연대순으로
chronology|명|연대기
chrysalis|명|번데기
cinematographer|명|촬영 감독
cinematography|명|영화 촬영술
circumnavigate|동|일주하다
circumnavigation|명|세계 일주
clinch|동|매듭짓다
cloister|명|수도원
cloistered|형|은둔한
coax|동|구슬리다
cocoon|동|감싸다
cogent|형|설득력 있는
cogently|부|설득력 있게
collide|동|충돌하다
collider|명|충돌기
colloquial|형|구어체의
colloquially|부|구어로
colloquium|명|학술 회의
combustion|명|연소
commensurate|형|상응하는
commensurately|부|비례하여
commode|명|변기 의자
compellingly|부|설득력 있게
conciliation|명|회유, 조정
conciliatory|형|회유적인
concurrence|명|동의, 동시 발생
condensation|명|응결
condone|동|용납하다
conduit|명|도관
confabulate|동|담소하다
confabulation|명|작화, 담소
confection|명|과자
confrontational|형|대립적인
confrontationally|부|대립적으로
conjecture|동|추측하다
connotation|명|함축
connote|동|함축하다
consign|동|맡기다
consternation|명|당황
constrained|형|제약을 받는
contagion|명|전염
contemptuous|형|경멸하는
contemptuously|부|경멸적으로
contractually|부|계약상
contraption|명|기묘한 기계
contrive|동|꾸미다
cordon|동|차단하다
corpse|명|시체
corpus|명|말뭉치
cosmic|형|우주의
cosset|동|애지중지하다
counterproductive|형|역효과를 낳는
counterproductively|부|역효과적으로
crippling|형|심각한 손상을 주는
crony|명|측근
crystallization|명|결정화
cull|동|도태시키다
cultish|형|사이비 같은
curate|동|기획하다, 큐레이팅하다
curator|명|큐레이터
dampen|동|적시다, 약화시키다
deaden|동|약하게 하다
declination|명|편각, 사양
deficient|형|부족한
deficiently|부|불충분하게
delicatessen|명|조제 식품점
demystification|명|명쾌한 설명
demystify|동|쉽게 설명하다
denotation|명|명시적 의미
denunciation|명|비난
depraved|형|타락한
depravity|명|타락
deprecate|동|비난하다
deprecatingly|부|겸손하게, 비하하듯
depressive|형|우울증의
derelict|형|버려진
derision|명|조롱
derisive|형|조롱하는
derisively|부|조롱조로
deterrent|명|억제책
detract|동|손상시키다
deviant|명|일탈자
deviantly|부|일탈적으로
diffuse|형|분산된
diligently|부|부지런히
disdainful|형|경멸하는
disparage|동|폄하하다
disparagement|명|폄하
disparaging|형|폄하하는
disparagingly|부|얕보듯이
dispersal|명|분산
disperse|동|흩어지다
dissemble|동|숨기다
disseminate|동|퍼뜨리다
dissemination|명|보급
dissension|명|불화
distill|동|증류하다
distillation|명|증류
divination|명|점
dole out|숙|조금씩 나눠 주다
domesticity|명|가정생활
drabness|명|칙칙함
dribble|동|드리블하다, 침을 흘리다
drudgery|명|고된 일
dubiously|부|의심스럽게
dwarfism|명|왜소증
ebb|동|썰물이 되다, 약해지다
eccentricity|명|기벽
echolocate|동|반향 위치를 측정하다
echolocation|명|반향 위치 측정
ecotourism|명|생태 관광
edification|명|교화
edifice|명|건물
edify|동|교화하다
egalitarian|형|평등주의의
eke out|숙|겨우 꾸려 나가다
elated|형|신이 난
elation|명|의기양양
electrode|명|전극
elephantine|형|거대한
embodiment|명|구현, 화신
eminence|명|명성
eminent|형|저명한
emolument|명|보수, 급여
emulate|동|모방하다
emulation|명|모방, 경쟁
emulsification|명|유화
emulsifier|명|유화제
emulsify|동|유화시키다
enabler|명|조력자
encumber|동|방해하다
encumbrance|명|짐, 방해물
enduringly|부|지속적으로
engender|동|불러일으키다
enthuse|동|열광하다
ephemera|명|수명이 짧은 것
ephemeral|형|덧없는
ephemerality|명|덧없음
epoxy|명|에폭시
equable|형|차분한
etch|동|새기다
etching|명|에칭, 동판화
ethos|명|기풍
euphemism|명|완곡어법
euphemistic|형|완곡한
euphemistically|부|완곡하게
euphoria|명|희열
euphoric|형|황홀한
euphorically|부|들떠서
evokingly|부|연상시키듯
exalted|형|고귀한
exaltedly|부|의기양양하게
exorcism|명|퇴마
exorcist|명|퇴마사
extant|형|현존하는
extracurricular|형|과외의
exude|동|풍기다
fabled|형|전설적인
fabricate|동|날조하다, 제작하다
fabrication|명|날조, 제작
fabulate|동|지어내다
fabulation|명|이야기 꾸미기
facsimile|명|복제
fallacy|명|오류
farcical|형|우스꽝스러운
feign|동|가장하다
ferocity|명|흉포함
fete|명|축제
figuratively|부|비유적으로
flagging|형|약해지는
flightiness|명|변덕
flighty|형|변덕스러운
flit|동|훨훨 날다
floe|명|부빙
floodgates|명|수문
forfeiture|명|몰수
forlorn|형|쓸쓸한
forlornly|부|쓸쓸하게
formidably|부|만만찮게
fractious|형|성마른
frolic|동|뛰놀다
fruition|명|결실
gale|명|강풍
gambit|명|책략
gauche|형|어색한
genomic|형|게놈의
genomically|부|유전체적으로
glitz|명|화려함
glitzy|형|화려한
glory in|숙|~을 자랑으로 여기다
gout|명|통풍
gravitate|동|끌리다
gravitational|형|중력의
gravitationally|부|중력에 의해
grievance|명|불만
habitation|명|거주
hamper|동|방해하다
haphazard|형|되는대로의
haphazardly|부|무계획적으로
hapless|형|불운한
happenstance|명|우연
haughtily|부|거만하게
haughty|형|거만한
hauntingly|부|잊히지 않게
headmistress|명|여자 교장
helm|명|키, 지휘
herald|동|예고하다
hermetic|형|밀폐된
hermit|명|은둔자
hinder|동|방해하다
hindrance|명|방해
hindsight|명|뒤늦은 깨달음
histrionic|형|과장된
histrionically|부|연극조로
hitch|동|얻어 타다, 매다
hoist|동|들어 올리다
homestead|명|농가
hotelier|명|호텔 경영자
huddle|동|옹기종기 모이다
hull|명|선체
hypnotherapy|명|최면 요법
hypothesize|동|가설을 세우다
hysteria|명|히스테리
hysterical|형|히스테리의, 너무 웃기는
hysterically|부|발작적으로
idiomatic|형|관용적인
idiomatically|부|관용적으로
idiosyncrasy|명|특이성
idiosyncratic|형|특유의
ignominious|형|수치스러운
ignominiously|부|굴욕적으로
impeccable|형|흠잡을 데 없는
impeccably|부|완벽하게
imperceptible|형|감지할 수 없는
imperceptibly|부|알아차릴 수 없게
imposition|명|부과, 강요
impresario|명|기획자
impressionistic|형|인상주의적인
impressionistically|부|인상적으로
improvisational|형|즉흥적인
inartistic|형|비예술적인
inchoate|형|초기의
inchoately|부|미완성으로
incipient|형|초기의
incise|동|새기다
incongruity|명|부조화
incongruous|형|어울리지 않는
incongruously|부|어울리지 않게
indignant|형|분개한
indignantly|부|분개하여
indiscretion|명|경솔한 행동
individualism|명|개인주의
indolence|명|나태
indolent|형|게으른
indolently|부|게으르게
inducement|명|유인책
indulgence|명|탐닉, 관대
indulgently|부|너그럽게
inexorability|명|불가피성
inexorable|형|거침없는
inexorably|부|거침없이
infallibility|명|무오류성
infallible|형|절대 틀리지 않는
infallibly|부|틀림없이
infernal|형|지옥 같은
infernally|부|지독하게
informant|명|정보원
ingenuous|형|순진한
ingenuously|부|천진하게
ingrate|명|배은망덕한 사람
ingratiate|동|환심을 사다
ingratiating|형|환심을 사려는
ingratiatingly|부|알랑거리며
innuendo|명|빈정거림
inscrutable|형|불가사의한
instantaneous|형|즉각적인
instantaneously|부|즉시
insular|형|편협한, 섬의
interlocking|형|맞물리는
interlude|명|막간
interrogate|동|심문하다
interrogation|명|심문
interrogative|형|의문의
interrogatively|부|의문조로
intersperse|동|흩뿌리다
interweave|동|섞어 짜다
intrinsically|부|본질적으로
ironic|형|역설적인
irrelevancy|명|부적절
irrevocable|형|돌이킬 수 없는
irrevocably|부|돌이킬 수 없게
jargon|명|전문 용어
jarring|형|귀에 거슬리는
kinetic|형|운동의
kinetically|부|운동 역학적으로
knack|명|요령
lament|동|애통해하다
lamentation|명|애도
laryngitis|명|후두염
lassitude|명|권태
laud|동|칭찬하다
laudatory|형|찬양하는
leaven|동|발효시키다, 활기를 주다
leavening|명|효모
legion|명|군단, 다수
liaise|동|연락하다
locomotion|명|운동, 이동
locomotive|명|기관차
loiter|동|어슬렁거리다
lurid|형|야한, 끔찍한
luridly|부|선정적으로
lyrical|형|서정적인
lyrically|부|서정적으로
lyricist|명|작사가
maelstrom|명|큰 소용돌이
maggot|명|구더기
magnanimity|명|관대함
magnanimous|형|도량이 큰
magnanimously|부|관대하게
magnate|명|거물
magpie|명|까치
malice|명|악의
malicious|형|악의적인
maliciously|부|악의적으로
malleability|명|유연성
malleable|형|잘 늘어나는, 유순한
mangle|동|망가뜨리다
mariner|명|선원
marketability|명|시장성
materialism|명|물질주의
materialistic|형|물질주의적인
materialization|명|실현
materialize|동|실현되다
maverick|명|이단아
meager|형|빈약한
mediate|동|중재하다
mediation|명|중재
mediocrity|명|평범함
melancholy|명|우울
melodious|형|선율이 아름다운
melodiously|부|아름다운 선율로
menace|명|위협
menacing|형|위협적인
menacingly|부|위협적으로
menial|형|천한
mercantile|형|상업의
mercenary|명|용병
mesh|동|맞물리다
mesmeric|형|최면을 거는 듯한
metalled|형|자갈로 포장된
meteorological|형|기상의
meteorology|명|기상학
methodological|형|방법론적인
methodologically|부|방법론적으로
meticulous|형|꼼꼼한
meticulously|부|꼼꼼하게
midwifery|명|조산술
mien|명|풍채
milieu|명|환경
minefield|명|지뢰밭
misdemeanor|명|경범죄
modernism|명|모더니즘
monastic|형|수도원의
moor|명|황야
moribund|형|소멸 직전의
mottled|형|얼룩덜룩한
mull over|숙|곰곰이 생각하다
mundanity|명|평범함
munificence|명|후함
muscle-bound|형|근육이 지나치게 발달한
mutinous|형|반항적인
mutinously|부|반항적으로
myriad|형|무수한
mystique|명|신비감
nascent|형|초기의
neophyte|명|초보자
nigh|부|가까이
nonchalant|형|태연한
nonchalantly|부|태연하게
nostalgia|명|향수
nostalgic|형|향수를 불러일으키는
nostalgically|부|그리운 듯이
notoriety|명|악명
notoriously|부|악명 높게
oblique|형|비스듬한, 간접적인
octogenarian|명|80대 노인
opacity|명|불투명
opaque|형|불투명한
opulence|명|호화로움
opulent|형|호화로운
opulently|부|호화롭게
ordain|동|임명하다, 정하다
ore|명|광석
ornate|형|화려하게 장식된
ostensible|형|표면상의
ostensibly|부|표면상
outmoded|형|구식의
overlay|동|덮어씌우다
painstaking|형|공들인
painstakingly|부|공들여
palatable|형|맛좋은, 받아들일 만한
palate|명|미각, 입천장
parable|명|우화
paradoxical|형|역설적인
paradoxically|부|역설적으로
paralysingly|부|마비될 만큼 (영국식)
paralyzingly|부|마비될 만큼
paramount|형|최고의
parasitic|형|기생하는
parochial|형|편협한
patchily|부|군데군데
patchy|형|군데군데 있는
patronize|동|깔보다, 단골로 다니다
patronizing|형|깔보는
patronizingly|부|깔보듯
pedestal|명|받침대
perch|동|앉다, 걸터앉다
pervasive|형|만연한
pervasiveness|명|만연
perverse|형|비뚤어진
perversity|명|심술
philanthropic|형|자선의
philanthropically|부|박애적으로
philanthropist|명|자선가
philanthropy|명|자선 활동
philistine|명|교양 없는 사람
physiological|형|생리적인
physiologically|부|생리학적으로
plumage|명|깃털
plume|명|기둥 (연기), 깃털
plutocrat|명|부호 정치가
polysyllabic|형|다음절의
ponderous|형|육중한, 지루한
ponderously|부|육중하게
portent|명|징조
portraiture|명|초상화법
posit|동|가정하다
posterity|명|후세
postural|형|자세의
posturing|명|허세
precocious|형|조숙한
precociously|부|조숙하게
preconception|명|선입견
predilection|명|편애
preeminent|형|탁월한
preoccupation|명|몰두
prescriptive|형|규범적인
presentational|형|표현상의
preservationist|명|보존주의자
pressurization|명|가압
pressurize|동|압력을 가하다
presuppose|동|전제로 하다
presupposition|명|전제
primeval|형|태고의
prissy|형|새침한
procedural|형|절차상의
promenade|명|산책로
promotable|형|승진 가능한
proportionally|부|비례하여
proprietorial|형|소유자의
proscribe|동|금지하다
proscription|명|금지
prostrate|동|엎드리다
protrude|동|튀어나오다
protrusion|명|돌출
proverbial|형|속담에 나오는
provocation|명|도발
proximal|형|몸 중심에 가까운
prurience|명|호색
prurient|형|외설적인
punitive|형|처벌의
punitively|부|징벌적으로
puritanical|형|청교도적인
pyre|명|화장용 장작더미
qualm|명|불안감
quiver|동|떨다
rapture|명|황홀
rapturous|형|열광적인
rapturously|부|열광적으로
ravish|동|황홀하게 하다
rebuke|동|꾸짖다
recitation|명|낭송
recluse|명|은둔자
reclusive|형|은둔한
recourse|명|의지, 상환 청구
recumbent|형|누워 있는
recuperate|동|회복하다
recuperation|명|회복
recuperative|형|회복시키는
redundantly|부|불필요하게
reissue|동|재발행하다
relegate|동|좌천시키다
remit|동|송금하다
remittance|명|송금
remonstrance|명|항의
remorseful|형|후회하는
repose|동|쉬다
reproach|동|비난하다
reptilian|형|파충류의
requisition|명|요청, 징발
residue|명|잔여물
resound|동|울려 퍼지다
resounding|형|우렁찬, 완벽한
resoundingly|부|크게
resuscitate|동|소생시키다
resuscitation|명|소생
retrospection|명|회고
retrospective|형|회고하는
revelatory|형|계시적인
reverb|명|잔향
reverberate|동|울리다
reverberation|명|반향
revile|동|욕하다
revulsion|명|혐오감
rhetorical|형|수사적인
rhetorically|부|수사적으로
rickety|형|흔들거리는
rife|형|만연한
rift|명|균열, 불화
romp|동|뛰놀다
romper|명|아기 옷
ruminant|형|반추 동물의
ruminate|동|곰곰이 생각하다
rumination|명|심사숙고
ruminative|형|생각에 잠긴
salivary|형|침의
sandwiched|형|사이에 끼인
scavenger|명|청소 동물, 넝마주이
scholarly|형|학문적인
scroll|명|두루마리
secularly|부|세속적으로
seedy|형|지저분한
seismic|형|지진의, 엄청난
selectivity|명|선택성
self-aggrandizement|명|자기 과시
shamble|동|어기적거리다
sheaf|명|다발
shimmer|동|희미하게 빛나다
shoal|명|떼, 얕은 곳
side-step|동|피하다
singe|동|그을리다
skew|동|왜곡하다
slab|명|평판
slither|동|미끄러지듯 가다
smattering|명|겉핥기 지식
snippet|명|토막
snobbery|명|속물근성
solicit|동|간청하다
soliloquize|동|독백하다
solipsism|명|유아론
solitariness|명|고독
solitary|형|혼자의
solitude|명|고독
spatial|형|공간의
spatially|부|공간적으로
spire|명|첨탑
splinter|동|쪼개지다
spontaneity|명|자발성
spurious|형|가짜의
spuriously|부|그럴싸하게
squint|동|눈을 가늘게 뜨다
squirm|동|몸부림치다
squirmy|형|꿈틀거리는
standing|명|지위, 명성
sterility|명|불임, 무균
stipulate|동|규정하다
stipulation|명|규정
stoicism|명|금욕주의
stratosphere|명|성층권
stringent|형|엄격한
stringently|부|엄격하게
stultify|동|무력하게 하다
stultifyingly|부|맥 빠지게
subsist|동|근근이 살아가다
subsistence|명|최저 생활
substantiate|동|입증하다
succumb|동|굴복하다
suffuse|동|퍼지다
sulphuric|형|황의 (영국식)
summarily|부|즉결로
superfluous|형|불필요한
superfluously|부|쓸데없이
surrealism|명|초현실주의
surrealist|명|초현실주의자
surreptitious|형|은밀한
surreptitiously|부|몰래
swivel|동|회전하다
syllabic|형|음절의
synthesis|명|종합, 합성
tacit|형|암묵적인
tacitly|부|암묵적으로
taciturn|형|말수가 적은
taciturnity|명|과묵
tactically|부|전술적으로
tantalize|동|감질나게 하다
tantalizingly|부|감질나게
taste-maker|명|유행 선도자
teem|동|많이 있다
telescopic|형|망원경의, 신축의
telescopically|부|망원경처럼
tenacious|형|집요한
tenaciously|부|끈질기게
tenacity|명|끈기
testimonial|명|추천의 글
tetchy|형|짜증 내는
thicket|명|덤불
timidity|명|소심함
topographical|형|지형의
topographically|부|지형적으로
topography|명|지형
topple|동|넘어지다, 실각시키다
torrential|형|억수 같은
totemic|형|상징적인
totter|동|비틀거리다
tranquilize|동|진정시키다
transmitter|명|송신기
treacherous|형|위험한, 배신하는
treacherously|부|배신하여
treachery|명|배반
trifle|명|사소한 것
truism|명|자명한 이치
turret|명|작은 탑
unadulterated|형|순수한
uncanny|형|묘한
undemonstrative|형|감정을 드러내지 않는
undemonstratively|부|무덤덤하게
undiminishing|형|줄어들지 않는
unencumbered|형|방해받지 않는
unequivocal|형|명백한
unequivocally|부|명백하게
unexceptional|형|평범한
unexceptionally|부|평범하게
unexcused|형|무단의
unfeasible|형|실행 불가능한
unfeasibly|부|믿기 힘들 만큼
unharried|형|여유로운
unmediated|형|직접적인
unnerve|동|불안하게 하다
unnerving|형|불안하게 하는
unnervingly|부|불안하게
unobtrusive|형|눈에 띄지 않는
unobtrusively|부|눈에 띄지 않게
unobtrusiveness|명|겸손함
unpromising|형|가망 없어 보이는
unravel|동|풀다, 해명하다
unsurpassed|형|탁월한
unsuspected|형|예상하지 못한
utilitarian|형|실용적인
vandal|명|공공 기물 파손자
vandalize|동|파손하다
venomous|형|독이 있는
venomously|부|악의적으로
verbatim|형|말 그대로의
verily|부|진실로
verisimilitude|명|그럴듯함
veritable|형|진정한
vermin|명|해충
vestigial|형|흔적의
vestigially|부|흔적으로
vicinity|명|부근
vindicate|동|정당성을 입증하다
vindication|명|정당성 입증
virginal|형|순결한
virtuosity|명|기교
virtuoso|명|거장
vocational|형|직업의
voracity|명|탐욕
vortex|명|소용돌이
wallow|동|뒹굴다, 빠지다
wane|동|약해지다
wayward|형|제멋대로인
wheeze|동|쌕쌕거리다
whir|동|윙윙거리다
whirlwind|명|회오리바람
wistful|형|아쉬워하는
wistfully|부|아쉬운 듯이
wordage|명|단어 수
wordsmith|명|글 솜씨가 뛰어난 사람
wrack|동|괴롭히다
zoologist|명|동물학자
zoology|명|동물학
`;
