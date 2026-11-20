/* 문제 08. [종합] 입력값 계산기
   유형 : 코드 작성 | 난이도 : ★★★

   입력창(input)에서 읽은 값은 숫자를 입력해도 언제나 문자열이다.
   두 입력값을 받아 합계를 돌려주는 sum(a, b) 함수를 완성한다.

     1. 두 값을 숫자로 변환한다. ('10px' 같은 값은 잘못된 입력으로 본다)
     2. 둘 중 하나라도 숫자가 아니면 '숫자를 입력하세요' 문자열을 반환한다.
     3. 둘 다 숫자면 합계를 반환한다.
     4. 결과 메시지는 makeMessage(a, b) 에서 템플릿 리터럴로 만든다.
          예) '15 + 7 = 22'
          잘못된 입력이면 '계산할 수 없습니다 : 숫자를 입력하세요'
*/

// 지금은 버그가 있는 상태다. 실행해서 결과를 먼저 확인해 보자
function sum(a, b) {
    const numberA = Number(a);
    const numberB = Number(b);

    // typeof()으로 검증시 NaN도 Number이기 때문에 못거름!!
    if (!Number.isFinite(numberA) || !Number.isFinite(numberB)) {
        return '숫자를 입력하세요';
    }

    return numberA + numberB;
}

function makeMessage(a, b) {
    const result = sum(a, b);

    if (typeof result === 'string') {
        return `계산할 수 없습니다 : ${result}`;
    }

    return `${Number(a)} + ${Number(b)} = ${result}`;
}

console.log(sum('15', '7'));             // 기대 : 22
console.log(sum('3.5', '1.5'));          // 기대 : 5
console.log(sum('10', 'abc'));           // 기대 : 숫자를 입력하세요
console.log(sum('10px', '5'));           // 기대 : 숫자를 입력하세요

console.log(makeMessage('15', '7'));     // 기대 : 15 + 7 = 22
console.log(makeMessage('10', 'abc'));   // 기대 : 계산할 수 없습니다 : 숫자를 입력하세요
