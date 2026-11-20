// 함수의 호이스팅
// 함수의 선언은 코드의 선두로 끌어올려진것처럼 동작

console.log(hello("bear"));

function hello(name) {
  return `${name}님 안녕하세요!`;
}

// 표현식을 사용했을 경우 정의보다 위에서 호출하면 오류가 남
// -> 호이스팅에 기대어서 안쓰는걸 권장
console.log(bye("bear"));

var bye = function (name) {
  return `${name}님 안녕히가세요!`;
};
