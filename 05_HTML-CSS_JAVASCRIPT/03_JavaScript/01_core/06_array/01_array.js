// 배열
// 여러개의 값을 순차적으로 나열한 자료구조
// JavaScript -> 크기가 자유롭게 늘어남, 아무값이나 섞어 담을 수 있음

const fruits = ['바나나', '복숭아', '키위'];
console.log(fruits);
console.log(typeof fruits);     // object

console.log(fruits[0]); // 인덱스 사용
console.log(fruits[5]); // 인덱스를 벗어나면? undefined

// 배열의 길이
console.log(fruits.length); // 3

// 반복을 통해 순회 출력
for (const fruit of fruits) {
    console.log(fruit);
}

// 무엇이든 담을 수 있다.
const mixed = ["홍길동", 20, true, null, undefined, [], {}, function () {}];
console.log(mixed);

// 문법상 가능하지만 쓰지 않음 
const users = [
    { id: 1, name: "유관순" },
    { id: 2, name: "홍길동" },
];

// 일급 객체의 형태 함수 -> map은 고차함수, 그 안의 형태는 콜백 함수임 
console.log(users.map((user) => user.name));
