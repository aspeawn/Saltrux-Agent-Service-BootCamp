/* 문제 05. 프로퍼티 변경, 추가, 삭제
   유형 : 코드 작성 + 출력 예측 | 난이도 : ★☆☆

   [1] item 객체를 아래 순서대로 조작하고 결과를 출력한다.
         1. price 를 25000 으로 변경한다.
         2. stock 프로퍼티를 추가한다. (값 : 10)
         3. discount 프로퍼티를 삭제한다.
         4. 대괄호 표기법으로 'is-new' 프로퍼티를 추가한다. (값 : true)
   [2] 아래 코드의 출력 결과를 예상해서 적어 보자. 오타 하나가 어떤 결과를 만드는지 본다.
*/

// [1]
const item = { name: '텀블러', price: 20000, discount: 0.1 };

// TODO 1
// TODO 2
// TODO 3
// TODO 4

console.log(item);   // 기대 : { name: '텀블러', price: 25000, stock: 10, 'is-new': true }


// [2]
const member = { name: '홍길동', grade: 'SILVER' };
member.grdae = 'GOLD';
delete member.age;

console.log(member.grade);   // 예상 :
console.log(member);         // 예상 :
