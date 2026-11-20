/* 문제 04. 마침표 표기법과 대괄호 표기법
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] getValue(obj, key) : 객체와 키 문자열을 받아 해당 프로퍼티 값을 반환한다.

   [3] printRow(user, columns) : columns 배열에 들어 있는 키 순서대로 값을 꺼내
         ' | ' 로 이어 붙인 문자열을 반환한다. (for 문 사용)
         예) printRow(user, ['name', 'age']) → '홍길동 | 20'
*/

// [1]
const product = {
    name: '키보드',
    'sale-price': 45000,
    1: '첫 번째'
};
const field = 'name';

console.log(product.name);            // 예상 :
console.log(product['name']);         // 예상 :
console.log(product[field]);          // 예상 :
console.log(product.field);           // 예상 :
console.log(product['sale-price']);   // 예상 :
console.log(product[1]);              // 예상 :
console.log(product.color);           // 예상 :
console.log(product.maker?.name);     // 예상 :
// console.log(product.maker.name);   // 예상 : (주석을 풀면 어떻게 될까?)


// [2]
function getValue(obj, key) {
    // TODO
}
console.log(getValue(product, 'name'));         // 기대 : 키보드
console.log(getValue(product, 'sale-price'));   // 기대 : 45000


// [3]
function printRow(user, columns) {
    // TODO
}
const user = { name: '홍길동', age: 20, email: 'hong@test.com' };
console.log(printRow(user, ['name', 'age']));            // 기대 : 홍길동 | 20
console.log(printRow(user, ['email', 'name', 'age']));   // 기대 : hong@test.com | 홍길동 | 20
