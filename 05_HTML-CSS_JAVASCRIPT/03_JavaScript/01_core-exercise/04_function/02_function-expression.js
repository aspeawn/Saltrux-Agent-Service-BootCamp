/* 문제 02. 함수 표현식으로 바꾸기
   유형 : 코드 수정 | 난이도 : ★☆☆

   [1] 아래 함수 선언문들을 같은 동작을 하는 함수 표현식(const 변수에 익명 함수 할당)으로 바꾼다.
   [2] 함수를 다른 변수에 담아 호출해 본다. 괄호를 붙일 때와 붙이지 않을 때의 차이를 확인한다.
*/

// [1] TODO : 아래 세 함수를 함수 표현식으로 바꾼다.
function multiply(a, b) {
    return a * b;
}

function getArea(width, height) {
    return width * height;
}

function toUpper(text) {
    return text.toUpperCase();
}

console.log(multiply(3, 4));       // 기대 : 12
console.log(getArea(5, 10));       // 기대 : 50
console.log(toUpper('hello'));     // 기대 : HELLO


// [2] 주석을 풀고 결과를 예상해 본다.
// const calc = multiply;           // 괄호가 없다
// const result = multiply(2, 3);   // 괄호가 있다

// console.log(typeof calc);     // 예상 :
// console.log(calc(6, 7));      // 예상 :
// console.log(typeof result);   // 예상 :
