// 단축 평가

/**
 * Java 단축평가
 * a() && b()일 때, a()가 false이면 b() 호출하지 않는다. -> 결과값이 boolean
 * JavaScript
 * a() && b()일 때, a()가 false이면 b() 호출하지 않는다. -> 결과값을 피연산자중 한개를 돌려줌
 */

// 논리연산의 결과를 결정하는 첫번째 피연산자를 반환
console.log('apple' || 'banana');   // apple 출력
console.log(false || 'banana');     // banana 출력

console.log('======end연산======');


console.log('apple' && 'banana');   // banana 출력
console.log("banana" && false);     // false 출력

var num = 1;

if (num % 2 === 0) {
    console.log("짝수입니다");
} else {
    console.log("홀수입니다.");
}

num % 2 === 0 && console.log("짝수입니다.");
num % 2 === 0 && console.log("홀수입니다.");

// 변수가 null 또는 undefined인지 확인
var someObject = null;

// someObject에 값이 들어옴 (외부 API 호출)

var val = someObject && someObject.value;
