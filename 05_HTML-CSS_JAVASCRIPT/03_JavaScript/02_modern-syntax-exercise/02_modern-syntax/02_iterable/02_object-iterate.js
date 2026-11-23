/* 문제 02. 객체를 순회하기
   유형 : 코드 수정 + 코드 작성 | 난이도 : ★★☆

   [1] printProfile(user) 를 실행하면 TypeError 가 난다. 오류 메시지를 적고 고친다.
         Object.entries 와 for...of 를 쓰고, 키와 값은 [key, value] 구조 분해로 받는다.
         '키 : 값' 형태로 한 줄씩 출력한다.
   [2] getFilledKeys(form) : 값이 빈 문자열이 아닌 항목의 키만 배열로 반환한다. (Object.entries + filter + map)
*/

// [1]
function printProfile(user) {
    for (const item of user) {
        console.log(item);
    }
}
const user = { name: '홍길동', age: 20, city: '서울' };
// printProfile(user);   // 주석을 풀어 오류를 확인한 뒤 함수를 고친다.
// 오류 메시지 :
// 기대 :
// name : 홍길동
// age : 20
// city : 서울


// [2]
function getFilledKeys(form) {
    // TODO
}
console.log(getFilledKeys({ email: 'a@test.com', password: '', nickname: '길동' }));   // 기대 : [ 'email', 'nickname' ]
