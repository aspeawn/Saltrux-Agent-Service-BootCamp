/* 문제 03. 객체 구조 분해 결과 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   각 줄의 결과를 예상해서 적어 보자.
   객체 구조 분해는 순서가 아니라 프로퍼티 이름으로 담긴다.
*/

const product = { name: '키보드', price: 45000, stock: 0, maker: null };

const { name, price } = product;
console.log(name, price);                    // 예상 :   

const { price: cost, name: title } = product;
console.log(title, cost);                    // 예상 :

const { color } = product;
console.log(color);                          // 예상 :

const { color: c = '검정', stock = 10, maker = '미상' } = product;
console.log(c, stock, maker);                // 예상 :

const { name: productName, ...detail } = product;
console.log(productName, detail);            // 예상 :

// 질문. maker 에 기본값 '미상' 을 줬는데 그 값이 나오지 않은 이유는?
// 답 : 구조분해로 null이 들어가서 덮어씌어짐
