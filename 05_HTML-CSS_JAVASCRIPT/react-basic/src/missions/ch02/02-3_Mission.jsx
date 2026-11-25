// 미션 02-3. 시간표 만들기 — Fragment
//
// 목표: <td> 두 개를 한 번에 돌려주는 컴포넌트를 Fragment(<> </>)로 만든다.
//
// 완성 화면
//   | 교시  | 주제           |
//   | 1교시 | React 이해하기 |
//   | 2교시 | 개발 환경 구축 |
//   | 3교시 | JSX            |
//
// 순서
//   1. Period1 이 <td>1교시</td> <td>React 이해하기</td> 두 개를 반환하게 한다.
//      → 그냥 나란히 쓰면 에러!  (하나의 부모로 감싸야 한다)
//      → <div> 로 감싸면?  표 모양이 이상해진다 (<tr> 안에 <div>가 들어감)
//      → <> ... </> 로 감싸면 해결!
//   2. Period2 도 같은 방법으로 (2교시 / 개발 환경 구축) 완성하고 두 번째 줄에 넣는다.
//   3. Period3 (3교시 / JSX) 는 처음부터 직접 만들어 세 번째 줄에 넣는다.
//
// 확인: F12 → Elements 에서 <tr> 바로 아래에 <td> 만 있는지 확인한다.

function Period1() {
  // TODO 1. <td>React 이해하기</td> 를 추가하고 <> </> 로 감싸세요
  return (
    <>
      <td>1교시</td>
      <td>React 이해하기</td>
      
    </>
  );
}

function Period2() {
  // TODO 2. 같은 방법으로 완성하세요
  return (
    <>
      <td>2교시</td>
      <td>개발 환경 구축</td>
    </>
  );
}

// TODO 3. Period3 컴포넌트를 직접 만드세요

export default function Mission() {
  return (
    <table>
      <thead>
        <tr>
          <th>교시</th>
          <th>주제</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Period1 />
        </tr>
        <tr>
          <Period2></Period2>
        </tr>
        <tr>
          <td>3교시</td>
          <td>JSX</td>
        </tr>
        {/* TODO 2~3. 두 번째, 세 번째 줄을 추가하세요 */}

      </tbody>
    </table>
  );
}
