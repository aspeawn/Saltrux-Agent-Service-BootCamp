/* 문제 08. forEach 와 map
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] printMenu(menu) : forEach 로 '1번 메뉴 : 김밥' 형태로 한 줄씩 출력한다. (인덱스 사용)

   [2] 아래 함수들을 map 으로 완성한다.
         getNames(users)       : 이름만 모은 배열
         addVat(prices)        : 각 가격에 부가세 10% 를 더한 배열 (Math.round 로 반올림)
         toLabels(todos)       : done 이 true 면 '✔ 할 일', false 면 '☐ 할 일' 문자열 배열
         addPassed(students)   : 각 학생 객체에 passed(80점 이상이면 true) 프로퍼티를 추가한 새 객체 배열
                                 원본 객체는 바뀌면 안 된다.

   [3] 아래 코드는 왜 undefined 가 나오는지 적는다.
*/

// [1]
function printMenu(menu) {
    // TODO
}
printMenu(['김밥', '라면']);
// 기대 :
// 1번 메뉴 : 김밥
// 2번 메뉴 : 라면


// [2]
function getNames(users) {
    // TODO
}
function addVat(prices) {
    // TODO
}
function toLabels(todos) {
    // TODO
}
function addPassed(students) {
    // TODO
}

console.log(getNames([{ id: 1, name: '유관순' }, { id: 2, name: '홍길동' }]));   // 기대 : [ '유관순', '홍길동' ]
console.log(addVat([1000, 2500, 999]));                                          // 기대 : [ 1100, 2750, 1099 ]
console.log(toLabels([{ text: '장보기', done: true }, { text: '운동', done: false }]));
// 기대 : [ '✔ 장보기', '☐ 운동' ]

const students = [{ name: '유관순', score: 90 }, { name: '장보고', score: 70 }];
console.log(addPassed(students));
// 기대 : [ { name: '유관순', score: 90, passed: true }, { name: '장보고', score: 70, passed: false } ]
console.log(students);
// 기대 : [ { name: '유관순', score: 90 }, { name: '장보고', score: 70 } ]   (원본 그대로)


// [3]
const result = [1, 2, 3].forEach(n => n * 2);
console.log(result);   // undefined
// 이유 :
