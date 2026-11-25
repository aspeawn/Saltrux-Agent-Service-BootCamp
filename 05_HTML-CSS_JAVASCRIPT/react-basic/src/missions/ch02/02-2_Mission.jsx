// 미션 02-2. 영화 정보 카드 — { } 안에 JavaScript 쓰기
//
// 목표: movie 객체의 값을 { } 로 꺼내 화면에 보여 준다.
//
// 완성 화면
//   인사이드 아웃 2 (2024)
//   개봉한 지 2년 / 평점 4.5점 → 추천
//   장르: 애니메이션, 가족, 코미디
//   한줄평: "인사이드 아웃 2"는 꼭 보세요!
//
// 순서
//   1. 변수          {movie.title} ({movie.year})
//   2. 계산식        {thisYear - movie.year}
//   3. 삼항 연산자   평점이 4 이상이면 '추천', 아니면 '보통'
//   4. 함수 호출     {movie.genres.join(', ')}
//   5. 템플릿 리터럴 {`"${movie.title}"는 꼭 보세요!`}
//
// 일부러 {movie} 처럼 객체를 통째로 넣어 보자 → 어떤 에러가 날까?

const movie = {
  title: '인사이드 아웃 2',
  year: 2024,
  rating: 4.5,
  genres: ['애니메이션', '가족', '코미디'],
}

const thisYear = new Date().getFullYear()

export default function Mission() {
  return (
    <div>
      {/* TODO 1. 제목과 개봉 연도 */}
      <h3>제목 (연도)</h3>
      {movie.title} ({movie.year})

      {/* TODO 2~3. 개봉한 지 몇 년 / 평점 / 추천 여부 thisYear -> 이미 정의됨*/}
      <p>개봉한 지 {thisYear - movie.year}년 / 평점 {movie.rating}점</p>

      {/* TODO 4. 장르 */}
      <p>{[movie.genres.join(', ')]}</p>

      {/* TODO 5. 한줄평 */}
      "{movie.title}"는 꼭 봐보세요
    </div>
  )
}
