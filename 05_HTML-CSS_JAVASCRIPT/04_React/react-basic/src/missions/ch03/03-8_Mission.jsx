// 미션 03-8. 누가 다시 그려질까? — 렌더링과 스냅샷
//
// 목표: 콘솔 로그로 리렌더링 범위와 State Snapshot 을 눈으로 확인한다.
//
// 순서
//   1. Mission 과 Child 함수 맨 위에 각각 로그를 넣는다.
//        console.log('[부모] Mission 렌더링')
//        console.log('[자식] Child 렌더링')
//   2. F12 콘솔을 열고 [+1] 을 눌러 본다
//      → 부모(Mission)뿐 아니라 자식(Child)도 다시 실행된다!
//   3. handleSnapshot 함수 안에 아래 두 줄을 차례로 쓰고 [스냅샷 실험] 을 눌러 본다.
//        setCount(count + 1)
//        console.log('방금 바꾼 뒤의 count:', count)
//      → 콘솔에는 바뀌기 "전" 값이 찍힌다!
//
// 확인: 콘솔의 count 와 화면의 count 가 1 차이 난다 = State Snapshot
// ※ 개발 모드(StrictMode)에서는 렌더링 로그가 두 번씩 찍힌다. 정상이다.
import { useState } from 'react'

function Child() {
  // TODO 1. 로그 넣기
  return <p>나는 자식 컴포넌트 (props도 state도 없음)</p>
}

export default function Mission() {
  // TODO 1. 로그 넣기
  const [count, setCount] = useState(0)

  function handleSnapshot() {
    // TODO 3
  }

  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={handleSnapshot}>스냅샷 실험</button>
      <Child />
    </div>
  )
}
