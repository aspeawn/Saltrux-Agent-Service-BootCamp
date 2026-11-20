/* 문제 13. [종합] 상품 목록 가공하기
   유형 : 코드 작성 | 난이도 : ★★★

   쇼핑몰 상품 목록(products)을 가공하는 함수들을 완성한다.
   모든 함수는 원본 배열과 원본 객체를 바꾸지 않아야 한다.

     1. getInStockNames(products)     : 재고(stock)가 1 이상인 상품의 이름 배열 (filter + map)
     2. getCategoryTotal(products, c) : 카테고리 c 상품들의 재고 금액(price * stock) 합계 (filter + reduce)
     3. getTop3(products)             : 가격이 비싼 순으로 상위 3개 상품의 이름 배열 (복사 + sort + slice + map)
     4. restock(products, id, amount) : id 상품의 stock 에 amount 를 더한 새 배열 (map + 스프레드)
     5. getSummary(products)          : '전자 3개, 생활 2개' 형태의 문자열
                                        (카테고리별 개수를 reduce 로 객체에 모은 뒤 Object.entries + map + join)
*/

const products = [
    { id: 1, name: '노트북', category: '전자', price: 1200000, stock: 3 },
    { id: 2, name: '머그컵', category: '생활', price: 8000, stock: 0 },
    { id: 3, name: '이어폰', category: '전자', price: 150000, stock: 10 },
    { id: 4, name: '수건', category: '생활', price: 5000, stock: 25 },
    { id: 5, name: '모니터', category: '전자', price: 300000, stock: 0 }
];

function getInStockNames(products) {
    // TODO
}
function getCategoryTotal(products, category) {
    // TODO
}
function getTop3(products) {
    // TODO
}
function restock(products, id, amount) {
    // TODO
}
function getSummary(products) {
    // TODO
}

console.log(getInStockNames(products));            // 기대 : [ '노트북', '이어폰', '수건' ]
console.log(getCategoryTotal(products, '전자'));    // 기대 : 5100000
console.log(getCategoryTotal(products, '생활'));    // 기대 : 125000
console.log(getTop3(products));                    // 기대 : [ '노트북', '모니터', '이어폰' ]

const updated = restock(products, 2, 50);
console.log(updated?.[1]);                         // 기대 : { id: 2, name: '머그컵', category: '생활', price: 8000, stock: 50 }
console.log(products[1].stock);                    // 기대 : 0   (원본 그대로)

console.log(getSummary(products));                 // 기대 : 전자 3개, 생활 2개
