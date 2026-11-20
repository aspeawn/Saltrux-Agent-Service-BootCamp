/* 문제 10. 함수는 값이다 (일급 객체)
   유형 : 코드 작성 | 난이도 : ★★★

   [1] 변수와 자료구조에 저장하기
         operations 객체에 add, sub, mul, div 네 가지 계산 함수를 화살표 함수로 저장한다.
         그리고 문자열 op 를 받아 해당 계산을 하는 run(op, a, b) 함수를 완성한다.
         (op 가 operations 에 없으면 '지원하지 않는 연산' 을 반환한다)

   [2] 함수를 반환하기
         makeMultiplier(n) : 받은 값에 n 을 곱하는 함수를 반환한다.

   [3] 함수를 인수로 받기
         applyAll(value, funcs) : funcs 배열에 담긴 함수들을 value 에 차례로 적용한 결과를 반환한다.
         예) applyAll(3, [double, addTen]) → addTen(double(3)) → 16
*/

// [1]
const operations = {
    // TODO : add, sub, mul, div
};

function run(op, a, b) {
    // TODO
}
console.log(run('add', 6, 3));   // 기대 : 9
console.log(run('sub', 6, 3));   // 기대 : 3
console.log(run('mul', 6, 3));   // 기대 : 18
console.log(run('div', 6, 3));   // 기대 : 2
console.log(run('pow', 6, 3));   // 기대 : 지원하지 않는 연산


// [2]
function makeMultiplier(n) {
    // TODO
}
// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);
// console.log(double(5), triple(5));   // 기대 : 10 15


// [3]
function applyAll(value, funcs) {
    // TODO
}
// const addTen = n => n + 10;
// console.log(applyAll(3, [double, addTen]));           // 기대 : 16
// console.log(applyAll(3, [addTen, double]));           // 기대 : 26
// console.log(applyAll(3, [double, triple, addTen]));   // 기대 : 28
