/* 문제 03. 날짜로 정렬하고 기간 계산하기
   유형 : 코드 작성 | 난이도 : ★★★

   [1] sortByLatest(posts) : 게시글을 작성일(createdAt) 최신순으로 정렬한 새 배열을 반환한다.
         Date 객체끼리 빼면 밀리초 차이가 숫자로 나온다는 점을 이용한다.

   [2] daysBetween(start, end) : 두 날짜 문자열 사이가 며칠인지 반환한다.
         1일 = 1000 * 60 * 60 * 24 밀리초. 결과는 Math.round 로 반올림한다.

   [3] getDday(target, today) : 목표일까지 남은 날을 'D-5' 형태로 반환한다.
         당일이면 'D-Day', 지났으면 'D+3' 형태로 반환한다. (daysBetween 을 활용한다)
*/

// [1]
function sortByLatest(posts) {
    // TODO
}
const posts = [
    { title: '두 번째 글', createdAt: '2026-01-05' },
    { title: '첫 번째 글', createdAt: '2025-03-01' },
    { title: '세 번째 글', createdAt: '2026-07-20' }
];
console.log(sortByLatest(posts)?.map(post => post.title));   // 기대 : [ '세 번째 글', '두 번째 글', '첫 번째 글' ]
console.log(posts[0].title);                                 // 기대 : 두 번째 글   (원본 그대로)


// [2]
function daysBetween(start, end) {
    // TODO
}
console.log(daysBetween('2026-01-01', '2026-01-31'));   // 기대 : 30
console.log(daysBetween('2026-01-01', '2026-12-25'));   // 기대 : 358


// [3]
function getDday(target, today) {
    // TODO
}
console.log(getDday('2026-12-25', '2026-12-20'));   // 기대 : D-5
console.log(getDday('2026-12-25', '2026-12-25'));   // 기대 : D-Day
console.log(getDday('2026-12-25', '2026-12-28'));   // 기대 : D+3
