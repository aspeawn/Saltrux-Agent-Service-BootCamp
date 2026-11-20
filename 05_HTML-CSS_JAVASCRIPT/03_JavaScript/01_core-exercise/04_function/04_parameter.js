/* 문제 04. 매개변수와 기본값
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 출력 결과를 예상해서 적어 보자.

   [2] calcPrice(price, qty, discountRate) : 최종 금액(price * qty * (1 - discountRate))을 반환한다.
         qty 를 넘기지 않으면 1, discountRate 를 넘기지 않으면 0 으로 계산한다. (매개변수 기본값 사용)

   [3] greet(name) : '환영합니다, ○○!' 를 반환한다.
         name 이 undefined 이든 null 이든 '손님' 으로 처리한다.
         매개변수 기본값만으로는 null 이 처리되지 않는다는 점에 주의한다.
*/

// [1]
function hi(name = '아무개', greeting = '안녕') {
    return `${name} ${greeting}~`;
}

console.log(hi());                         // 예상 :
console.log(hi('홍길동'));                  // 예상 :
console.log(hi('홍길동', '반가워'));         // 예상 :
console.log(hi(undefined, '반가워'));       // 예상 :
console.log(hi(null));                     // 예상 :
console.log(hi('홍길동', '반가워', '!!!'));  // 예상 :


// [2]
function calcPrice(price, qty, discountRate) {
    // TODO
}
console.log(calcPrice(10000));             // 기대 : 10000
console.log(calcPrice(10000, 3));          // 기대 : 30000
console.log(calcPrice(10000, 3, 0.1));     // 기대 : 27000


// [3]
function greet(name) {
    // TODO
}
console.log(greet('유관순'));     // 기대 : 환영합니다, 유관순!
console.log(greet());             // 기대 : 환영합니다, 손님!
console.log(greet(null));         // 기대 : 환영합니다, 손님!
