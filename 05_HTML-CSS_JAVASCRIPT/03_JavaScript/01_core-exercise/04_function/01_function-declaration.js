/* 문제 01. 함수 선언문 작성하기
   유형 : 코드 작성 + 출력 예측 | 난이도 : ★☆☆

   [1] 아래 세 함수를 함수 선언문으로 작성한다.
         add(a, b)                : 두 수의 합을 반환한다.
         getFullName(last, first) : 성과 이름을 이어 붙여 반환한다. 예) '홍', '길동' → '홍길동'
         isEven(n)                : 짝수면 true, 홀수면 false 를 반환한다.

   [2] 각 줄의 출력 결과를 예상해서 적어 보자.
*/

// [1]
// TODO : add, getFullName, isEven

// console.log(add(3, 5));                 // 기대 : 8
// console.log(getFullName('홍', '길동'));  // 기대 : 홍길동
// console.log(isEven(4));                 // 기대 : true
// console.log(isEven(7));                 // 기대 : false


// [2]
function greet(name) {
    return `${name}님, 안녕하세요.`;
}
function greet(name, title) {
    return `${title} ${name}님, 안녕하세요.`;
}

console.log(greet('유관순', '선생'));   // 예상 :
console.log(greet('유관순'));           // 예상 :
console.log(greet);                     // 예상 :
// 자바와 다른 점 :
