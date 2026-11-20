/* 문제 05. slice 와 splice 구분하기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자. 원본이 바뀌는지에 주의한다.

   [2] getPage(list, page, size) : 게시글 목록을 페이지 단위로 잘라 반환한다. (slice 사용)
         page 는 1 부터 시작한다. 원본은 바뀌면 안 된다.
         예) 10개 목록, size 3 → 1페이지 [1,2,3], 2페이지 [4,5,6], 4페이지 [10]
*/

// [1]
const langs = ['HTML', 'CSS', 'JS', 'jQuery', 'PHP'];

console.log(langs.slice(1, 3));               // 예상 :
console.log(langs.slice(-2));                 // 예상 :
console.log(langs);                           // 예상 :
console.log(langs.splice(3, 2, 'React'));     // 예상 :
console.log(langs);                           // 예상 :


// [2]
function getPage(list, page, size) {
    // TODO
}
const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPage(posts, 1, 3));   // 기대 : [ 1, 2, 3 ]
console.log(getPage(posts, 2, 3));   // 기대 : [ 4, 5, 6 ]
console.log(getPage(posts, 4, 3));   // 기대 : [ 10 ]
console.log(getPage(posts, 5, 3));   // 기대 : []
console.log(posts.length);           // 기대 : 10   (원본은 그대로)
