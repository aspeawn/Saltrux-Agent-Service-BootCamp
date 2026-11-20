/* 문제 05. var 코드를 let / const 로 고치기
   유형 : 코드 수정 | 난이도 : ★★★

   옛날 방식으로 작성된 코드다. 모든 var 를 let 또는 const 로 바꾼다.
     - 다시 할당하지 않는 변수는 const
     - 값을 바꿔야 하는 변수만 let

   바꾸고 나면 [2] 의 버튼 핸들러가 기대한 대로 동작하는지 확인한다.
*/

// [1] 주문 금액 계산
var DISCOUNT_RATE = 0.1;
var items = [
    { name: '노트', price: 3000, qty: 2 },
    { name: '볼펜', price: 1000, qty: 5 }
];
var total = 0;

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var subtotal = item.price * item.qty;
    total += subtotal;
}

var finalPrice = total * (1 - DISCOUNT_RATE);
console.log(`합계 : ${total}, 할인 후 : ${finalPrice}`);   // 기대 : 합계 : 11000, 할인 후 : 9900


// [2] 버튼 세 개에 각각 클릭 핸들러를 만든다고 가정한다.
var handlers = [];
var labels = ['저장', '수정', '삭제'];

for (var j = 0; j < labels.length; j++) {
    handlers.push(function () {
        return `${j}번 버튼 : ${labels[j]}`;
    });
}

console.log(handlers[0]());   // 기대 : 0번 버튼 : 저장
console.log(handlers[1]());   // 기대 : 1번 버튼 : 수정
console.log(handlers[2]());   // 기대 : 2번 버튼 : 삭제
