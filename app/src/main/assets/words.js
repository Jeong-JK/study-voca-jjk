// 단어 목록: TOEIC Service List (TSL) 1.2 — Charles Browne & Brent Culligan, newgeneralservicelist.com
// 라이선스: CC BY-SA 4.0. 품사·한글 뜻은 추가로 붙인 것이며 이 파일도 같은 라이선스를 따릅니다.
// 형식: 단어|품사|뜻  (품사: 명/동/형/부)
const WORDS_RAW = `
abide|동|준수하다, 따르다
aboard|부|탑승하여
absent|형|결석한, 부재한
absorb|동|흡수하다
accent|명|억양, 강조
acceptance|명|수락, 승인
accessible|형|접근 가능한
accessory|명|부속품, 액세서리
acclaim|명|찬사, 호평
accommodate|동|수용하다, 숙박시키다
accomplishment|명|업적, 성취
accordingly|부|그에 따라
accountant|명|회계사
accumulate|동|축적하다
accuracy|명|정확성
accurately|부|정확하게
accustom|동|익숙하게 하다
activate|동|활성화하다
actively|부|적극적으로
actress|명|여배우
adapter|명|어댑터
additionally|부|게다가
adhere|동|고수하다, 들러붙다
adjacent|형|인접한
administer|동|관리하다, 집행하다
administrative|형|행정의, 관리의
administrator|명|관리자
admission|명|입장, 입학
advancement|명|승진, 발전
advertiser|명|광고주
advisable|형|바람직한
advisor|명|고문, 조언자
advisory|형|자문의
affirmative|형|긍정의
affordable|형|가격이 알맞은
afterward|부|나중에
airfare|명|항공 요금
airplane|명|비행기
airport|명|공항
aisle|명|통로
alert|동|경고하다, 알리다
alike|부|똑같이
allergy|명|알레르기
allocate|동|할당하다
alternate|형|번갈아 하는, 대체의
alternatively|부|그 대신에
amateur|명|아마추어
ambassador|명|대사
ambitious|형|야심찬
amenity|명|편의시설
ample|형|충분한, 넓은
amuse|동|즐겁게 하다
anew|부|새로
anniversary|명|기념일
announcer|명|아나운서
annoy|동|짜증나게 하다
annually|부|매년
antique|명|골동품
anyhow|부|어쨌든
anytime|부|언제든지
apology|명|사과
appendix|명|부록
appetizer|명|전채 요리
apple|명|사과
appliance|명|가전제품
applicable|형|적용할 수 있는
applicant|명|지원자
appraisal|명|평가
appreciation|명|감사, 감상
apprehensive|형|걱정하는
apprentice|명|견습생
approximate|형|대략의
arc|명|호, 원호
architect|명|건축가
architectural|형|건축의
archive|명|기록 보관소
artistic|형|예술적인
asleep|형|잠든
aspect|명|측면
assemble|동|조립하다, 모으다
assembly|명|조립, 집회
assignment|명|과제, 배정
assurance|명|보증, 확신
athletic|형|운동의, 탄탄한
attain|동|달성하다
attendant|명|안내원, 승무원
attendee|명|참석자
attire|명|복장
attorney|명|변호사
auction|명|경매
audit|명|회계 감사
audition|명|오디션
auditor|명|회계 감사관
auditorium|명|강당
authentic|형|진짜의
authority|명|권한, 당국
authorization|명|허가, 승인
authorize|동|권한을 주다
auto|명|자동차
automate|동|자동화하다
automatic|형|자동의
automobile|명|자동차
automotive|형|자동차의
availability|명|이용 가능성
await|동|기다리다
backpack|명|배낭
bacteria|명|박테리아
badge|명|배지, 명찰
baggage|명|수하물
bake|동|굽다
baker|명|제빵사
bakery|명|빵집
balcony|명|발코니
balloon|명|풍선
ballroom|명|연회장, 무도회장
banker|명|은행가
bankrupt|형|파산한
bankruptcy|명|파산
banquet|명|연회
barbecue|명|바비큐
bargain|명|싼 물건, 흥정
baseball|명|야구
basement|명|지하실
basket|명|바구니
basketball|명|농구
bathroom|명|욕실, 화장실
battery|명|배터리
bean|명|콩
beforehand|부|미리
beginner|명|초보자
behalf|명|대신, 대표
bench|명|벤치
beneficial|형|유익한
beverage|명|음료
bicycle|명|자전거
biography|명|전기
biology|명|생물학
birthday|명|생일
blanket|명|담요
blueprint|명|청사진
boardroom|명|회의실, 중역실
bonus|명|보너스
bookcase|명|책장
booklet|명|소책자
bookstore|명|서점
booth|명|부스, 칸막이
bound|형|~할 것 같은, ~행의
brainstorm|동|아이디어를 짜내다
brake|명|브레이크
briefcase|명|서류 가방
broaden|동|넓히다
brochure|명|안내 책자
broker|명|중개인
broom|명|빗자루
browse|동|둘러보다
buffet|명|뷔페
bug|명|벌레, 오류
bulb|명|전구
bulk|명|대량
bulletin|명|게시, 공고
businessman|명|사업가
businessperson|명|사업가
by-law|명|내규, 조례
cab|명|택시
cabin|명|오두막, 객실
cabinet|명|진열장, 내각
café|명|카페
cafeteria|명|구내식당
cage|명|새장, 우리
calculation|명|계산
calculator|명|계산기
calendar|명|달력
caller|명|전화 건 사람
campus|명|캠퍼스
cancellation|명|취소
candy|명|사탕
captain|명|선장, 기장
careless|형|부주의한
cargo|명|화물
carpenter|명|목수
carrier|명|운송업체, 통신사
cart|명|카트, 수레
carton|명|상자, 팩
cartridge|명|카트리지
cashier|명|계산원
casual|형|평상시의, 격식 없는
cater|동|음식을 공급하다
caterer|명|출장 요리업자
caution|명|주의
cautious|형|조심스러운
ceiling|명|천장
celebrity|명|유명인
cellphone|명|휴대전화
centimeter|명|센티미터
certificate|명|증명서
certification|명|자격증, 인증
certify|동|증명하다
chairperson|명|의장
charitable|형|자선의
checkout|명|계산대, 퇴실
checkup|명|건강 검진, 점검
cheer|동|응원하다
cheeseburger|명|치즈버거
chef|명|요리사
chemistry|명|화학
chilly|형|쌀쌀한
chronic|형|만성적인
cinema|명|영화관
circuit|명|회로, 순회
circulate|동|유통시키다, 회람하다
circulation|명|순환, 발행 부수
circus|명|서커스
clap|동|박수치다
clarify|동|명확히 하다
classify|동|분류하다
classmate|명|반 친구
cleaner|명|세제, 청소부
cleanliness|명|청결
clerk|명|점원, 사무원
client|명|고객
clinic|명|진료소
clip|명|클립, 짧은 영상
closet|명|벽장
closure|명|폐쇄
cloth|명|천
cloudy|형|흐린
clue|명|단서
collaboration|명|협력
collector|명|수집가
colorful|형|다채로운
comb|명|빗
comfortably|부|편안하게
commerce|명|상업
commonly|부|흔히
commute|동|통근하다
commuter|명|통근자
compact|형|소형의
compartment|명|칸, 구획
compatible|형|호환되는
compensate|동|보상하다
compile|동|편집하다, 모으다
completion|명|완료
compliance|명|준수
complication|명|합병증, 복잡한 문제
compliment|명|칭찬
complimentary|형|무료의
comply|동|준수하다
comprehension|명|이해
concierge|명|안내원, 컨시어지
conditioner|명|에어컨, 린스
condominium|명|분양 아파트
conductor|명|지휘자, 차장
confidential|형|기밀의
confirmation|명|확인
conform|동|따르다, 순응하다
congestion|명|혼잡
congratulate|동|축하하다
congratulation|명|축하
consecutive|형|연속적인
consent|명|동의
considerably|부|상당히
considerate|형|사려 깊은
consignment|명|위탁 판매, 탁송물
consistently|부|일관되게
consultation|명|상담
consumption|명|소비
container|명|용기, 컨테이너
contestant|명|참가자
continental|형|대륙의
contraction|명|수축
contractor|명|계약자, 하청업자
contradict|동|반박하다, 모순되다
contradiction|명|모순
contrary|형|반대의
convenience|명|편리
convenient|형|편리한
conveniently|부|편리하게
convey|동|전달하다
cookbook|명|요리책
cookie|명|쿠키
cooler|명|냉장 용기
cooperate|동|협력하다
coordinate|동|조정하다, 조직화하다
coordinator|명|진행자, 조정자
copier|명|복사기
copyright|명|저작권
cord|명|전선, 끈
cordless|형|무선의
correction|명|수정
correctly|부|정확하게
correspondence|명|서신, 통신
cosmetic|형|화장품의, 겉치레의
costly|형|값비싼
costume|명|의상
counselor|명|상담가
countryside|명|시골
coupon|명|쿠폰
courier|명|택배 회사
courtesy|명|예의, 호의
coworker|명|동료
crane|명|크레인, 학
creativity|명|창의성
cruise|명|유람선 여행
culinary|형|요리의
cumulative|형|누적되는
cushion|명|쿠션
customize|동|주문 제작하다
daytime|명|낮
deadline|명|마감일
dealership|명|대리점
debit|명|인출, 차변
deck|명|갑판, 덱
decorate|동|장식하다
decoration|명|장식
dedication|명|헌신
deduct|동|공제하다
deduction|명|공제, 추론
defect|명|결함
defective|형|결함 있는
definite|형|확실한
delegate|명|대표
delete|동|삭제하다
delicate|형|섬세한, 연약한
delicious|형|맛있는
deluxe|형|고급의
demolish|동|철거하다
dental|형|치과의
dentist|명|치과의사
depart|동|출발하다
departmental|형|부서의
departure|명|출발
dependable|형|믿을 수 있는
dependence|명|의존
descriptive|형|묘사적인
designate|동|지정하다
desirable|형|바람직한
desktop|명|데스크톱, 책상 위
desperate|형|필사적인, 절박한
dessert|명|디저트
destination|명|목적지
detach|동|분리하다
deteriorate|동|악화되다
devastate|동|황폐화시키다
developer|명|개발자
diagnose|동|진단하다
diagnostic|형|진단의
diagram|명|도표
dial|동|전화를 걸다
diamond|명|다이아몬드
dine|동|식사하다
diner|명|식사하는 사람, 간이식당
diploma|명|졸업장
directory|명|안내 책자, 전화번호부
disable|동|무력하게 하다, 비활성화하다
disagreement|명|의견 차이
disappointment|명|실망
discard|동|버리다
disconnect|동|연결을 끊다
discontinue|동|중단하다
discrepancy|명|불일치
disgust|명|혐오감
dishwasher|명|식기세척기
dislike|동|싫어하다
dispatch|동|파견하다, 발송하다
disposal|명|처리, 처분
dispose|동|처분하다
disrupt|동|방해하다
disruption|명|혼란, 중단
dissatisfied|형|불만족한
distract|동|산만하게 하다
distraction|명|주의를 흩뜨리는 것
distractor|명|오답 선택지
distribution|명|분배, 유통
distributor|명|배급업자
dive|동|잠수하다
dividend|명|배당금
dock|명|부두
documentary|명|다큐멘터리
documentation|명|증빙 서류
donate|동|기부하다
donation|명|기부
donut|명|도넛
doorman|명|도어맨
dose|명|복용량
download|동|내려받다
downsize|동|축소하다
downstairs|부|아래층으로
downtown|명|시내, 도심
downturn|명|침체
drastically|부|급격하게
drawback|명|단점
drawer|명|서랍
drill|명|훈련, 드릴
drought|명|가뭄
drum|명|북, 드럼
dull|형|지루한, 무딘
duplicate|명|사본
durable|형|내구성 있는
duration|명|지속 기간
dynamic|형|역동적인
eager|형|열망하는
earthquake|명|지진
e-book|명|전자책
economical|형|경제적인, 절약하는
economically|부|경제적으로
economist|명|경제학자
economize|동|절약하다
editorial|명|사설
effectiveness|명|효과
efficiently|부|효율적으로
electrical|형|전기의
electrician|명|전기 기사
electronically|부|전자적으로
elegant|형|우아한
elephant|명|코끼리
elevate|동|높이다
elevator|명|엘리베이터
eligible|형|자격이 있는
embassy|명|대사관
embed|동|끼워 넣다
enclose|동|동봉하다
energetic|형|활기찬
engagement|명|약혼, 약속, 참여
enjoyable|형|즐거운
enroll|동|등록하다
enrollment|명|등록
enthusiasm|명|열정
enthusiast|명|열광적인 팬
enthusiastic|형|열정적인
enthusiastically|부|열정적으로
entrée|명|주요리
entrepreneur|명|기업가
environmentally|부|환경적으로
equip|동|장비를 갖추다
erase|동|지우다
escalator|명|에스컬레이터
escort|동|호위하다, 안내하다
ethics|명|윤리
euro|명|유로
evacuate|동|대피시키다
evenly|부|고르게
evident|형|명백한
excellence|명|탁월함
exceptional|형|뛰어난, 예외적인
excessive|형|과도한
exclusive|형|독점적인
exclusively|부|독점적으로
excursion|명|소풍, 짧은 여행
exemption|명|면제
exit|명|출구
exotic|형|이국적인
expedite|동|신속히 처리하다
expertise|명|전문 지식
expiration|명|만료
expire|동|만료되다
explanatory|형|설명하는
explorer|명|탐험가
extinguisher|명|소화기
fabric|명|직물
facilitate|동|용이하게 하다
factual|형|사실에 기반한
faculty|명|교수진, 능력
familiarity|명|친숙함
familiarize|동|익숙하게 하다
fare|명|운임, 요금
farewell|명|작별
fasten|동|매다, 고정하다
fatigue|명|피로
faulty|형|결함 있는
favorable|형|호의적인, 유리한
fax|명|팩스
feedback|명|피드백, 의견
ferry|명|여객선
finalize|동|마무리 짓다
firefighter|명|소방관
firework|명|불꽃놀이
fiscal|형|회계의, 재정의
fitness|명|건강, 체력
fixture|명|설비, 고정물
flavor|명|맛, 풍미
flaw|명|결점
fleet|명|(차량·선박) 무리
flexibility|명|유연성
flextime|명|자율 출퇴근제
flour|명|밀가루
flu|명|독감
fluctuate|동|변동하다
fluent|형|유창한
flyer|명|전단지
fog|명|안개
folder|명|폴더, 서류철
footwear|명|신발류
forbid|동|금지하다
foreman|명|현장 감독
fork|명|포크
formally|부|공식적으로
fortunately|부|다행히
forum|명|토론회, 포럼
foster|동|육성하다, 조성하다
founder|명|설립자
fountain|명|분수
franchise|명|가맹점
freelance|형|프리랜서의
freight|명|화물
freighter|명|화물선
frustrate|동|좌절시키다
fry|동|튀기다
fundraising|명|모금
furnish|동|가구를 비치하다, 제공하다
gallon|명|갤런
garage|명|차고, 정비소
garbage|명|쓰레기
gardener|명|정원사
garment|명|의복
gasoline|명|휘발유
generalization|명|일반화
generator|명|발전기
generic|형|일반적인, 상표 없는
generous|형|관대한, 후한
genre|명|장르
getaway|명|짧은 휴가, 도주
glove|명|장갑
goods|명|상품
gossip|명|소문, 험담
graduation|명|졸업
gram|명|그램
graph|명|그래프
graphic|형|그래픽의, 생생한
graphics|명|그래픽
grill|동|석쇠에 굽다
grocery|명|식료품점
guidance|명|지도, 안내
gum|명|껌, 잇몸
gym|명|체육관
gymnasium|명|실내 체육관
habitual|형|습관적인
hacker|명|해커
hallway|명|복도
hamburger|명|햄버거
handbook|명|안내서
handy|형|편리한, 손재주 있는
hardware|명|하드웨어, 철물
hardworking|형|근면한
harmful|형|해로운
hazard|명|위험
hazardous|형|위험한
headache|명|두통
headphones|명|헤드폰
headquarters|명|본사
healthcare|명|의료
healthful|형|건강에 좋은
heater|명|난방기
helmet|명|헬멧
hereby|부|이로써
hesitant|형|주저하는
hesitation|명|망설임
highway|명|고속도로
hike|동|도보 여행하다
hiker|명|도보 여행자
hobby|명|취미
homeless|형|노숙자의
homemade|형|집에서 만든
homeowner|명|주택 소유자
homework|명|숙제
honestly|부|솔직히
hospitality|명|환대, 접객업
hotline|명|상담 전화
hourly|형|시간당의
housekeeping|명|객실 관리, 살림
housekeeper|명|가정부, 객실 관리원
humidity|명|습도
hungry|형|배고픈
hurricane|명|허리케인
hygiene|명|위생
ice cream|명|아이스크림
icy|형|얼음같이 찬, 빙판의
ideally|부|이상적으로
identification|명|신분증, 식별
illogical|형|비논리적인
impact|명|영향
impatient|형|참을성 없는
imperative|형|필수적인
inappropriate|형|부적절한
inclusive|형|포함한, 포괄적인
incoming|형|들어오는, 신임의
incomplete|형|불완전한
inconvenience|명|불편
incur|동|(비용을) 발생시키다
indicator|명|지표
indirect|형|간접적인
individually|부|개별적으로
indoor|형|실내의
induction|명|취임, 유도
inefficient|형|비효율적인
inexpensive|형|비싸지 않은
inexperienced|형|경험 없는
infer|동|추론하다
inference|명|추론
inflate|동|부풀리다
influential|형|영향력 있는
informal|형|비공식적인
informative|형|유익한
ingredient|명|재료, 성분
ink|명|잉크
innovative|형|혁신적인
inquire|동|문의하다
insert|동|삽입하다
inspect|동|점검하다
inspection|명|점검
inspector|명|검사관
inspiration|명|영감
installation|명|설치
institute|명|연구소, 협회
instruct|동|지시하다
instructor|명|강사
insufficient|형|불충분한
integral|형|필수적인
intently|부|열심히, 골똘히
interactive|형|상호적인
interfere|동|방해하다
intern|명|인턴
internationally|부|국제적으로
internet|명|인터넷
internship|명|인턴십
interpreter|명|통역사
interrupt|동|방해하다
intersection|명|교차로
intonation|명|억양
introductory|형|입문의, 소개하는
invaluable|형|매우 귀중한
invention|명|발명
inventory|명|재고
invoice|명|송장, 청구서
irregular|형|불규칙한
irrelevant|형|관계없는
irritate|동|짜증나게 하다
itinerary|명|여행 일정표
jam|명|잼, 혼잡
jazz|명|재즈
jeans|명|청바지
jet|명|제트기
jewelry|명|보석류
jog|동|조깅하다
journalism|명|언론
juice|명|주스
junior|형|하급의, 손아래의
junk|명|잡동사니
keyboard|명|키보드
kilogram|명|킬로그램
kilometer|명|킬로미터
kit|명|도구 세트
knowledgeable|형|박식한
lab|명|실험실
ladder|명|사다리
lamp|명|등, 램프
landlord|명|집주인
lane|명|차선, 좁은 길
laptop|명|노트북
lately|부|최근에
laundry|명|세탁물
lawn|명|잔디밭
layoff|명|해고
layout|명|배치
leak|동|새다
lease|명|임대차 계약
lecturer|명|강연자
leisure|명|여가
lengthy|형|긴, 장황한
letterhead|명|회사 로고가 인쇄된 편지지
librarian|명|사서
lifeguard|명|인명 구조원
lifestyle|명|생활 방식
lifetime|명|일생
lighter|명|라이터
lightweight|형|가벼운
likewise|부|마찬가지로
liter|명|리터
lobby|명|로비
locally|부|지역적으로
locker|명|사물함
logical|형|논리적인
login|명|로그인
logo|명|로고
loudly|부|큰 소리로
lounge|명|휴게실
loyal|형|충성스러운
loyalty|명|충성, 애용
luggage|명|수하물
luncheon|명|오찬
lunchtime|명|점심시간
machinery|명|기계류
malfunction|명|오작동
mall|명|쇼핑몰
managerial|형|경영의, 관리의
mandatory|형|의무적인
manual|명|설명서
mask|명|마스크, 가면
massage|명|마사지
maximize|동|극대화하다
meaningful|형|의미 있는
meantime|명|그동안
mechanic|명|정비사
mechanical|형|기계의
media|명|매체, 언론
medication|명|약
memo|명|메모, 회람
memorandum|명|회람, 메모
memorize|동|암기하다
mentor|명|멘토
merchandise|명|상품
merchant|명|상인
merge|동|합병하다
merger|명|합병
merit|명|장점
messenger|명|전달자
microphone|명|마이크
microscope|명|현미경
microwave|명|전자레인지
midnight|명|자정
mild|형|온화한, 순한
mileage|명|주행 거리, 마일리지
mineral|명|광물, 미네랄
mini|형|소형의
minimize|동|최소화하다
misidentify|동|잘못 식별하다
mislead|동|오해하게 하다
misplace|동|제자리에 두지 않다, 잃어버리다
modem|명|모뎀
modification|명|수정
monument|명|기념물
morale|명|사기, 의욕
mosquito|명|모기
motorcycle|명|오토바이
mower|명|잔디 깎는 기계
nail|명|못, 손톱
nap|명|낮잠
nationwide|형|전국적인
neat|형|깔끔한
necessity|명|필수품, 필요성
necklace|명|목걸이
needy|형|궁핍한
newsletter|명|소식지
newsstand|명|신문 가판대
noisy|형|시끄러운
nominate|동|지명하다
nomination|명|지명, 추천
noon|명|정오
notify|동|통지하다
nutrition|명|영양
obligate|동|의무를 지우다
oblige|동|강요하다, 은혜를 베풀다
obtain|동|얻다
occupancy|명|점유, 입주
occupant|명|거주자, 탑승자
occupation|명|직업
occurrence|명|발생, 사건
officially|부|공식적으로
omit|동|생략하다
ongoing|형|진행 중인
operational|형|운영의, 가동 중인
opt|동|선택하다
optimistic|형|낙관적인
optional|형|선택적인
orchestra|명|관현악단
organizational|형|조직의
organizer|명|주최자
orientation|명|예비 교육
outage|명|정전, 중단
outdated|형|구식의
outdoor|형|야외의
outfit|명|옷 한 벌
outlet|명|콘센트, 할인 매장
outlook|명|전망
outstanding|형|뛰어난, 미지불의
oval|형|타원형의
oven|명|오븐
overcharge|동|바가지 씌우다
overcrowded|형|너무 붐비는
overdue|형|기한이 지난
overhead|형|머리 위의, 간접비의
overlook|동|간과하다, 내려다보다
overnight|부|밤새, 하룻밤 사이에
overpay|동|초과 지불하다
oversee|동|감독하다
overtime|명|초과 근무
overview|명|개요
packet|명|꾸러미
pad|명|패드, 메모장
painter|명|화가, 도장공
pamphlet|명|팸플릿
pan|명|냄비, 팬
pants|명|바지
paperback|명|문고판
paperwork|명|서류 작업
parade|명|퍼레이드
paralegal|명|법률 보조원
paraphrase|동|바꾸어 말하다
parcel|명|소포
partial|형|부분적인
partially|부|부분적으로
passport|명|여권
password|명|비밀번호
pasta|명|파스타
pastry|명|페이스트리
patent|명|특허
patience|명|인내심
patron|명|단골 손님, 후원자
payable|형|지불해야 하는
paycheck|명|급료
payroll|명|급여 대상자 명단
pedestrian|명|보행자
penalize|동|처벌하다
pepper|명|후추
performer|명|공연자
periodical|명|정기 간행물
periodically|부|주기적으로
permanently|부|영구적으로
personalize|동|개인 맞춤화하다
pet|명|애완동물
petition|명|청원
pharmaceutical|형|제약의
pharmacist|명|약사
pharmacy|명|약국
photocopier|명|복사기
photocopy|동|복사하다
photographer|명|사진작가
photography|명|사진술
physician|명|내과 의사
physics|명|물리학
picnic|명|소풍
pie|명|파이
pill|명|알약
pillow|명|베개
pizza|명|피자
placement|명|배치, 취업 알선
planner|명|기획자, 일정표
plausible|형|그럴듯한
plow|동|(눈을) 치우다, 갈다
plug|명|플러그
plumber|명|배관공
pole|명|기둥, 장대
polish|동|닦다, 다듬다
polite|형|공손한
pollute|동|오염시키다
poorly|부|형편없이
popcorn|명|팝콘
popularity|명|인기
portable|형|휴대용의
portfolio|명|포트폴리오, 작품집
postage|명|우편 요금
postal|형|우편의
postcard|명|엽서
poster|명|포스터
postpone|동|연기하다
pottery|명|도자기
precede|동|선행하다
prediction|명|예측
preliminary|형|예비의
premium|명|보험료, 할증금
prescribe|동|처방하다
prescription|명|처방전
presenter|명|발표자
prestigious|형|명망 있는
preview|명|시사회, 미리 보기
probable|형|있음 직한
productive|형|생산적인
productivity|명|생산성
professionally|부|전문적으로
proficiency|명|숙달, 능숙
profitable|형|수익성 있는
programmer|명|프로그래머
prohibit|동|금지하다
projection|명|예상, 투사
projector|명|영사기
prominent|형|저명한, 두드러진
promotional|형|홍보의
promptly|부|즉시, 정각에
proofread|동|교정하다
prospective|형|장래의, 유망한
protective|형|보호하는
provider|명|공급자
publicity|명|홍보, 평판
publicize|동|공표하다
publish|동|출판하다
punctual|형|시간을 지키는
purchaser|명|구매자
purse|명|지갑, 핸드백
purser|명|사무장
puzzle|명|퍼즐, 수수께끼
quarterly|형|분기별의
query|명|문의
questionnaire|명|설문지
quit|동|그만두다
rack|명|선반, 걸이
railway|명|철도
raincoat|명|비옷
rainfall|명|강우량
rainy|형|비 오는
ray|명|광선
realistic|형|현실적인
realtor|명|부동산 중개인
rearrange|동|재배열하다
reassure|동|안심시키다
rebate|명|환불, 리베이트
receipt|명|영수증
reception|명|접수처, 환영회
receptionist|명|접수 담당자
recession|명|경기 침체
recipe|명|조리법
recipient|명|수령인
reconsider|동|재고하다
recreation|명|오락, 레크리에이션
recreational|형|오락의
recruiter|명|채용 담당자
recruitment|명|채용
recur|동|재발하다
recycle|동|재활용하다
redecorate|동|새로 꾸미다
redesign|동|재설계하다
referee|명|심판
referral|명|소개, 추천
refinery|명|정제소
reflexive|형|반사적인
refresh|동|생기를 되찾게 하다, 새로 고치다
refreshment|명|다과, 원기 회복
refrigerator|명|냉장고
refund|명|환불
refundable|형|환불 가능한
rehearsal|명|리허설
rehearse|동|예행연습하다
reimburse|동|변제하다, 상환하다
reimbursement|명|상환, 변제
reinforce|동|강화하다
relaxation|명|휴식
reliability|명|신뢰성
relieve|동|완화하다, 안심시키다
relocate|동|이전하다
relocation|명|이전
reluctant|형|꺼리는
remainder|명|나머지
reminder|명|상기시키는 것, 독촉장
remodel|동|개조하다
removal|명|제거
renew|동|갱신하다
renewal|명|갱신
renovate|동|개조하다
renovation|명|개조, 보수
renown|명|명성
rental|명|임대
renter|명|임차인
reopen|동|다시 열다
repairperson|명|수리공
repeatedly|부|반복적으로
repetition|명|반복
replacement|명|교체, 후임자
reproduce|동|복제하다, 번식하다
reschedule|동|일정을 변경하다
resemble|동|닮다
reservation|명|예약
residence|명|거주지
residential|형|주거의
resignation|명|사직
respondent|명|응답자
restatement|명|재진술
restroom|명|화장실
résumé|명|이력서
resume|동|재개하다
retailer|명|소매업자
retreat|명|휴양지, 수련회
retrieve|동|되찾다
reunion|명|동창회, 재회
reviewer|명|평론가, 검토자
revision|명|수정
revolutionize|동|혁신을 일으키다
rewrite|동|다시 쓰다
rider|명|탑승자
rubber|명|고무
rug|명|깔개
rumor|명|소문
runner|명|주자
safely|부|안전하게
salad|명|샐러드
salesman|명|판매원
salespeople|명|판매원들
salesperson|명|판매원
salon|명|미용실
sandwich|명|샌드위치
satellite|명|위성
satisfactory|형|만족스러운
sauna|명|사우나
scarf|명|목도리
scenery|명|경치
scholarship|명|장학금
sculpture|명|조각품
seafood|명|해산물
seaside|명|해변
seasonal|형|계절적인
sedan|명|세단형 승용차
seeker|명|구하는 사람
seldom|부|좀처럼 ~않는
seller|명|판매자
semester|명|학기
seminar|명|세미나
sender|명|발송인
separately|부|따로
serial|형|연속의, 일련의
sew|동|바느질하다
sewer|명|하수구
sharply|부|급격히
shipment|명|선적, 배송
shopper|명|쇼핑객
shortage|명|부족
shorten|동|단축하다
shortly|부|곧
showroom|명|전시실
shuttle|명|셔틀버스
sidewalk|명|보도
sightseeing|명|관광
signature|명|서명
signify|동|의미하다
silently|부|조용히
similarity|명|유사성
simplify|동|단순화하다
sincerely|부|진심으로
skate|동|스케이트 타다
skateboard|명|스케이트보드
sketch|명|스케치, 밑그림
skim|동|훑어보다
sleepy|형|졸린
sleeve|명|소매
slot|명|자리, 투입구
smartphone|명|스마트폰
smoothly|부|순조롭게
snack|명|간식
snowy|형|눈 오는
soap|명|비누
soar|동|급등하다
soccer|명|축구
sock|명|양말
sofa|명|소파
someday|부|언젠가
sometime|부|언젠가, 어느 때
soup|명|수프
spa|명|스파
spacious|형|넓은
spam|명|스팸
specially|부|특별히
specialty|명|전문, 특산품
specification|명|사양, 명세서
spectator|명|관중
spill|동|엎지르다
spite|명|악의, 앙심
spokesperson|명|대변인
spouse|명|배우자
spray|동|뿌리다
spreadsheet|명|스프레드시트
stack|동|쌓다
stadium|명|경기장
staple|명|스테이플러 심, 주요 상품
stapler|명|스테이플러
stationery|명|문구류
statistics|명|통계
statue|명|조각상
steadily|부|꾸준히
steak|명|스테이크
steer|동|조종하다
stereo|명|스테레오
sticker|명|스티커
stimulus|명|자극
stockbroker|명|주식 중개인
stockholder|명|주주
storeroom|명|창고
strategic|형|전략적인
streamline|동|간소화하다
strictly|부|엄격히
stripe|명|줄무늬
submission|명|제출
subscribe|동|구독하다
subscriber|명|구독자
subscription|명|구독
subsidize|동|보조금을 주다
substantially|부|상당히
subtract|동|빼다
suburb|명|교외
subway|명|지하철
sue|동|고소하다
suitcase|명|여행 가방
suite|명|스위트룸, 한 벌
sunny|형|화창한
sunscreen|명|자외선 차단제
sunshine|명|햇빛
superb|형|최고의
superior|형|우수한
supermarket|명|슈퍼마켓
supervise|동|감독하다
supervisor|명|상사, 감독자
surf|동|파도타기하다, 검색하다
suspicious|형|의심스러운
sweater|명|스웨터
tablecloth|명|식탁보
tablet|명|태블릿, 정제
tactic|명|전술
tag|명|꼬리표
tailor|명|재단사
takeover|명|인수
taker|명|받는 사람, 응시자
tasty|형|맛있는
tech|명|기술
technician|명|기술자
teen|명|십대
telecommunication|명|원격 통신
teller|명|은행 창구 직원
temporarily|부|일시적으로
tempt|동|유혹하다
tenant|명|세입자
terminal|명|터미널
terminate|동|종료하다
termination|명|종료, 해지
terrific|형|훌륭한
textbook|명|교과서
theft|명|절도
thirsty|형|목마른
thorough|형|철저한
thoroughly|부|철저히
thrill|명|전율, 흥분
thunderstorm|명|뇌우
tidy|형|깔끔한
tile|명|타일
timeline|명|일정표
timely|형|시기적절한
timer|명|타이머
timetable|명|시간표
toiletry|명|세면도구
toll|명|통행료
tomato|명|토마토
ton|명|톤
toner|명|토너
tow|동|견인하다
towel|명|수건
trademark|명|상표
traditionally|부|전통적으로
trainee|명|수습 직원
trainer|명|트레이너
transaction|명|거래
transit|명|운송, 환승
translation|명|번역
translator|명|번역가
transmission|명|전송, 변속기
transmit|동|전송하다
trash|명|쓰레기
traveler|명|여행자
tray|명|쟁반
tremendous|형|엄청난
tropical|형|열대의
tuition|명|수업료
tuna|명|참치
tunnel|명|터널
turnover|명|이직률, 매출액
umbrella|명|우산
unattended|형|방치된
unauthorized|형|승인되지 않은
unavailable|형|이용할 수 없는
uncomfortable|형|불편한
underground|형|지하의
underline|동|밑줄을 긋다, 강조하다
underway|형|진행 중인
unemployed|형|실직한
unexpected|형|예상치 못한
unfamiliar|형|익숙지 않은
unhappy|형|불만스러운
unlimited|형|무제한의
unload|동|짐을 내리다
unnecessary|형|불필요한
unpaid|형|미지불의, 무급의
unpleasant|형|불쾌한
unplug|동|플러그를 뽑다
unreal|형|비현실적인
unreliable|형|믿을 수 없는
unspecified|형|명시되지 않은
unsure|형|확신하지 못하는
unused|형|사용하지 않은
unusually|부|유난히
upcoming|형|다가오는
upgrade|동|업그레이드하다
upstairs|부|위층으로
urgent|형|긴급한
urgently|부|급히
usage|명|사용, 용법
utility|명|공공요금, 유용성
vacancy|명|공석, 빈방
vacant|형|비어 있는
vacate|동|비우다
vacation|명|휴가
vacuum|동|진공청소기로 청소하다
valid|형|유효한
validate|동|입증하다, 승인하다
vanilla|명|바닐라
vase|명|꽃병
vegetarian|명|채식주의자
vend|동|팔다
vendor|명|판매업체
venue|명|장소
verbal|형|구두의, 말로 된
verify|동|확인하다
videoconference|명|화상 회의
violate|동|위반하다
violation|명|위반
violin|명|바이올린
visa|명|비자
vitamin|명|비타민
volleyball|명|배구
voucher|명|상품권, 쿠폰
waiter|명|웨이터
waitress|명|여종업원
waive|동|면제하다
walkway|명|통로
wallet|명|지갑
ward|명|병동, 구
warehouse|명|창고
warranty|명|품질 보증서
webpage|명|웹페이지
weekday|명|평일
wellness|명|건강
whale|명|고래
wheelchair|명|휠체어
wildlife|명|야생 동물
willingness|명|기꺼이 하는 마음
windy|형|바람 부는
wireless|형|무선의
wisely|부|현명하게
withdrawal|명|인출, 철회
wool|명|양모
workbook|명|연습 문제집
workforce|명|인력
workplace|명|직장
workshop|명|연수회
worldwide|형|전 세계적인
worthwhile|형|가치 있는
wrinkle|명|주름
wristwatch|명|손목시계
yearly|형|매년의
yen|명|엔
yoga|명|요가
zoo|명|동물원
`;
