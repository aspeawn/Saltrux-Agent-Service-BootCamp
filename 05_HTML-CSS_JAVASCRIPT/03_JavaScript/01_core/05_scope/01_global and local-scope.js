/**
 * 전역 스코프 -> 코드의 가장 바깥쪽 영역 -> 여기서 선언하면 어디서든 참조 가능
 * 지역 스코프 -> 함수의 내부 -> 여기서 선언한건 자신과 하위 스코프에서만 참조 가능
 *
 * 스코프 : 변수나 함수가 선언되어 있는 범위(범위에 따라 변수를 참조할 수 있는 지가 결정)
 */

var x = "global x";
var y = "global y";

function outer() {
  var z = "outer() local z";

  console.log(x);
  console.log(y);
  console.log(z);
  function inner() {
    var x = "inner() local x";
    console.log("===== inner() ======");

    console.log(x);
    console.log(y);
    console.log(z);
  }

  inner();
}

outer();

console.log(`전역스코프에서 x : ${x}`); // global local
// console.log(`전역스코프에서 z : ${z}`); // global local

/**
 * 스코프 체인
 *
 * 전역 스코프 (x, y, outer)
 *      ↑
 * outer 지역 스코프 (z, inner)
 *      ↑
 * inner 지역 스코프 (x)
 */

// 암묵적 전역
// 함수안에서 var, let, const 없이 값을 할당하면
// 자바스크립트 엔진이 변수를 찾다가 끝내 못찾으면, 전역에 변수를 만들어버림
function leakVariable() {
  leaked = "선언 없이 할당";
}

console.log("===========");

leakVariable();
console.log(leaked);
