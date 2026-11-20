/* 문제 05. 문자열 자르기와 자리 채우기
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] truncate(text, max) : 글자 수가 max 보다 길면 max 글자까지만 자르고 '...' 을 붙인다.
         max 이하면 그대로 반환한다.

   [2] formatOrderNo(n) : 주문 번호를 'ORD-0007' 처럼 4자리로 채워서 반환한다. (padStart)

   [3] formatDate(date) : Date 객체를 '2026-09-05' 형태의 문자열로 반환한다.
         월과 일은 두 자리로 채운다.

   [4] maskName(name) : 이름의 첫 글자만 남기고 나머지를 '*' 로 바꾼다.
         예) '홍길동' → '홍**', '남궁민수' → '남***'
         힌트 : padEnd 는 padStart 와 반대로 뒤쪽을 채워 길이를 맞춘다.
*/

// [1]
function truncate(text, max) {
    // TODO
}
console.log(truncate('아주 긴 게시글 제목이 들어있는 경우', 10));   // 기대 : 아주 긴 게시글 제...
console.log(truncate('짧은 제목', 10));                            // 기대 : 짧은 제목


// [2]
function formatOrderNo(n) {
    // TODO
}
console.log(formatOrderNo(7));      // 기대 : ORD-0007
console.log(formatOrderNo(1234));   // 기대 : ORD-1234


// [3]
function formatDate(date) {
    // TODO
}
console.log(formatDate(new Date('2026-09-05T00:00:00')));   // 기대 : 2026-09-05
console.log(formatDate(new Date('2026-12-25T00:00:00')));   // 기대 : 2026-12-25


// [4]
function maskName(name) {
    // TODO
}
console.log(maskName('홍길동'));     // 기대 : 홍**
console.log(maskName('남궁민수'));   // 기대 : 남***
