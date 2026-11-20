/* 문제 04. 옵셔널 체이닝으로 안전하게 꺼내기
   유형 : 코드 작성 | 난이도 : ★★☆

   서버에서 받은 사용자 데이터는 어느 단계가 비어 있을지 모른다.
   아래 함수들을 옵셔널 체이닝(?.)을 써서 오류 없이 동작하도록 완성한다.

   [1] getCity(user) : user.profile.address.city 를 반환한다. 중간에 없으면 undefined.
   [2] getFirstTag(post) : post.tags 배열의 첫 번째 요소를 반환한다. 없으면 undefined.
   [3] runCallback(callback) : callback 이 있으면 호출하고, 없으면 아무 일도 하지 않는다.
*/

const user1 = { name: '홍길동', profile: { address: { city: '서울' } } };
const user2 = { name: '유관순', profile: {} };
const user3 = { name: '장보고' };
const user4 = null;

// [1]
function getCity(user) {
    return user.profile.address.city;   // TODO : 지금은 user2 부터 오류가 난다.
}
console.log(getCity(user1));   // 기대 : 서울
// console.log(getCity(user2));   // 기대 : undefined   (고친 뒤 주석을 풀어서 확인)
// console.log(getCity(user3));   // 기대 : undefined
// console.log(getCity(user4));   // 기대 : undefined


// [2]
function getFirstTag(post) {
    // TODO
}
console.log(getFirstTag({ tags: ['js', 'react'] }));   // 기대 : js
console.log(getFirstTag({}));                          // 기대 : undefined
console.log(getFirstTag(null));                        // 기대 : undefined


// [3]
function runCallback(callback) {
    // TODO
}
runCallback(() => console.log('콜백 실행됨'));   // 기대 : 콜백 실행됨
runCallback(null);                               // 기대 : 아무것도 출력되지 않고 오류도 없다.
runCallback();                                   // 기대 : 아무것도 출력되지 않고 오류도 없다.
