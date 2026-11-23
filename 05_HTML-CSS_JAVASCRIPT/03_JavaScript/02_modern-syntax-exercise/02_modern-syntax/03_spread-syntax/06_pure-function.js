/* 문제 06. 비순수 함수를 순수 함수로 바꾸기
   유형 : 코드 수정 | 난이도 : ★★★

   아래 네 함수는 모두 인수로 받은 원본을 직접 바꾸는 비순수 함수다.
   같은 결과를 반환하면서 원본은 바꾸지 않는 순수 함수로 고친다.
   (push, splice, sort, 프로퍼티 직접 할당을 원본에 쓰지 않는다)

   고친 뒤 아래 테스트에서 원본이 그대로인지 확인한다.
*/

// function addItem(cart, item) {
//     cart.push(item);
//     return cart;
// }

function addItem(cart, item) {
    return [...cart, item];
}

// function removeItem(cart, index) {
//     cart.splice(index, 1);
//     return cart;
// }


function removeItem(cart, index) {
    const copy = [...cart];   // 새 배열 생성 (원본과 분리)
    copy.splice(index, 1);    // 복사본만 변경
    return copy;
}

// function sortByPrice(products) {
//     return products.sort((a, b) => a.price - b.price);
// }

function sortByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

// function levelUp(user) { 
//     user.level = user.level + 1;
//     return user;
// }

// user가 객체이고 level이 프로퍼티인 걸 감안하기
function levelUp(user) {
    return {...user, level: user.level + 1};
}

const cart = ['사과', '우유'];
console.log(addItem(cart, '빵'));      // 기대 : [ '사과', '우유', '빵' ]
console.log(removeItem(cart, 0));      // 기대 : [ '우유' ]
console.log(cart);                     // 기대 : [ '사과', '우유' ]   (원본 그대로)

const products = [{ name: 'B', price: 300 }, { name: 'A', price: 100 }];
console.log(sortByPrice(products).map(p => p.name));   // 기대 : [ 'A', 'B' ]
console.log(products.map(p => p.name));                // 기대 : [ 'B', 'A' ]   (원본 그대로)

const member = { name: '유관순', level: 1 };
console.log(levelUp(member));          // 기대 : { name: '유관순', level: 2 }
console.log(member);                   // 기대 : { name: '유관순', level: 1 }   (원본 그대로)
