/* 문제 05. ?? 와 || 비교
   유형 : 출력 예측 + 코드 수정 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.
         ||  왼쪽이 Falsy 면 오른쪽
         ??  왼쪽이 null 또는 undefined 일 때만 오른쪽

   [2] 재고와 조회수를 표시하는 코드에서 0 이 제대로 나오지 않는다. 고쳐 보자.
*/

// [1]
console.log(0 || 10);              // 예상 :
console.log(0 ?? 10);              // 예상 :
console.log('' || '기본값');        // 예상 :
console.log('' ?? '기본값');        // 예상 :
console.log(null ?? '기본값');      // 예상 :
console.log(undefined ?? '기본값'); // 예상 :
console.log(false || true);        // 예상 :
console.log(false ?? true);        // 예상 :
console.log(NaN ?? 1);             // 예상 :


// [2]
const product = { name: '무선 마우스', stock: 0, viewCount: 0, rating: null };

console.log(`재고 : ${product.stock || '정보 없음'}`);       // 기대 : 재고 : 0
console.log(`조회수 : ${product.viewCount || '-'}회`);       // 기대 : 조회수 : 0회
console.log(`평점 : ${product.rating || '평가 없음'}`);      // 기대 : 평점 : 평가 없음
