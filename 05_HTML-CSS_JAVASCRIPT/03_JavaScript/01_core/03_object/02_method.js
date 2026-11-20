/**
 * 자바스크립트의 함수는 객체
 * -> 함수는 값으로 취급이 가능
 * -> 프로퍼티의 값으로도 쓸 수 있음 -> 메소드
 */


var dog = {
    name: '구찌',

    // JavaScript에서는 this 생략 불가능
    eat: function (food) {
        console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
    },
};

dog.eat("고구마");

// 함수만 변수에 옮겨 담을 수 있다.
var eating = dog.eat;
console.log(typeof eating);


eating("고기");

var cat = {
    name : '나비',
    eat: eating,
};

cat.eat("생선");



var dog2 = {
    name: "구찌",

    eat: function(food) {
        console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
    }
}

dog2.eat("과일");

// 화살표 함수 
// this가 없음 (this가 객체를 가리키지 못함, 즉 객체의 바깥 범위의 this를 사용해야함)
var dog3 = {
    name: "구찌",

    eat:(food) => {
        console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
        
    }
}

dog2.eat("고기");