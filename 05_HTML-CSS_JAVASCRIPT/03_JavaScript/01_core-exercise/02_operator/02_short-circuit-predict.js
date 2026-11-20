/* 문제 02. 단축 평가 결과 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   자바스크립트의 || 와 && 는 true/false 가 아니라 피연산자 중 하나를 그대로 돌려준다.
   각 줄의 결과를 예상해서 적어 보자.

     ||  왼쪽이 Truthy 면 왼쪽, 아니면 오른쪽
     &&  왼쪽이 Falsy 면 왼쪽, 아니면 오른쪽
*/

console.log('apple' || 'banana');    // 예상 :
console.log('' || '기본값');          // 예상 :
console.log(0 || null);              // 예상 :
console.log(null || 0);              // 예상 :
console.log('apple' && 'banana');    // 예상 :
console.log(0 && 'banana');          // 예상 :
console.log('' && 'banana');         // 예상 :
console.log('apple' && null);        // 예상 :
console.log(null && undefined);      // 예상 :
console.log(1 && 2 && 3);            // 예상 :
console.log(0 || '' || '마지막');     // 예상 :
