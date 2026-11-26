// 미션 02-4. 컴포넌트 3개 만들어 조립하기
//
// 목표: 함수형 컴포넌트를 두 가지 방법으로 선언하고, 태그처럼 사용한다.
//
// 순서
//   1. Title   : 함수 선언문으로    function Title() { ... }
//               → <h3>오늘의 공부</h3> 반환
//   2. Today   : 화살표 함수로      const Today = () => ( ... )
//               → <p>오늘은 {new Date().toLocaleDateString()} 입니다</p> 반환
//   3. Nothing : 아무것도 그리지 않는 컴포넌트 → return null
//   4. Mission 안에서 <Title /> <Today /> <Nothing /> 를 차례로 쓴다.
//   5. <Title /> 을 한 번 더 써서 제목이 두 번 나오게 해 본다.
//
// 일부러 Title 을 title 처럼 소문자로 바꿔 보자 → 화면에 무슨 일이 생길까?
//    (힌트: 소문자 태그는 HTML 태그로 인식된다)

// TODO 1. Title 컴포넌트 (함수 선언문)
function Title() {
  return <h3>오늘의 공부</h3>;
}

// TODO 2. Today 컴포넌트 (화살표 함수)
const Today = () => {
  return <p>{new Date().toLocaleDateString()} 입니다</p>;
};

// TODO 3. Nothing 컴포넌트 (null 반환)
function Nothing() {
  return null;
}

export default function Mission() {
  return (
    <div>
      {/* TODO 4. 만든 컴포넌트를 여기에 쓰세요 */}
      <Title />
      <Today />
      <Nothing />
      <Title />
    </div>
  );
}
