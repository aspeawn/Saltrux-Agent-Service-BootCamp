/* 문제 09. 콜백 함수와 고차 함수
   유형 : 코드 작성 + 코드 수정 | 난이도 : ★★☆

   [1] calculate(a, b, operator) : 두 수와 계산 방법(콜백 함수)을 받아 operator(a, b) 의 결과를 반환한다.
         add, subtract 콜백 함수를 만들어 넘겨 본다.
         곱하기는 함수를 따로 만들지 말고 호출하는 자리에서 화살표 함수로 바로 넘긴다.

   [2] repeat(n, action) : action 콜백을 n 번 호출한다. 호출할 때 1 부터 n 까지의 번호를 인수로 넘긴다.

   [3] 아래 코드는 오류가 난다. 원인을 적고 고친다.
*/

// [1]
function calculate(a, b, operator) {
    // TODO
}
// TODO : add, subtract 함수

// console.log(calculate(10, 5, add));         // 기대 : 15
// console.log(calculate(10, 5, subtract));    // 기대 : 5
// console.log(calculate(10, 5, /* TODO */));  // 기대 : 50


// [2]
function repeat(n, action) {
    // TODO
}
repeat(3, i => console.log(`${i}번째 실행`));
// 기대 :
// 1번째 실행
// 2번째 실행
// 3번째 실행


// [3]
function sayHello() {
    console.log('안녕하세요!');
}
function runLater(callback) {
    console.log('준비...');
    callback();
}
// runLater(sayHello());   // 주석을 풀어서 실행해 보고 고친다.
// 원인 :
