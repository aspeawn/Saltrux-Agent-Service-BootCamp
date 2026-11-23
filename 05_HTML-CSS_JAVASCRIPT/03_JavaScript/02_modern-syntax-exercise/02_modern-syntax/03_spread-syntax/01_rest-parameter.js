/* 문제 01. Rest 파라미터로 인수 모으기
   유형 : 코드 작성 | 난이도 : ★☆☆

   [1] sum(...numbers) : 넘긴 숫자를 모두 더해 반환한다. 인수가 없으면 0.
   [2] average(...numbers) : 평균을 반환한다. 인수가 없으면 0.
   [3] introduce(name, ...hobbies) : '유관순의 취미 : 독서, 달리기' 를 반환한다.
         취미를 하나도 넘기지 않으면 '유관순의 취미 : 없음' 을 반환한다.
   [4] 아래 함수 정의가 SyntaxError 가 나는 이유를 적는다.
         function wrong(...items, last) {}
*/

// [1]
function sum(...numbers) {
    // TODO
}
console.log(sum(1, 2, 3, 4));   // 기대 : 10
console.log(sum());             // 기대 : 0


// [2]
function average(...numbers) {
    // TODO
}
console.log(average(90, 80, 70));   // 기대 : 80
console.log(average());             // 기대 : 0


// [3]
function introduce(name, ...hobbies) {
    // TODO
}
console.log(introduce('유관순', '독서', '달리기'));   // 기대 : 유관순의 취미 : 독서, 달리기
console.log(introduce('홍길동'));                     // 기대 : 홍길동의 취미 : 없음


// [4]
// 이유 :
