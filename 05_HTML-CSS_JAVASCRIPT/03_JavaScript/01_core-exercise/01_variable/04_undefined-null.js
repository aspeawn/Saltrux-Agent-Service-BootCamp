/* 문제 04. undefined 와 null 구분하기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 출력 결과를 예상해서 적어 보자.

   [2] isEmpty(value) 함수를 완성한다.
       value 가 null 이거나 undefined 이면 true, 그 외에는 false 를 반환한다.
       0, '' (빈 문자열), false 는 "값이 있는 것"으로 본다.
       조건식은 한 줄로 작성해 본다. (힌트 : null 과 undefined 를 한 번에 확인하는 유일한 == 사용 예)
*/

// [1] 출력 예측
let a;
let b = null;

console.log(a);                    // 예상 : undefined
console.log(typeof a);             // 예상 : object
console.log(b);                    // 예상 : null
console.log(typeof b);             // 예상 : object
console.log(a == b);               // 예상 : true
console.log(a === b);              // 예상 : false
console.log(b === null);           // 예상 : false


// [2] isEmpty 함수 작성
function isEmpty(value) {
    // TODO
}
console.log('==============');

console.log(isEmpty(undefined));   // 기대 : true
console.log(isEmpty(null));        // 기대 : true
console.log(isEmpty(0));           // 기대 : false
console.log(isEmpty(''));          // 기대 : false
console.log(isEmpty(false));       // 기대 : false
console.log(isEmpty('홍길동'));     // 기대 : false
