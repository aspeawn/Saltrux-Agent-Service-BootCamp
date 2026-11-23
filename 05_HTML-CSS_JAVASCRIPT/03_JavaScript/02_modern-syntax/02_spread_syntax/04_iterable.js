/**
 * iterable(이터러블)
 * - 순회할 수 있는 것
 * 
 * 할 수 있는 것
 * 1. for...of 반복문 사용 가능
 * 2. 스프레드 문법 [...값]
 * 3. 구조분해할당 const [a,b] = 값
 */


// 대표적인 이터러블 - 배열 / 문자열
const fruits = ['사과', '바나나', '딸기']

for (const fruit of fruits) {
  console.log(fruit);
}

for (const char of "React") {
  console.log(char);
}

/**
 * for ...of : 값을 꺼낸다. 이터러블에만 사용 (일반적으로 배열)
 * for ...in : 키(프로퍼티 이름)을 꺼낸다 (객체에서 사용)
 */
// 배열은 인덱스가 문자열형태로 나오기 때문에 권장하지 않음.
for (const idx in fruits) {
  console.log(idx);
}

// 객체는 iterable이 아님
const user = {name: '홍길동', age: 20, city: "서울"};

// user is not iterable
// for(const v of user) {
// }