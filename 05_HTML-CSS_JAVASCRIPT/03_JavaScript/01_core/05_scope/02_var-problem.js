// var를 사용하지 않는 이유

// 1. 중복 선언이 허용되는 문제

// 코드가 많아지고 길어지면 어딘가에서 같은 이름을 또 선언해도 알 수가없음
var msg = "안녕하세요";
console.log(msg);

var msg = "안녕하가세요";
console.log(msg);

// 2. 함수레벨 스코프 문제
// 함수레벨 스코프 : var의 경우에는 오직 '함수'만을 지역 범위로 인정함.
for (var i = 0; i < 10; i++) {}
console.log(i); // 10

// 3. 변수 호이스팅
// var로 선언한 변수는 선언문보다 앞에서 참조해도 오류없이 undefined가 나옴
console.log(test);

var test = "반갑습니다~";