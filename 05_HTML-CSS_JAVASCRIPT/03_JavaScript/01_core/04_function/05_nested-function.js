// 중첩 함수
// 함수안의 함수

function outer() {
    var outerVa = '외부 함수'

    function inner() {
        var innerVal = '내부 함수'

        console.log(outerVa, innerVal);
    };

    inner();
}

outer();
// inner();
// Scope가 다름 -> 외부에서는 내부함수도, 내부함수의 변수도 볼 수가 없다.


// 함수 자체를 return할 때 사용

// 숫자를 새는 메소드
function createCounter(start) {
    var count = start;

    return function () {
        count = count + 1;
        return count;
    };
}

var counter1 = createCounter(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());

// 클로저(Closure) 
// -> 내부함수가 자신이 선언된 외부 스코푸의 변수를 기억하고
//    외부 함수의 실행이 끝난 뒤에도 변수에 접근할 수 있는 것
// 변수가 남아있는 클로저가 react, vue ... 툴의 기본 동작임

var counter2 = createCounter(20);
console.log(counter2());
console.log(counter2());
console.log(counter2());

// 내부함수 호출 숨김, 내부함수가 외부 함수의 변수 기억함, 이름이 다른 외부 함수 여러번 호출해도 서로 간섭하지 않음