/* 문제 05. return 과 이른 반환
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 함수의 반환값을 예상해서 적어 보자.

   [2] getShippingFee(order) : 주문 정보를 받아 배송비를 반환한다. 이른 반환(early return)으로 작성한다.
         - order 가 없으면(null, undefined) 0
         - 주문 금액(total)이 50000원 이상이면 0 (무료 배송)
         - 지역(region)이 '제주' 이면 6000
         - 그 외에는 3000
*/

// [1]
function a() {
    return 'A';
    console.log('여기는 실행될까?');
}
function b() {
    console.log('b 실행');
}
function c() {
    return
        '줄바꿈';
}
function d(n) {
    if (n > 0) {
        return '양수';
    }
}

console.log(a());     // 예상 :
console.log(b());     // 예상 : (두 줄)
console.log(c());     // 예상 :
console.log(d(5));    // 예상 :
console.log(d(-5));   // 예상 :


// [2]
function getShippingFee(order) {
    // TODO
}
console.log(getShippingFee(null));                             // 기대 : 0
console.log(getShippingFee({ total: 60000, region: '제주' }));  // 기대 : 0
console.log(getShippingFee({ total: 20000, region: '제주' }));  // 기대 : 6000
console.log(getShippingFee({ total: 20000, region: '서울' }));  // 기대 : 3000
