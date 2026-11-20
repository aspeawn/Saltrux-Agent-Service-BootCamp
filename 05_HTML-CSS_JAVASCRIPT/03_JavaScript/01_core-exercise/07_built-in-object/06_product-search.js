/* 문제 06. [종합] 상품 검색 기능 만들기
   유형 : 코드 작성 | 난이도 : ★★★

   검색창에 입력한 키워드로 상품을 찾아 화면에 보여줄 문자열 배열을 만드는
   searchProducts(products, keyword) 를 완성한다.

     1. 키워드의 앞뒤 공백을 없앤다.
     2. 대소문자를 구분하지 않고 상품 이름(name)에 키워드가 포함된 상품만 남긴다.
        name 이 null 인 상품도 있으므로 오류가 나지 않게 처리한다.
     3. 키워드가 빈 문자열이면 모든 상품을 보여준다. (따로 분기하지 않아도 되는 이유를 생각해 본다)
     4. 각 상품을 '[2026-09-05] MacBook Pro - 2,390,000원' 형태의 문자열로 바꾼다.
        - 날짜는 releasedAt 을 'YYYY-MM-DD' 로 표시한다. (padStart)
        - 가격은 천 단위 구분 기호를 넣는다. 가격이 null 이면 '가격 문의' 로 표시한다.
        - 이름이 null 이면 '이름 없음' 으로 표시한다.
*/

const products = [
    { name: 'MacBook Pro', price: 2390000, releasedAt: '2026-09-05T00:00:00' },
    { name: 'iPhone', price: 1250000, releasedAt: '2026-03-12T00:00:00' },
    { name: 'iPad Air', price: null, releasedAt: '2025-11-20T00:00:00' },
    { name: null, price: 50000, releasedAt: '2024-01-01T00:00:00' }
];

function searchProducts(products, keyword) {
    // TODO
}

console.log(searchProducts(products, 'ip'));
// 기대 : [ '[2026-03-12] iPhone - 1,250,000원', '[2025-11-20] iPad Air - 가격 문의' ]

console.log(searchProducts(products, '  MAC '));
// 기대 : [ '[2026-09-05] MacBook Pro - 2,390,000원' ]

console.log(searchProducts(products, ''));
// 기대 : 4개 상품 모두 (마지막은 '[2024-01-01] 이름 없음 - 50,000원')
