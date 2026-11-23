/* 문제 05. rest 로 나머지 모으기
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] toPublicUser(user) : password 와 token 을 뺀 나머지 프로퍼티만 담은 새 객체를 반환한다.
         원본은 바뀌면 안 된다.
   [2] splitProps(props) : label 은 따로 꺼내고 나머지는 inputProps 로 모아 { label, inputProps } 를 반환한다.
         React 에서 <Input label="이메일" type="email" placeholder="..." /> 의 props 를 나누는 형태다.
   [3] delete 대신 이 방법을 쓰는 이유를 적는다.
*/

// [1]
function toPublicUser(user) {
    // TODO
}
const user = { id: 1, name: '유관순', password: 'secret', token: 'abc123' };
console.log(toPublicUser(user));   // 기대 : { id: 1, name: '유관순' }
console.log(user);                 // 기대 : 원본 그대로 { id: 1, name: '유관순', password: 'secret', token: 'abc123' }


// [2]
function splitProps(props) {
    // TODO
}
console.log(splitProps({ label: '이메일', type: 'email', placeholder: '입력하세요' }));
// 기대 : { label: '이메일', inputProps: { type: 'email', placeholder: '입력하세요' } }


// [3]
// 이유 :
