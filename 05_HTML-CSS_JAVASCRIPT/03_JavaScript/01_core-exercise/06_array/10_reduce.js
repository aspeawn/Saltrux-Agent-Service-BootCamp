/* 문제 10. reduce 로 하나의 값 만들기
   유형 : 코드 작성 | 난이도 : ★★★

   아래 함수들을 reduce 로 완성한다. 초기값(두 번째 인수)은 언제나 적는다.

     sum(numbers)            : 합계
     average(numbers)        : 평균 (빈 배열이면 0)
     getCartTotal(cart)      : 장바구니 총액 (price * qty 의 합)
     getMax(numbers)         : 가장 큰 값 (삼항 연산자 사용)
     countByCategory(items)  : 카테고리별 개수를 담은 객체
                               예) { 과일: 2, 채소: 1 }
                               힌트 : 초기값은 {} 이고, acc[카테고리] 값을 1 씩 늘린다. (?? 활용)
*/

function sum(numbers) {
    // TODO
}
function average(numbers) {
    // TODO
}
function getCartTotal(cart) {
    // TODO
}
function getMax(numbers) {
    // TODO
}
function countByCategory(items) {
    // TODO
}

console.log(sum([10, 20, 30]));          // 기대 : 60
console.log(sum([]));                    // 기대 : 0
console.log(average([90, 80, 70]));      // 기대 : 80
console.log(average([]));                // 기대 : 0

const cart = [
    { name: '사과', price: 1000, qty: 3 },
    { name: '우유', price: 2500, qty: 2 }
];
console.log(getCartTotal(cart));         // 기대 : 8000

console.log(getMax([3, 17, 8, 42, 5]));  // 기대 : 42

const items = [
    { name: '사과', category: '과일' },
    { name: '당근', category: '채소' },
    { name: '바나나', category: '과일' }
];
console.log(countByCategory(items));     // 기대 : { '과일': 2, '채소': 1 }
