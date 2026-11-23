/* 문제 04. 객체 구조 분해 활용
   유형 : 코드 작성 + 코드 수정 | 난이도 : ★★☆

   [1] toViewModel(response) : 서버 응답의 snake_case 이름을 camelCase 로 바꾼 새 객체를 반환한다.
         { user_id, user_name, created_at } → { userId, userName, createdAt }
         '다른 이름으로 받기' 구조 분해와 프로퍼티 값 단축 구문을 함께 쓴다.
   [2] getDisplayInfo(user) : '길동님 (120P)' 형태로 반환한다.
         nickname 이 없으면 '익명', point 가 없으면 0 으로 표시한다.
         서버가 null 을 보내도 기본값이 나와야 한다.
   [3] 아래 코드는 SyntaxError 가 난다. 이미 선언한 변수에 구조 분해로 값을 넣도록 고친다.
*/

// [1]
function toViewModel(response) {
    // TODO
}
console.log(toViewModel({ user_id: 7, user_name: '유관순', created_at: '2026-09-15' }));
// 기대 : { userId: 7, userName: '유관순', createdAt: '2026-09-15' }


// [2]
function getDisplayInfo(user) {
    // TODO
}
console.log(getDisplayInfo({ nickname: '길동', point: 120 }));   // 기대 : 길동님 (120P)
console.log(getDisplayInfo({}));                                 // 기대 : 익명님 (0P)
console.log(getDisplayInfo({ nickname: null, point: null }));    // 기대 : 익명님 (0P)


// [3]
let title, writer;
// { title, writer } = { title: '공지', writer: '관리자' };   // 주석을 풀면 SyntaxError 가 난다. 고친다.
console.log(title, writer);   // 기대 : 공지 관리자
