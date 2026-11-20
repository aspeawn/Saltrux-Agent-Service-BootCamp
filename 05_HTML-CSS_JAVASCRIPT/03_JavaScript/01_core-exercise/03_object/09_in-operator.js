/* 문제 09. in 연산자로 키 존재 확인하기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] checkResponse(response) : 서버 응답 객체에 error 키가 있으면 '실패', 없으면 '성공' 을 반환한다.
         error 의 값이 빈 문자열이나 null 이어도 키가 있으면 '실패' 로 본다.

   [3] hasAll(obj, keys) : keys 배열의 키가 obj 에 모두 있으면 true, 하나라도 없으면 false 를 반환한다.
*/

// [1]
const settings = { darkMode: false, fontSize: 0, nickname: undefined };

console.log(settings.darkMode === undefined);   // 예상 :
console.log(settings.nickname === undefined);   // 예상 :
console.log(settings.email === undefined);      // 예상 :
console.log('nickname' in settings);            // 예상 :
console.log('email' in settings);               // 예상 :
console.log('fontSize' in settings);            // 예상 :
// nickname 과 email 을 === undefined 로 구분할 수 없는 이유 :


// [2]
function checkResponse(response) {
    // TODO
}
console.log(checkResponse({ data: [1, 2, 3] }));          // 기대 : 성공
console.log(checkResponse({ error: '권한이 없습니다' }));   // 기대 : 실패
console.log(checkResponse({ error: '' }));                // 기대 : 실패
console.log(checkResponse({ error: null }));              // 기대 : 실패


// [3]
function hasAll(obj, keys) {
    // TODO
}
const signupForm = { email: 'a@test.com', password: '1234' };
console.log(hasAll(signupForm, ['email', 'password']));              // 기대 : true
console.log(hasAll(signupForm, ['email', 'password', 'nickname']));  // 기대 : false
