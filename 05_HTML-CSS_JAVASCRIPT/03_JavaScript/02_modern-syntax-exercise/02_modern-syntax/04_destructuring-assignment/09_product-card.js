/* 문제 09. [종합] 상품 카드 props 다루기
   유형 : 코드 작성 | 난이도 : ★★★

   React 컴포넌트가 props 를 받는 상황을 문자열을 반환하는 함수로 연습한다.

   [1] ProductCard(props) : 매개변수 자리에서 구조 분해로 props 를 받아 카드 문자열을 반환한다.
         - name 은 반드시 넘어온다. price 기본값 0, discountRate 기본값 0, tags 기본값 []
         - price 가 null 로 와도 0 으로 처리한다.
         - 최종 가격 = price * (1 - discountRate), Math.round 로 반올림, 천 단위 구분 기호 표시
         - 형식 : '무선 마우스 | 27,000원 (10% 할인) | #신상 #인기'
           할인율이 0 이면 ' (n% 할인)' 을 빼고, 태그가 없으면 ' | #...' 을 뺀다.

   [2] renderList(products, commonTag) : 상품마다 ProductCard 를 호출한 결과 배열을 반환한다.
         각 상품의 tags 맨 앞   에 commonTag 를 추가해서 넘긴다. 원본 상품 객체는 바뀌면 안 된다. (스프레드 사용)
*/

// [1]
function ProductCard(props) {
    // TODO
}

console.log(ProductCard({ name: '무선 마우스', price: 30000, discountRate: 0.1, tags: ['신상', '인기'] }));
// 기대 : 무선 마우스 | 27,000원 (10% 할인) | #신상 #인기
console.log(ProductCard({ name: '키보드', price: 45000 }));
// 기대 : 키보드 | 45,000원
console.log(ProductCard({ name: '마우스패드', price: null }));
// 기대 : 마우스패드 | 0원


// [2]
function renderList(products, commonTag) {
    // TODO
}

const products = [
    { name: '키보드', price: 45000 },
    { name: '모니터', price: 300000, discountRate: 0.2, tags: ['한정'] }
];
console.log(renderList(products, 'SALE'));
// 기대 : [ '키보드 | 45,000원 | #SALE', '모니터 | 240,000원 (20% 할인) | #SALE #한정' ]
console.log(products[1].tags);
// 기대 : [ '한정' ]   (원본 그대로)
