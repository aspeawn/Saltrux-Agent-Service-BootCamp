/**
 * spread 문법 -> 전개문법
 *
 * - 하나로 뭉쳐있는 값의 집합을 펼쳐서 개별값의 목록으로 만든다.
 */

// 배열이 아니라 숫자 목록을 인자로 받음.
console.log(Math.max(10, 30, 20));

const arr = [10, 20, 30];
console.log(Math.max(arr)); // NaN : 숫자 연산을 못함

console.log(Math.max(...arr));

const arr1 = [10, 30, 20];
const arr2 = [100, 300, 200];

console.log(Math.min(...arr1, ...arr2));
console.log(Math.min(10, 30, 20, 100, 300, 200));

// 배열을 바꾸는 것인가? x
console.log(arr1);

// 객체 리터럴에서도 펼치기
// 일반 객체는 Iterable가 아니라 펼칠 수 없음.
// 객체 리터럴 안에서 객체를 펼치는 것은 가능
const user = { name: "홍길동", age: 20 };

// console.log(...user);  // Spread syntax requires ...iterable
// console.log({ ...user });

// 기본값을 준비하고, 같은 값이 있으면 나중 값으로 덮어씌울 때 사용
// 순서가 중요함, 앞에 적으면 기본값인 20으로 출력됨
console.log({ ...user, age: 21});   
console.log({...user, city: '서울'});

const defaults = { size: 'md', color: 'gray'};
const options = { color: "blue"};

console.log({...defaults, ...options});

