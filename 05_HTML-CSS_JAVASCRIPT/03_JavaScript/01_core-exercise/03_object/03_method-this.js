/* 문제 03. 메서드와 this
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 출력 결과를 예상해서 적어 보자. (this 는 '호출한 객체'다)

   [2] counter 객체를 완성한다.
         count    : 0
         increase : count 를 1 증가시킨다.
         decrease : count 를 1 감소시킨다. 단, 0 아래로는 내려가지 않는다.
         getCount : 현재 count 를 반환한다.
       메서드 안에서 count 대신 this.count 를 써야 한다는 점에 주의한다.
*/

// [1]
const dog = {
    name: '뽀삐',
    introduce: function () {
        return `나는 ${this.name}`;
    },
    bark: function () {
        console.log('멍멍');
    }
};
const cat = { name: '나비', introduce: dog.introduce };

console.log(dog.introduce());       // 예상 :
console.log(cat.introduce());       // 예상 :
console.log(typeof dog.introduce);  // 예상 :
console.log(dog.bark());            // 예상 : (두 줄이 출력된다)


// [2]
const counter = {
    count: 0,
    // TODO : increase, decrease, getCount
};

// counter.increase();
// counter.increase();
// counter.increase();
// counter.decrease();
// console.log(counter.getCount());   // 기대 : 2
// counter.decrease();
// counter.decrease();
// counter.decrease();
// console.log(counter.getCount());   // 기대 : 0
