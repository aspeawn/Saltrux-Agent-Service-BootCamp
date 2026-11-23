// 구조분해할당
// - 배열이나 객체를 분해해서 변수에 한번에 담는 문법

const nameArr = ['Gildong', "Hong"];

// 우항에는 이터러블 요소가 다 올 수 있음
const [firstName, lastName] = nameArr;
const [char1, char2] = "JS";

console.log(firstName);
console.log(lastName);

console.log(char1);
console.log(char2);

// 2. 함수의 반환값을 바로 분해하기

console.log("Saimdang Shin".split(" "));

const[firstName2, lastName2] = "Saimdang Shin".split(" ");

console.log(firstName2);
console.log(lastName2);

// 필요없는 요소 건너뛰기
const [first, , last] = ['firstname', 'middlename', 'lastname'];
console.log(first);   // firstname
console.log(last);    // lastname


// 변수가 더 많을 때 - 남는 변수는 undefined가 된다.
const [a, b, c] = [1, 2];
console.log(a, b, c);

// 요소가 더 많으면 남는 요소는 버려진다.
const [d] = [1, 2, 3];
console.log(d);
