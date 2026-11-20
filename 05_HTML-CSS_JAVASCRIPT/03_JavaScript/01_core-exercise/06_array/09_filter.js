/* 문제 09. filter 로 걸러내기
   유형 : 코드 작성 | 난이도 : ★★☆

   아래 함수들을 filter 로 완성한다.

     getEvens(numbers)          : 짝수만 남긴 배열
     getPassed(students, min)   : 점수가 min 이상인 학생 배열
     removeTodo(todos, id)      : 해당 id 의 할 일을 뺀 새 배열 (React 에서 삭제할 때 쓰는 형태)
     removeEmpty(values)        : null, undefined, '' 같은 빈 값을 뺀 배열 (Boolean 을 콜백으로 넘긴다)
     searchByName(users, word)  : 이름에 word 가 포함된 사용자 배열 (includes 사용)
*/

function getEvens(numbers) {
    // TODO
}
function getPassed(students, min) {
    // TODO
}
function removeTodo(todos, id) {
    // TODO
}
function removeEmpty(values) {
    // TODO
}
function searchByName(users, word) {
    // TODO
}

console.log(getEvens([1, 2, 3, 4, 5, 6]));      // 기대 : [ 2, 4, 6 ]

const students = [
    { name: '유관순', score: 90 },
    { name: '홍길동', score: 75 },
    { name: '장보고', score: 82 }
];
console.log(getPassed(students, 80));           // 기대 : 유관순, 장보고 두 명이 담긴 배열
console.log(getPassed(students, 100));          // 기대 : []

const todos = [{ id: 1, text: '장보기' }, { id: 2, text: '운동' }, { id: 3, text: '독서' }];
console.log(removeTodo(todos, 2));              // 기대 : id 1, 3 만 남은 배열
console.log(todos.length);                      // 기대 : 3   (원본 그대로)

console.log(removeEmpty(['A', '', null, 'B', undefined, 'C']));   // 기대 : [ 'A', 'B', 'C' ]

const users = [{ name: '김철수' }, { name: '이영희' }, { name: '김민수' }];
console.log(searchByName(users, '김'));          // 기대 : 김철수, 김민수가 담긴 배열
console.log(searchByName(users, '수'));          // 기대 : 김철수, 김민수가 담긴 배열
