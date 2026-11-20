/* 문제 02. 섀도잉과 암묵적 전역
   유형 : 출력 예측 + 코드 수정 | 난이도 : ★★☆

   [1] 각 줄의 출력 결과를 예상해서 적어 보자.
   [2] calcTotal 함수는 실행할 때마다 전역에 변수를 만들어 버린다.
         어떤 변수가 새어 나가는지 찾고, 새어 나가지 않도록 고친다.
*/

// [1]
let level = '전역';

function changeLevel() {
    let level = '지역';
    level = '지역 변경';
    console.log(level);   // 예상 :
}

function changeGlobal() {
    level = '전역 변경';
}

changeLevel();
console.log(level);       // 예상 :
changeGlobal();
console.log(level);       // 예상 :


// [2]
function calcTotal(prices) {
    total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}

console.log(calcTotal([1000, 2000, 3000]));   // 6000
console.log(total);   // 고친 뒤에는 ReferenceError 가 나야 한다. (확인 후 이 줄을 주석 처리한다)
