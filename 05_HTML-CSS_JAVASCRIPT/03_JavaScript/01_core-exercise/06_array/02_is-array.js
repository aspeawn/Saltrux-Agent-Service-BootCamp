/* 문제 02. 배열인지 확인하기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] getItems(response) : 서버 응답을 받아 화면에 그릴 배열을 반환한다.
         - response 자체가 배열이면 그대로 반환한다.
         - response.items 가 배열이면 그것을 반환한다.
         - 그 외(null, undefined, 객체 등)는 빈 배열을 반환한다.
       "x.map is not a function" 오류를 막는 함수다.
*/

// [1]
console.log(typeof []);                          // 예상 :
console.log(Array.isArray([]));                  // 예상 :
console.log(Array.isArray({ length: 0 }));       // 예상 :
console.log(Array.isArray('abc'));               // 예상 :
console.log(typeof Array.prototype.filter);      // 예상 :
console.log([...'abc']);                         // 예상 :


// [2]
function getItems(response) {
    // TODO
}
console.log(getItems([1, 2, 3]));                // 기대 : [ 1, 2, 3 ]
console.log(getItems({ items: ['a', 'b'] }));    // 기대 : [ 'a', 'b' ]
console.log(getItems({ items: null }));          // 기대 : []
console.log(getItems(undefined));                // 기대 : []
console.log(getItems({ name: '홍길동' }));         // 기대 : []

// 완성한 뒤 주석을 풀어 확인한다. 어떤 응답에서도 오류 없이 동작해야 한다.
// console.log(getItems(null).map(item => item));   // 기대 : []
