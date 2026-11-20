/* 문제 10. for...in 으로 객체 순회하기
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] printObject(obj) : 객체의 프로퍼티를 '키 : 값' 형태로 한 줄씩 출력한다.
         단, 값이 함수인 프로퍼티(메서드)는 건너뛴다. (typeof 사용)

   [2] sumScores(scores) : 과목별 점수 객체를 받아 점수 합계를 반환한다.

   [3] countKeys(obj) : 객체에 프로퍼티가 몇 개 있는지 for...in 으로 세어 반환한다.
*/

// [1]
function printObject(obj) {
    // TODO
}
const student = {
    name: '유관순',
    age: 16,
    school: '이화학당',
    getInfo() {
        return `${this.name}, ${this.age}세`;
    }
};
printObject(student);
// 기대 :
// name : 유관순
// age : 16
// school : 이화학당


// [2]
function sumScores(scores) {
    // TODO
}
console.log(sumScores({ math: 90, english: 80, korean: 70 }));   // 기대 : 240


// [3]
function countKeys(obj) {
    // TODO
}
console.log(countKeys(student));   // 기대 : 4
console.log(countKeys({}));        // 기대 : 0
