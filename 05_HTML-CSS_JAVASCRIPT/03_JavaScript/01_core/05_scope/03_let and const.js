/**
 * let : 일반 변수 선언 (값을 바꿀 수 있음)
 * const : 변수 선언 (값을 바꿀 수 없음)
 * 
 * -> 기본적으로 const, 값을 꼭 바꿔야할 때만 let, var는 안씀
 */

// 1. 중복 선언
let msg = "안녕하세요";
console.log(msg);

// let msg = "안녕하가세요";  let -> 중복 선언을 하면 문법 오류 발생
// console.log(msg);

// 2. 함수레벨 스코프 문제
// 함수레벨 스코프 : var의 경우에는 오직 '함수'만을 지역 범위로 인정함.
for (let i = 0; i < 10; i++) {}
// console.log(i); // 10

// 3. 변수 호이스팅
// var로 선언한 변수는 선언문보다 앞에서 참조해도 오류없이 undefined가 나옴
// console.log(test);

let test = "반갑습니다~";


// const를 사용하는 것
// 재할당 금지
const DISCOUNT_RATE = 0.15;
// DISCOUNT_RATE = 0.5;

// 선언과 동시에 초기화 해야함
const y = "";

// const로 선언해도 객체의 내용은 바뀐다!
// 변수에 객체나 배열을 다믕면 참조값을 저장한다.
const student = { name: '홍길동', age: 20};

student.name = "유관순";
console.log(student);

student = {};   // 주소를 바꾸는 것은 안됨
