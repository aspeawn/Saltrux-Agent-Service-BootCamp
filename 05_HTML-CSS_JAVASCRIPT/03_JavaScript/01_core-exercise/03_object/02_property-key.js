/* 문제 02. 프로퍼티 키 규칙
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★☆☆

   [1] 아래 객체를 출력했을 때의 결과를 예상해서 적어 보자.

   [2] 다음 프로퍼티를 가진 객체 user 를 만든다. 따옴표가 필요한 키를 구분한다.
         user-id      : 'u001'
         nickname     : '길동'
         phone number : '010-1234-5678'
   [3] 변수 key 에 담긴 문자열을 키로 하는 프로퍼티를 user 에 추가한다. (값 : 'admin')
*/

// [1]
const config = {
    theme: 'light',
    'font-size': 14,
    theme: 'dark',
    lang: 'ko',
};
console.log(config);   // 예상 :
// theme 이 어떻게 되었는지 설명 :


// [2]
const user = {
    // TODO
};

// [3]
const key = 'role';
// TODO

console.log(user);
// 기대 : { 'user-id': 'u001', nickname: '길동', 'phone number': '010-1234-5678', role: 'admin' }
