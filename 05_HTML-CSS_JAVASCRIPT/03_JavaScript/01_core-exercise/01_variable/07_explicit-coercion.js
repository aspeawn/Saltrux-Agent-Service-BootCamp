/* 문제 07. Number / parseInt / String / Boolean
   유형 : 출력 예측 | 난이도 : ★★☆

   명시적 타입 변환의 결과를 예상해서 적어 보자.
   특히 Number() 와 parseInt() 의 차이에 주의한다.
*/

console.log(Number('10'));          // 예상 :
console.log(Number('10.5'));        // 예상 :
console.log(Number('10px'));        // 예상 :
console.log(parseInt('10px'));      // 예상 :
console.log(parseInt('10.9'));      // 예상 :
console.log(parseInt('px10'));      // 예상 :
console.log(Number(true));          // 예상 :
console.log(String(123));           // 예상 :
console.log(String(null));          // 예상 :
console.log(Boolean('0'));          // 예상 :
console.log(!!'');                  // 예상 :
console.log(NaN === NaN);           // 예상 :
console.log(Number.isNaN(Number('스물')));   // 예상 :

// 질문. 회원가입 폼에서 나이를 입력받는다. 사용자가 '20abc' 를 입력했을 때
//       잘못된 입력으로 걸러내려면 Number() 와 parseInt() 중 무엇을 써야 할까? 이유는?
// 답 :
