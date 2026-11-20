/* 문제 03. 호이스팅 - 어디서 오류가 날까?
   유형 : 출력 예측 + 코드 수정 | 난이도 : ★★☆

   [1] 아래 코드의 각 호출이 정상 실행되는지(O), 오류가 나는지(X) 예상해서 적어 보자.
         맨 위 두 줄은 주석을 하나씩 풀어 실행하면서 확인한다.
   [2] 오류가 나는 호출이 정상 동작하도록 코드의 순서를 고친다.
         "함수는 정의한 다음에 호출한다" 원칙대로 전체 코드를 정리한다.
*/

// [1] 주석을 하나씩 풀면서 확인한다.

// console.log(square(4));      // 예상 (O / X) :
// console.log(cube(3));        // 예상 (O / X) :

function square(n) {
    return n * n;
}

const cube = function (n) {
    return n * n * n;
};

console.log(square(5));         // 예상 (O / X) :
console.log(cube(2));           // 예상 (O / X) :

// [2] TODO : 맨 위 두 호출이 정상 동작하도록 코드 순서를 고친다.
