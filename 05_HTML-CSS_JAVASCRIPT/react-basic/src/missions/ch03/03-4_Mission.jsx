// 미션 03-4. 무엇이든 담는 Panel — children
//
// 목표: 틀(제목 + 카드)은 같고 내용만 다른 Panel 컴포넌트를 만든다.
//
// 순서
//   1. Panel 이 { title, children } 을 받게 한다.
//   2. <article> 안에 <h3>{title}</h3> 과 {children} 을 넣는다.
//   3. Mission 에서 Panel 3개를 만들고, 태그 "사이"에 서로 다른 내용을 넣는다.
//        <Panel title="공지">   <p>내일은 9시까지 오세요</p>          </Panel>
//        <Panel title="할 일">  <ul> <li>복습</li> <li>과제</li> </ul> </Panel>
//        <Panel title="투표">  <button>찬성</button> <button>반대</button> </Panel>
//
// 확인: Panel 코드는 하나인데, 카드마다 안에 든 내용이 전부 다르다.

// TODO 1~2
function Panel() {
  return (
    <article>
      <h3>제목</h3>
      <p>여기에 children 이 들어갈 자리</p>
    </article>
  )
}

export default function Mission() {
  return (
    <div >
      {/* TODO 3. Panel 3개를 만들고 태그 사이에 내용을 넣으세요 */}
      <Panel />
    </div>
  )
}
