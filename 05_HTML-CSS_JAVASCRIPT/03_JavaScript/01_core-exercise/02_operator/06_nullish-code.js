/* 문제 06. 게시글 정보 표시하기
   유형 : 코드 작성 | 난이도 : ★★☆

   서버에서 받은 게시글 객체로 화면에 보여줄 문자열을 만드는 formatPost(post) 함수를 완성한다.

     - title     : 비어 있거나('') 없으면 '제목 없음'
     - viewCount : 없으면(null, undefined) 0. 단, 0 은 그대로 0 으로 보여준다.
     - likes     : 없으면(null, undefined) 0. 단, 0 은 그대로 0 으로 보여준다.
     - 반환 형식 : '제목 (조회수 N회, 좋아요 N개)'

   어떤 값에 || 를 쓰고 어떤 값에 ?? 를 써야 하는지가 이 문제의 핵심이다.
*/

function formatPost(post) {
    const title = post.title || '제목 없음';
    const viewCount = post.viewCount ?? 0;
    const likes = post.likes ?? 0;

    return `${title} (조회수 ${viewCount}회, 좋아요 ${likes}개)`;
}

console.log(formatPost({ title: '자바스크립트 기초', viewCount: 120, likes: 5 }));
// 기대 : 자바스크립트 기초 (조회수 120회, 좋아요 5개)

console.log(formatPost({ title: '', viewCount: 0, likes: null }));
// 기대 : 제목 없음 (조회수 0회, 좋아요 0개)

console.log(formatPost({ viewCount: 3 }));
// 기대 : 제목 없음 (조회수 3회, 좋아요 0개)
