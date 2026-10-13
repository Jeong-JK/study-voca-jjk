// 토익 빈출 숙어·구동사 — 형식: 표현|숙|뜻
const PHRASES_RAW = `
drop by|숙|잠깐 들르다
stop by|숙|들르다
find out|숙|알아내다
in person|숙|직접, 몸소
fill out|숙|(서류를) 작성하다
fill in for|숙|~를 대신하다
look into|숙|조사하다, 검토하다
look over|숙|훑어보다, 검토하다
look forward to|숙|~을 고대하다
look up to|숙|존경하다
put off|숙|미루다, 연기하다
call off|숙|취소하다
carry out|숙|수행하다, 실행하다
set up|숙|설치하다, 설립하다
turn down|숙|거절하다, (소리를) 줄이다
turn in|숙|제출하다
turn out|숙|~로 판명되다
hand in|숙|제출하다
hand out|숙|나눠주다
pick up|숙|(사람·물건을) 찾아오다, 태우러 가다
drop off|숙|내려주다, 갖다 두다
check in|숙|투숙 수속을 하다
check out|숙|퇴실하다, 확인하다
sign up for|숙|~에 등록하다, 신청하다
sign off on|숙|~을 승인하다
run out of|숙|~을 다 써버리다
run into|숙|우연히 만나다
come up with|숙|(생각을) 떠올리다, 제시하다
come across|숙|우연히 발견하다
catch up on|숙|밀린 ~을 따라잡다
keep up with|숙|~에 뒤처지지 않다
get along with|숙|~와 잘 지내다
go over|숙|검토하다
go through|숙|겪다, 살펴보다
lay off|숙|해고하다
take over|숙|인수하다, 넘겨받다
take on|숙|(일을) 떠맡다
take off|숙|이륙하다, 벗다
take place|숙|개최되다, 일어나다
take part in|숙|~에 참가하다
take advantage of|숙|~을 이용하다
take care of|숙|~을 처리하다, 돌보다
take into account|숙|고려하다
make up for|숙|보상하다, 만회하다
make sure|숙|확실히 하다
make it|숙|제시간에 가다, 성공하다
figure out|숙|이해하다, 알아내다
point out|숙|지적하다
work out|숙|해결하다, 운동하다
break down|숙|고장 나다
back up|숙|지원하다, 백업하다
cut back on|숙|~을 줄이다
deal with|숙|처리하다, 다루다
cope with|숙|대처하다
depend on|숙|~에 달려 있다, 의존하다
rely on|숙|~에 의지하다
count on|숙|~을 믿다
apply for|숙|~에 지원하다
account for|숙|설명하다, (비율을) 차지하다
result in|숙|~을 초래하다
result from|숙|~에서 비롯되다
lead to|숙|~으로 이어지다
consist of|숙|~으로 구성되다
comply with|숙|~을 준수하다
adhere to|숙|~을 고수하다
refer to|숙|참조하다, 언급하다
respond to|숙|~에 응답하다
contribute to|숙|~에 기여하다
participate in|숙|~에 참가하다
specialize in|숙|~을 전문으로 하다
invest in|숙|~에 투자하다
succeed in|숙|~에 성공하다
be eligible for|숙|~할 자격이 있다
be entitled to|숙|~할 권리가 있다
be responsible for|숙|~을 책임지다
be in charge of|숙|~을 담당하다
be familiar with|숙|~에 익숙하다
be aware of|숙|~을 알고 있다
be capable of|숙|~할 능력이 있다
be subject to|숙|~의 대상이다, ~되기 쉽다
be equipped with|숙|~을 갖추고 있다
be committed to|숙|~에 전념하다
be dedicated to|숙|~에 헌신하다
be involved in|숙|~에 관여하다
be accustomed to|숙|~에 익숙해지다
be likely to|숙|~할 것 같다
be about to|숙|막 ~하려 하다
be supposed to|숙|~하기로 되어 있다
be expected to|숙|~할 것으로 예상되다
be required to|숙|~해야 한다
be scheduled to|숙|~할 예정이다
be due to|숙|~할 예정이다, ~때문이다
be interested in|숙|~에 관심이 있다
be satisfied with|숙|~에 만족하다
be pleased to|숙|기꺼이 ~하다
be concerned about|숙|~을 걱정하다
be known for|숙|~로 유명하다
be located in|숙|~에 위치하다
be based in|숙|~에 본사를 두다
be booked up|숙|예약이 다 찼다
be out of stock|숙|품절이다
be out of order|숙|고장 나다
be on leave|숙|휴가 중이다
be on duty|숙|근무 중이다
be in stock|숙|재고가 있다
in advance|숙|미리
in charge|숙|담당하는
in addition to|숙|~에 더하여
in terms of|숙|~의 측면에서
in case of|숙|~의 경우에
in spite of|숙|~에도 불구하고
in favor of|숙|~에 찬성하여
in accordance with|숙|~에 따라
in response to|숙|~에 응하여
in light of|숙|~을 고려하여
in place of|숙|~ 대신에
in time|숙|시간 맞춰, 늦지 않게
on time|숙|정각에
in a row|숙|연속으로
in effect|숙|시행 중인, 사실상
in detail|숙|자세히
in particular|숙|특히
in short|숙|요컨대
in the meantime|숙|그동안에
in the long run|숙|결국, 장기적으로
in bulk|숙|대량으로
in writing|숙|서면으로
in a timely manner|숙|시기적절하게
on behalf of|숙|~을 대신하여, 대표하여
on account of|숙|~때문에
on hand|숙|구할 수 있는, 참석한
on schedule|숙|예정대로
ahead of schedule|숙|예정보다 앞서
behind schedule|숙|예정보다 늦게
on short notice|숙|촉박하게, 갑자기
on a regular basis|숙|정기적으로
on the way|숙|도중에
on display|숙|전시 중인
on sale|숙|할인 중인, 판매 중인
on the market|숙|시중에 나와 있는
on board|숙|탑승한, 합류한
on call|숙|대기 중인
on hold|숙|보류된, 통화 대기 중인
at no cost|숙|무료로
free of charge|숙|무료로
at all times|숙|항상
at the latest|숙|늦어도
at least|숙|적어도
at once|숙|즉시
at the moment|숙|지금
at one's convenience|숙|편할 때에
at random|숙|무작위로
by hand|숙|손으로
by mistake|숙|실수로
by the end of|숙|~ 말까지
by means of|숙|~에 의하여
for free|숙|공짜로
for the time being|숙|당분간
for sure|숙|확실히
as of|숙|~부로, ~현재
as soon as possible|숙|가능한 한 빨리
as a result|숙|결과적으로
as well as|숙|~뿐만 아니라
as long as|숙|~하는 한
as opposed to|숙|~와는 대조적으로
according to|숙|~에 따르면
due to|숙|~때문에
owing to|숙|~때문에
prior to|숙|~ 이전에
regardless of|숙|~에 상관없이
instead of|숙|~ 대신에
rather than|숙|~라기보다는
except for|숙|~을 제외하고
along with|숙|~와 함께
up to|숙|~까지, ~에 달린
up to date|숙|최신의
out of date|숙|구식의
out of town|숙|출장 중인, 시외에
out of the office|숙|자리를 비운
under construction|숙|공사 중인
under warranty|숙|보증 기간 중인
under way|숙|진행 중인
under review|숙|검토 중인
across the board|숙|전반적으로
first come first served|숙|선착순
word of mouth|숙|입소문
a wide range of|숙|다양한
a variety of|숙|다양한 종류의
a number of|숙|많은
a great deal of|숙|많은 양의
a couple of|숙|두서너 개의
no later than|숙|늦어도 ~까지
no longer|숙|더 이상 ~않다
not only A but also B|숙|A뿐만 아니라 B도
either A or B|숙|A 또는 B
neither A nor B|숙|A도 B도 아닌
so that|숙|~하기 위하여
even though|숙|비록 ~일지라도
as if|숙|마치 ~처럼
in order to|숙|~하기 위해
now that|숙|~이므로
provided that|숙|~라면
in case|숙|~할 경우에 대비해
keep in mind|숙|명심하다
keep track of|숙|~을 기록하다, 파악하다
keep in touch|숙|연락하고 지내다
get in touch with|숙|~와 연락하다
get back to|숙|나중에 다시 연락하다
get rid of|숙|없애다
get used to|숙|~에 익숙해지다
give away|숙|무료로 나눠주다
give up|숙|포기하다
hold on|숙|기다리다
hold off|숙|미루다
hang up|숙|전화를 끊다
call back|숙|다시 전화하다
put on|숙|입다, 착용하다
put together|숙|조립하다, 준비하다
put away|숙|치우다
set aside|숙|따로 떼어두다
show up|숙|나타나다
show around|숙|구경시켜 주다
fall behind|숙|뒤처지다
fall through|숙|(계획이) 무산되다
go ahead|숙|진행하다, 먼저 하다
head to|숙|~로 향하다
lean against|숙|~에 기대다
line up|숙|줄을 서다
look for|숙|찾다
look after|숙|돌보다
pass out|숙|나눠주다, 기절하다
pay off|숙|성과를 거두다, 갚다
phase out|숙|단계적으로 폐지하다
pull over|숙|차를 길가에 세우다
pull out of|숙|~에서 철수하다
roll out|숙|출시하다
run for|숙|~에 출마하다
see off|숙|배웅하다
sort out|숙|해결하다, 정리하다
stand for|숙|상징하다, 약자이다
stand out|숙|두드러지다
step down|숙|사임하다
take down|숙|적다, 철거하다
think over|숙|숙고하다
try on|숙|입어 보다
try out|숙|시험해 보다
turn on|숙|켜다
turn off|숙|끄다
wear out|숙|닳다, 지치게 하다
wrap up|숙|마무리하다
write down|숙|적어 두다
narrow down|숙|좁히다, 추리다
cut down on|숙|~을 줄이다
look out for|숙|~을 조심하다
come up|숙|생기다, 다가오다
come down with|숙|(병에) 걸리다
brush up on|숙|~을 복습하다
fill up|숙|가득 채우다
follow up on|숙|후속 조치를 하다
get together|숙|모이다
get off|숙|내리다, 퇴근하다
hand over|숙|넘겨주다
hold up|숙|지연시키다, 견디다
iron out|숙|해결하다
jot down|숙|급히 적다
kick off|숙|시작하다
lay out|숙|배치하다, 설명하다
let down|숙|실망시키다
log on|숙|접속하다
map out|숙|세밀히 계획하다
mix up|숙|혼동하다
opt for|숙|~을 선택하다
opt out of|숙|~에서 빠지다
pick out|숙|고르다
pitch in|숙|협력하다, 거들다
pop up|숙|갑자기 나타나다
reach out to|숙|~에게 연락하다
rule out|숙|배제하다
scale back|숙|축소하다
settle down|숙|정착하다
shut down|숙|폐쇄하다, 종료하다
speak up|숙|크게 말하다, 의견을 말하다
stock up on|숙|~을 비축하다
take back|숙|반품받다, 취소하다
tear down|숙|철거하다
touch base with|숙|~와 잠깐 연락하다
use up|숙|다 써버리다
weigh in|숙|의견을 내다
wind up|숙|결국 ~하게 되다
work on|숙|~에 공을 들이다
fall short of|숙|~에 미치지 못하다
on the other hand|숙|반면에
by far|숙|단연코
all of a sudden|숙|갑자기
once in a while|숙|가끔
for a while|숙|잠시 동안
in the event of|숙|~할 경우에
with regard to|숙|~에 관하여
with the exception of|숙|~을 제외하고
at the expense of|숙|~을 희생하여
in conjunction with|숙|~와 함께
in exchange for|숙|~의 대가로
in honor of|숙|~을 기념하여
in recognition of|숙|~을 인정하여
on the condition that|숙|~라는 조건으로
`;
