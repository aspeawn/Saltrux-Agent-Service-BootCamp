// 배열의 고차함수
// 고차함수 : 함수를 인자로 받거나 함수를 return하는 함수

// sort - 정렬 기준으로 콜백
const numbers = [10, 9, 5, 2, 999, 31525];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

const users = [
  { name: "홍길동", age: 30 },
  { name: "유관순", age: 16 },
  { name: "박태근", age: 20 },
];
console.log(users.sort((a, b) => a.age - b.age));

// forEach - for문을 편하게 쓰는법

const fruits = ["사과", "바나나"];

let a = fruits.forEach(function (item, index, array) {
  console.log(index, item, array.length);
});

console.log(a); // forEach는 반환값이 없음

const types = [true, 1, "text"].map((item) => typeof item);
console.log(types);

// filter -> 조건에 맞는 요소만 남긴 새 배열을 반환 
console.log([1, 2, 3, 4, 5, 6].filter((item) => item % 2 === 1));


// reduce - 배열을 하나의 값으로 모은다.

const scores = [90, 80, 70];
// 누적값, 현재값, 인덱스, 배열
// 두번째 인자로 누적값의 초기값을 준다.
// 콜백이 반환하는 값이 다음 호출의 누적값으로 전달된다.
console.log(scores.reduce((acc, cur, index) => {
    console.log(`${index}번째 : 누적 ${acc} + 현재 ${cur} = ${acc + cur}`);
    return acc + cur;   // 
}, 10),
);

// find : 조건에 맞는 첫번째를 찾는다.
console.log(users.find(user => user.name ==='유관순'));
console.log(users.findIndex((user) => user.name === "유관순"));

