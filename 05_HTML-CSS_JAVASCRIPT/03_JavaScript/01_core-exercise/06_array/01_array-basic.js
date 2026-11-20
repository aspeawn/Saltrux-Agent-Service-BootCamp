/* 문제 01. 배열 기본 다루기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★☆☆

   [1] 각 줄의 출력 결과를 예상해서 적어 보자.

   [2] getFirstAndLast(arr) : 배열의 첫 번째와 마지막 요소를 '첫 번째 : A, 마지막 : C' 형태로 반환한다.
         마지막 요소는 at() 을 사용한다. 빈 배열이면 '비어 있음' 을 반환한다.

   [3] printNumbered(arr) : for...of 로 '1. 사과' 처럼 번호를 붙여 한 줄씩 출력한다.
*/

// [1]
const fruits = ['사과', '바나나', '키위'];

console.log(fruits.length);             // 예상 :
console.log(fruits[0]);                 // 예상 :
console.log(fruits[3]);                 // 예상 :
console.log(fruits[-1]);                // 예상 :
console.log(fruits.at(-1));             // 예상 :
console.log(fruits[fruits.length - 1]); // 예상 :
console.log(typeof fruits);             // 예상 :


// [2]
function getFirstAndLast(arr) {
    // TODO
}
console.log(getFirstAndLast(['A', 'B', 'C']));   // 기대 : 첫 번째 : A, 마지막 : C
console.log(getFirstAndLast([]));                // 기대 : 비어 있음


// [3]
function printNumbered(arr) {
    // TODO
}
printNumbered(fruits);
// 기대 :
// 1. 사과
// 2. 바나나
// 3. 키위
