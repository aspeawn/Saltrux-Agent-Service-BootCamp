/* 문제 01. 이터러블인 것과 아닌 것
   유형 : 출력 예측 | 난이도 : ★☆☆

   [1] 각 줄의 결과를 예상해서 적어 보자.
   [2] 주석 처리된 줄을 풀면 어떻게 될지 예상한다.
*/

const fruits = ['사과', '배'];
const word = 'JS';
const user = { name: '홍길동', age: 20 };

// [1]
for (const fruit of fruits) console.log(fruit);     // 예상 : 사과 \n 배
for (const ch of word) console.log(ch);             // 예상 : J\nS
for (const idx in fruits) console.log(typeof idx);  // 예상 : String\n String
for (const key in user) console.log(key);           // 예상 : name\nage
console.log([...word]);                             // 예상 : ['J', 'S']
console.log([...fruits, ...word]);                  // 예상 : ['사과', '배', 'J', 'S']

// [2]
// for (const v of user) console.log(v);            // 예상 : 오류 발생 -> of는 이터러블 요소 but user은 객체
console.log([...user]);                          // 예상 : 
