/* 문제 01. 숫자를 보기 좋게 표시하기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] formatPrice(price) : 가격을 '1,234,567원' 형태로 반환한다.
         price 가 null 이나 undefined 면 '0원' 을 반환한다.

   [3] roundTo(num, digits) : num 을 소수점 digits 자리까지 반올림한 '숫자'를 반환한다.
         toFixed 의 반환값이 문자열이라는 점에 주의한다.
*/

// [1]
console.log((1234567).toLocaleString('ko-KR'));   // 예상 :
console.log((3.14159).toFixed(2));                // 예상 :
console.log(typeof (3.14159).toFixed(2));         // 예상 :
console.log((0.1 + 0.2).toFixed(1));              // 예상 :
console.log((2.5).toFixed(0) + 1);                // 예상 :


// [2]
function formatPrice(price) {
    // TODO
}
console.log(formatPrice(1234567));   // 기대 : 1,234,567원
console.log(formatPrice(500));       // 기대 : 500원
console.log(formatPrice(null));      // 기대 : 0원


// [3]
function roundTo(num, digits) {
    // TODO
}
console.log(roundTo(3.14159, 2));          // 기대 : 3.14
console.log(typeof roundTo(3.14159, 2));   // 기대 : number
console.log(roundTo(0.1 + 0.2, 2) + 1);    // 기대 : 1.3
