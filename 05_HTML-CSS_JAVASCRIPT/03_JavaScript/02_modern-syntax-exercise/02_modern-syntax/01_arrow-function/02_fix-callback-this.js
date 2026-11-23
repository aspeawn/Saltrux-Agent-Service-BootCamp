/* 문제 02. 콜백 안의 this 고치기
   유형 : 코드 수정 | 난이도 : ★★☆

   아래 team 객체는 오류 없이 실행되지만 결과가 기대와 다르다.
     [1] printMembers : 팀 이름이 undefined 로 나온다.
     [2] getLabels    : 팀 이름이 undefined 로 들어간 배열이 나온다.
     [3] getLeader    : 팀장 이름이 undefined 로 나온다.
   각 메서드의 원인을 주석으로 적고 고친다.
   기준 : 메서드는 메서드 축약 표현으로, 콜백은 화살표 함수로 쓴다.
*/

const team = {
    name: '프론트팀',
    leader: '유관순',
    members: ['홍길동', '장보고'],

    // [1]
    printMembers() {
        this.members.forEach(function (member) {
            console.log(`${this.name} : ${member}`);
        });
    },

    // [2]
    getLabels() {
        return this.members.map(function (member) {
            return `[${this.name}] ${member}`;
        });
    },

    // [3]
    getLeader: () => {
        return `팀장 : ${this.leader}`;
    }
};

team.printMembers();
// 기대 :
// 프론트팀 : 홍길동
// 프론트팀 : 장보고
// 원인 : 일반 함수로 쓰여져 있는데, 이 콜백은 객체의 메서드로 호출되지 않아서 this가 team으로 바인딩되지 않는다. 반면에 화살표 함수는 자기 this가 없어 바깥의 this를 그대로 씀

console.log(team.getLabels());   // 기대 : [ '[프론트팀] 홍길동', '[프론트팀] 장보고' ]
// 원인 : [1]과 동일한 이유
// function member {}   ->    member => {}

console.log(team.getLeader());   // 기대 : 팀장 : 유관순
// 원인 : 화살표 함수는 this를 정의된 위치의 바깥 스코프에서 가져오는데, 객체 리터럴은 스코프가 아니므로 바깥은 모듈 최상위다.
// (Node: module.exports, 브라우저: window) 그래서 leader가 undefined.
