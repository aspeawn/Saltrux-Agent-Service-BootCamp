/* 문제 01. 스코프 체인 따라가기
   유형 : 출력 예측 | 난이도 : ★★☆

   변수를 참조하면 자기 스코프 → 바깥 스코프 → 전역 스코프 순서로 찾는다.
   각 console.log 의 출력 결과를 예상해서 적어 보자.
   마지막 줄은 주석을 풀면 어떻게 될지도 예상한다.
*/

const a = '전역 a';
const b = '전역 b';

function outer() {
    const b = 'outer b';
    const c = 'outer c';

    function inner() {
        const c = 'inner c';
        console.log(a);   // 예상 :
        console.log(b);   // 예상 :
        console.log(c);   // 예상 :
    }

    inner();
    console.log(c);       // 예상 :
}

outer();
console.log(b);           // 예상 :
// console.log(c);        // 예상 :
