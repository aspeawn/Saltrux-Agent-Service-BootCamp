/* 문제 07. 매개변수를 객체로 받기
   유형 : 코드 수정 | 난이도 : ★★☆

   createPost 는 매개변수가 많아서 호출할 때 순서를 외워야 하고,
   중간 값을 건너뛰려면 undefined 를 일부러 넣어야 한다.

   [1] 매개변수 자리에서 객체 구조 분해를 쓰도록 고친다. 기본값은 그대로 유지한다.
         title 에도 기본값 '제목 없음' 을 준다.
   [2] 고친 createPost 를 인수 없이 호출해도 오류가 나지 않게 한다.
*/

function createPost(title, writer = '익명', category = '자유', isPublic = true) {
    return `[${category}] ${title} - ${writer} (${isPublic ? '공개' : '비공개'})`;
}

console.log(createPost('첫 글'));
console.log(createPost('공지', undefined, '공지사항', false));

// 고친 뒤에는 아래처럼 호출한다. 위 두 줄을 지우고 주석을 풀어 확인한다.
// console.log(createPost({ title: '첫 글' }));                                     // 기대 : [자유] 첫 글 - 익명 (공개)
// console.log(createPost({ title: '공지', category: '공지사항', isPublic: false }));  // 기대 : [공지사항] 공지 - 익명 (비공개)
// console.log(createPost());                                                        // 기대 : [자유] 제목 없음 - 익명 (공개)
