/* 문제 03. 단축 평가로 코드 줄이기
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] if 문을 && 단축 평가 한 줄로 바꾼다.
   [2] getNickname(user) : user 가 null 이면 null, 아니면 user.nickname 을 반환한다.
       if 문 없이 && 로 작성한다.
   [3] getDisplayName(name) : name 이 빈 문자열이면 '익명', 아니면 name 을 반환한다.
       if 문 없이 || 로 작성한다.
   [4] 아래 코드의 문제를 찾아 고친다. 수량 0 을 넣었는데 10 이 나온다.
*/

// [1]
const isLoggedIn = true;
if (isLoggedIn) {
    console.log('환영합니다');
}
// TODO : 위 if 문과 같은 동작을 && 한 줄로 작성


// [2]
function getNickname(user) {
    // TODO
}
console.log(getNickname({ nickname: '길동이' }));   // 기대 : 길동이
console.log(getNickname(null));                     // 기대 : null


// [3]
function getDisplayName(name) {
    // TODO
}
console.log(getDisplayName('유관순'));   // 기대 : 유관순
console.log(getDisplayName(''));         // 기대 : 익명


// [4] 수량을 지정하지 않으면(undefined) 기본값 10, 0 을 지정하면 0 이 나와야 한다.
function getQuantity(qty) {
    return qty || 10;
}
console.log(getQuantity(3));           // 기대 : 3
console.log(getQuantity(undefined));   // 기대 : 10
console.log(getQuantity(0));           // 기대 : 0
