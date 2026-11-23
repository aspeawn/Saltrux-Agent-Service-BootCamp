// 화살표함수
// -> this를 만들지 않음 => 콜백을 넘기면서 상위에있는 객체의 this를 가리킴

const theater = {
    store : 'CGV 가산점',
    title : ['치이카와', '최종면접'],

    // 고차함수 forEach() :  매개변수로 화살표 함수(콜백함수)를 받음
    // cl 내부의 this가 showByArrow의 this와 같아서 theater 내부의 store 접근 가능   cl의 this가 바로 store에 접근하는 것이 아님
    showByArrow() {
        this.title.forEach(title => console.log(this.store + ':' + title));
    },

    // 일반 함수를 콜백으로 넘김   ( 일반함수는 this의 객체가 정해지지 않음 )
    showByNomal() {
        this.title.forEach(
            function (title) {
                const store = "내부 스토어"
                // foreach는 콜백을 객체 없이 그냥 호출하게됨. -> 즉, this를 지정하지 못함 (this = undefined)
                console.log(this.store + ':' + title);
            }
        );
    },
}

theater.showByNomal();
console.log('=========');

const dog = {
    name : "구찌",
    eatArrow: (food) => console.log(`${this.name}은 ${food}를 먹습니다`),
    eatMethod(food) {
        console.log(`${this.name}은 ${food}를 먹습니다`);
    },
}

dog.eatArrow("고구마");
dog.eatMethod("고구마");

// 정리
/**
 * 객체의 메소드를 정의할 때 : 메소드 축약표현
 * 콜백 함수를 넘길 때      : 화살표 함수 사용
 */

