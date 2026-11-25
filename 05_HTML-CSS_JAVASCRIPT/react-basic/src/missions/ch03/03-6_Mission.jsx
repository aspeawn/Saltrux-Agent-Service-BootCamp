// 미션 03-6. 일반 변수 vs State
//
// 목표: 일반 변수로는 화면이 안 바뀌는 것을 직접 확인하고, useState로 고친다.
//
// 순서
//   1. [일반 변수 +1] 버튼을 여러 번 눌러 본다. (이미 작성됨)
//      → F12 콘솔 숫자는 올라가는데 화면은 0 그대로!   (이유 ①: React가 모른다)
//   2. 그 아래에 State 버전을 직접 만든다.
//        import { useState } from 'react'      ← 맨 위에 추가
//        const [count, setCount] = useState(0)  ← 컴포넌트 맨 위에
//        <p>State: {count}</p>
//        <button onClick={() => setCount(count + 1)}>State +1</button>
//   3. [일반 변수 +1] 을 3번 → [State +1] 을 1번 → 다시 [일반 변수 +1] 을 눌러 본다.
//      → 콘솔 숫자가 1부터 다시 시작한다!
//      (이유 ②: 다시 렌더링되면서 let clicks = 0 이 처음부터 다시 실행됨)
//
// 확인: State 쪽만 화면 숫자가 올라간다.

import { useState } from 'react'

export default function Mission() {
  let clicks = 0

  function handleVariableClick() {
    clicks = clicks + 1
    console.log('일반 변수 clicks =', clicks)
  }

  // TODO 2. useState 로 count 를 만드세요
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>일반 변수: {clicks}</p>
      <button onClick={handleVariableClick}>일반 변수 +1</button>

      <hr />

      {/* TODO 2. State 버전을 만드세요 */}
      <p>State: {count}</p>
      <button onClick={() => setCount(count + 1)}>State +1</button>
    </div>
  )
}
