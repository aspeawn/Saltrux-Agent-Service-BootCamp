/* 문제 07. 계산된 프로퍼티 이름
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 두 객체의 출력 결과를 예상해서 적어 보자.

   [2] makeObject(key, value) : key 변수의 값을 키로 갖는 객체를 객체 리터럴 한 번으로 만들어 반환한다.

   [3] createFields(prefix, count) : prefix 와 번호를 이어 붙인 키에 빈 문자열을 넣은 객체를 반환한다.
         예) createFields('item', 3) → { item1: '', item2: '', item3: '' }
         객체 리터럴 안에서는 반복문을 쓸 수 없으므로, 빈 객체를 만든 뒤 대괄호 표기법으로 채운다.

   [4] updateForm(form, name, value) : 폼 객체의 name 키 값을 value 로 바꿔 반환한다.
         입력창 name 속성이 그대로 키가 되는 상황이다.
*/

// [1]
const role = 'admin';
const obj1 = { role: true };
const obj2 = { [role]: true, [`${role}Level`]: 3 };

console.log(obj1);   // 예상 :
console.log(obj2);   // 예상 :


// [2]
function makeObject(key, value) {
    // TODO
}
console.log(makeObject('color', 'red'));   // 기대 : { color: 'red' }
console.log(makeObject('size', 270));      // 기대 : { size: 270 }


// [3]
function createFields(prefix, count) {
    // TODO
}
console.log(createFields('item', 3));   // 기대 : { item1: '', item2: '', item3: '' }


// [4]
function updateForm(form, name, value) {
    // TODO
}
const form = { email: '', password: '' };
updateForm(form, 'email', 'hong@test.com');
updateForm(form, 'password', '1234');
console.log(form);   // 기대 : { email: 'hong@test.com', password: '1234' }
