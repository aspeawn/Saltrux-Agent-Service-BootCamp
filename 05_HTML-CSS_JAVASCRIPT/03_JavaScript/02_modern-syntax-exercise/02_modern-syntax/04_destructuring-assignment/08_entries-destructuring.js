/* 문제 08. Object.entries 와 구조 분해
   유형 : 코드 수정 | 난이도 : ★★☆

   아래 코드는 entry[0], entry[1] 로 키와 값을 꺼내고 있다.
   같은 결과가 나오도록 [키, 값] 구조 분해로 바꿔서, 0 과 1 대신 의미 있는 이름이 보이게 한다.
*/

const scores = { math: 90, english: 75, korean: 85 };

// [1]
for (const entry of Object.entries(scores)) {
    console.log(`${entry[0]} : ${entry[1]}점`);
}

// [2]
const query = Object.entries(scores).map(entry => `${entry[0]}=${entry[1]}`).join('&');
console.log(query);    // math=90&english=75&korean=85

// [3]
const passed = Object.fromEntries(Object.entries(scores).filter(entry => entry[1] >= 80));
console.log(passed);   // { math: 90, korean: 85 }

// [4]
const best = Object.entries(scores).toSorted((a, b) => b[1] - a[1])[0];
console.log(`최고 과목 : ${best[0]} (${best[1]}점)`);   // 최고 과목 : math (90점)
