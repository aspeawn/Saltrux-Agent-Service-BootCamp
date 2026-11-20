/* 문제 11. some / every / find / findIndex
   유형 : 코드 작성 | 난이도 : ★★☆

   아래 회원 목록으로 함수들을 완성한다.

     hasAdmin(users)          : 관리자(role 이 'admin')가 한 명이라도 있으면 true (some)
     allVerified(users)       : 모든 회원이 인증(verified)되었으면 true (every)
     findUser(users, id)      : id 가 일치하는 회원 객체. 없으면 undefined (find)
     getUserName(users, id)   : id 가 일치하는 회원의 이름. 없으면 '탈퇴한 회원' (find + ?. + ??)
     getPosition(users, id)   : id 가 일치하는 회원의 인덱스. 없으면 -1 (findIndex)
*/

const users = [
    { id: 1, name: '유관순', role: 'user', verified: true },
    { id: 2, name: '홍길동', role: 'admin', verified: true },
    { id: 3, name: '장보고', role: 'user', verified: false }
];

function hasAdmin(users) {
    // TODO
}
function allVerified(users) {
    // TODO
}
function findUser(users, id) {
    // TODO
}
function getUserName(users, id) {
    // TODO
}
function getPosition(users, id) {
    // TODO
}

console.log(hasAdmin(users));          // 기대 : true
console.log(allVerified(users));       // 기대 : false
console.log(findUser(users, 2));       // 기대 : { id: 2, name: '홍길동', role: 'admin', verified: true }
console.log(findUser(users, 9));       // 기대 : undefined
console.log(getUserName(users, 1));    // 기대 : 유관순
console.log(getUserName(users, 9));    // 기대 : 탈퇴한 회원
console.log(getPosition(users, 3));    // 기대 : 2
console.log(getPosition(users, 9));    // 기대 : -1
