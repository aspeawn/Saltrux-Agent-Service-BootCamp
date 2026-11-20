// 매개변수 : 함수를 정의할 때 쓰는 이름
// 인자 : 함수를 호출할 때 실제로 넘기는 값 

// Java와는 다르게 인자의 개수가 달라도 실행됨

// 매개변수 위치에 기본값을 설정할 수 있다. 기본값 설정 안하고 매개변수 없는 함수 호출 시 unknown으로 출력됨
function hello(name="아무개") {
  return `${name}님 안녕하세요!`;
}

console.log(hello("bear"));
console.log(hello("bear", "cat"));
console.log(hello());


// REST 파라미터 ...
