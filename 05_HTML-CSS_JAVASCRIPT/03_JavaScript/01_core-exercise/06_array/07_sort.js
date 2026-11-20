/* 문제 07. sort 와 비교 함수
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] 아래 함수들을 완성한다. 모두 원본을 바꾸지 않아야 한다. ([...arr] 또는 toSorted 사용)
         sortAsc(numbers)        : 숫자 오름차순
         sortDesc(numbers)       : 숫자 내림차순
         sortByPrice(products)   : 가격 낮은 순
         getTopScorer(students)  : 점수가 가장 높은 학생의 이름 (정렬 후 첫 번째)
*/

// [1]
console.log([10, 9, 100, 1, 25].sort());                 // 예상 :
console.log([10, 9, 100, 1, 25].sort((a, b) => a - b));  // 예상 :
console.log(['banana', 'apple', 'cherry'].sort());       // 예상 :


// [2]
function sortAsc(numbers) {
    // TODO
}
function sortDesc(numbers) {
    // TODO
}
function sortByPrice(products) {
    // TODO
}
function getTopScorer(students) {
    // TODO
}

const nums = [30, 5, 100, 12];
console.log(sortAsc(nums));    // 기대 : [ 5, 12, 30, 100 ]
console.log(sortDesc(nums));   // 기대 : [ 100, 30, 12, 5 ]
console.log(nums);             // 기대 : [ 30, 5, 100, 12 ]   (원본 그대로)

const products = [
    { name: '모니터', price: 250000 },
    { name: '마우스', price: 20000 },
    { name: '키보드', price: 45000 }
];
console.log(sortByPrice(products));
// 기대 : 마우스(20000) → 키보드(45000) → 모니터(250000) 순서의 배열

const students = [
    { name: '유관순', score: 88 },
    { name: '홍길동', score: 95 },
    { name: '장보고', score: 72 }
];
console.log(getTopScorer(students));   // 기대 : 홍길동
