/* 문제 11. [종합] 장바구니 객체 만들기
   유형 : 코드 작성 | 난이도 : ★★★

   장바구니 객체 cart 의 메서드를 완성한다. 메서드는 축약 표현으로 작성한다.
   items 는 상품 이름을 키로, { price, qty } 객체를 값으로 갖는다.

     add(name, price) : 상품을 담는다.
                        이미 담긴 상품이면(in 사용) qty 만 1 늘린다.
                        처음 담는 상품이면 { price, qty: 1 } 로 추가한다. (프로퍼티 값 단축 구문 사용)
     remove(name)     : 상품을 장바구니에서 삭제한다.
     getTotal()       : 모든 상품의 price * qty 합계를 반환한다. (for...in 사용)
     getCount()       : 담긴 상품의 총 수량(qty 합계)을 반환한다.
*/

const cart = {
    items: {},

    // TODO : add, remove, getTotal, getCount
};

// 아래 주석을 풀어서 확인한다.
// cart.add('키보드', 45000);
// cart.add('마우스', 20000);
// cart.add('마우스', 20000);
// console.log(cart.items);
// // 기대 : { '키보드': { price: 45000, qty: 1 }, '마우스': { price: 20000, qty: 2 } }
// console.log(cart.getTotal());   // 기대 : 85000
// console.log(cart.getCount());   // 기대 : 3
//
// cart.remove('키보드');
// console.log(cart.items);        // 기대 : { '마우스': { price: 20000, qty: 2 } }
// console.log(cart.getTotal());   // 기대 : 40000
