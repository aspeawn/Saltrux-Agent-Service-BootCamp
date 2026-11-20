/* 문제 05. 암묵적 타입 변환 결과 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   자바스크립트 엔진이 알아서 타입을 바꾸는 경우들이다.
   각 줄의 결과를 값과 타입까지 예상해서 적어 보자. (예 : "1020" 문자열)
   힌트 : + 는 문자열이 하나라도 있으면 '연결', 나머지 산술 연산자는 숫자로 바꿔서 계산한다.
          연산은 왼쪽부터 차례대로 진행된다.
*/

console.log(10 + '20');        // 예상 : 1020
console.log('10' - 5);         // 예상 : 5
console.log('3' * '4');        // 예상 : 12
console.log(10 % 'abc');       // 예상 : NaN
console.log('5' + 5 + 5);      // 예상 : 555
console.log(5 + 5 + '5');      // 예상 : 555
console.log(0 == '');          // 예상 : false
console.log(0 === '');         // 예상 : undefined
console.log(0 == false);       // 예상 : true

// 질문. 입력창에서 읽은 값 '10' 에 1 을 더했더니 '101' 이 나왔다. 어떻게 고쳐야 11 이 나올까?
const inputValue = '10';
console.log(inputValue + 1);   // '101'
// TODO : 11 이 나오도록 아래 줄을 고친다.
console.log(Number(inputValue) + 1); // 11
