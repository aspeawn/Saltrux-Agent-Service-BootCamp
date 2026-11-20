/* 문제 03. var 의 문제점 확인하기
   유형 : 출력 예측 | 난이도 : ★★☆

   var 로 작성된 코드의 출력 결과를 예상해서 적어 보자.
   각 결과가 왜 나오는지 var 의 세 가지 문제(중복 선언, 함수 레벨 스코프, 변수 호이스팅) 중
   무엇 때문인지도 함께 적는다.
*/

// 1.
console.log(user);           // 예상 :            이유 :
var user = '홍길동';

// 2.
var count = 1;
var count = 2;
console.log(count);          // 예상 :            이유 :

// 3.
var i = 100;
for (var i = 0; i < 5; i++) {}
console.log(i);              // 예상 :            이유 :

// 4.
if (true) {
    var message = '블록 안에서 선언';
}
console.log(message);        // 예상 :            이유 :

// 5.
var funcs = [];
for (var n = 0; n < 3; n++) {
    funcs.push(function () { return n; });
}
console.log(funcs[0](), funcs[1](), funcs[2]());   // 예상 :            이유 :
