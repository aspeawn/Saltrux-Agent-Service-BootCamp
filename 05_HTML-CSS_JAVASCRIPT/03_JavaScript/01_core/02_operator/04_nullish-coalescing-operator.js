// null 병합 연산자 ??

// 좌항이 null or undefined면 우항 반환
// 아니면 좌항 그대로 반환
var test = null ?? '기본 값';

var someObject = null;
var someObject2 = 0;

var test = someObject ?? "기본 값";
var test2 = someObject2 || "기본 값";

console.log(test);
console.log(test2);
console.log(typeof(0));

