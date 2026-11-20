/* 문제 08. 메서드 축약 표현과 화살표 함수
   유형 : 코드 수정 | 난이도 : ★★☆

   [1] calculator 객체의 메서드를 모두 메서드 축약 표현으로 바꾼다. 동작은 그대로여야 한다.

   [2] profile 객체의 introduce 를 호출하면 이름이 undefined 로 나온다.
         원인을 적고, 올바르게 고친다.
*/

// [1]
const calculator = {
    result: 0,
    add: function (n) {
        this.result += n;
        return this;
    },
    subtract: function (n) {
        this.result -= n;
        return this;
    },
    getResult: function () {
        return this.result;
    }
};
// TODO : 위 메서드들을 축약 표현으로 바꾼다.

console.log(calculator.add(10).subtract(3).getResult());   // 기대 : 7


// [2]
const profile = {
    name: '유관순',
    introduce: () => {
        return `안녕하세요, ${this.name}입니다.`;
    }
};
console.log(profile.introduce());   // 기대 : 안녕하세요, 유관순입니다.
// 원인 :
