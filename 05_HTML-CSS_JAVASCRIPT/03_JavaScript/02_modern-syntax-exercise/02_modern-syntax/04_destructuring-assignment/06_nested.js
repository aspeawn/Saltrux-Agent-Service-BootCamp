/* 문제 06. 중첩 구조 분해
   유형 : 코드 작성 + 출력 예측 | 난이도 : ★★★

   [1] response 에서 아래 세 값을 구조 분해 한 번으로 꺼낸다.
         user.name → userName / user.address.city → city / posts 의 첫 번째 요소 → firstPost
   [2] 주석 처리된 줄의 결과를 예상한다.
   [3] getCity(response) : response.user.address.city 를 중첩 구조 분해로 꺼내 반환한다.
         user 나 address 가 없어도 오류 없이 undefined 를 반환하도록 중간 단계에 기본값을 준다.
*/

const response = {
    user: { name: '유관순', address: { city: '천안', zip: '31000' } },
    posts: ['첫 글', '두 번째 글']
};

// [1] TODO

console.log(userName, city, firstPost);   // 기대 : 유관순 천안 첫 글


// [2]
const product = { size: { width: 10, height: 20 } };
const { size: { width } } = product;
console.log(width);     // 예상 :
// console.log(size);   // 예상 :


// [3]
function getCity(response) {
    // TODO
}
console.log(getCity(response));     // 기대 : 천안
console.log(getCity({ user: {} })); // 기대 : undefined
console.log(getCity({}));           // 기대 : undefined
