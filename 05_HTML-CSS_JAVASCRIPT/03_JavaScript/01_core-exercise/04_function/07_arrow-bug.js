/* 문제 07. 화살표 함수 버그 찾기
   유형 : 코드 수정 | 난이도 : ★★☆

   아래 코드는 오류 없이 실행되지만 결과가 기대와 다르다.
   각 함수의 문제를 찾아 원인을 주석으로 적고 고친다.
*/

// 1. 10 이 나와야 하는데 undefined 가 나온다.
const double = n => { n * 2; };
console.log(double(5));        // 기대 : 10
// 원인 :


// 2. 객체가 나와야 하는데 undefined 가 나온다.
const createUser = (id, name) => { id, name };
console.log(createUser(1, '유관순'));   // 기대 : { id: 1, name: '유관순' }
// 원인 :


// 3. [10, 20, 30] 이 나와야 하는데 [undefined, undefined, undefined] 가 나온다.
const result = [1, 2, 3].map(n => {
    n * 10;
});
console.log(result);           // 기대 : [ 10, 20, 30 ]
// 원인 :
