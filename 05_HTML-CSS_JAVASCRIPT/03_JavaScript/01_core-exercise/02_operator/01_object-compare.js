/* 문제 01. 원시 값 비교와 객체 비교
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] isSameUser(user1, user2) 함수를 완성한다.
       두 객체의 id 와 name 이 모두 같으면 true 를 반환한다.
       객체를 === 로 직접 비교하면 왜 안 되는지 생각해 본다.
*/

// [1] 출력 예측
const a = { name: '홍길동' };
const b = { name: '홍길동' };
const c = a;

console.log('hello' === 'hello');          // 예상 :
console.log(a === b);                      // 예상 :
console.log(a == b);                       // 예상 :
console.log(a === c);                      // 예상 :
console.log([1, 2] === [1, 2]);            // 예상 :
console.log(a.name === b.name);            // 예상 :
console.log(JSON.stringify(a) === JSON.stringify(b));   // 예상 :

c.name = '유관순';
console.log(a.name);                       // 예상 :


// [2] isSameUser
function isSameUser(user1, user2) {
    // TODO
}

console.log(isSameUser({ id: 1, name: '유관순' }, { id: 1, name: '유관순' }));   // 기대 : true
console.log(isSameUser({ id: 1, name: '유관순' }, { id: 2, name: '유관순' }));   // 기대 : false
