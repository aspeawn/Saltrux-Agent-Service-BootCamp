/* 문제 02. Date 로 날짜 표시하기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] formatKoreanDate(dateString) : 서버가 준 날짜 문자열을 '2026년 9월 15일' 형태로 반환한다.
         getFullYear, getMonth, getDate 를 사용한다. (월은 0 부터 센다는 점에 주의)

   [3] toDisplayDate(dateString) : toLocaleDateString('ko-KR') 을 사용해 '2026. 9. 15.' 형태로 반환한다.
         값이 없으면(null, undefined, '') '-' 를 반환한다.
*/

// [1]
const created = new Date('2026-09-15T10:30:00');

console.log(created.getFullYear());                  // 예상 :
console.log(created.getMonth());                     // 예상 :
console.log(created.getDate());                      // 예상 :
console.log(created.toLocaleDateString('ko-KR'));    // 예상 :
console.log(typeof Date.now());                      // 예상 :


// [2]
function formatKoreanDate(dateString) {
    // TODO
}
console.log(formatKoreanDate('2026-09-15T10:30:00'));   // 기대 : 2026년 9월 15일
console.log(formatKoreanDate('2025-01-03T00:00:00'));   // 기대 : 2025년 1월 3일


// [3]
function toDisplayDate(dateString) {
    // TODO
}
console.log(toDisplayDate('2026-09-15T10:30:00'));   // 기대 : 2026. 9. 15.
console.log(toDisplayDate(null));                    // 기대 : -
console.log(toDisplayDate(''));                      // 기대 : -
