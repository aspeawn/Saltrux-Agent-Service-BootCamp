import { useState } from 'react'
/**
 * 렌더링 : React가 컴포넌트함수를 호출해서 JSX를 얻는 것
 *  - 첫번째 렌더링 : 처음나타날 때
 *  - 리렌더링 : State가 바뀌었을 때 화면을 다사ㅣ그림
 *    -> 다시그리는 컴포넌트와 해당 컴포넌트의 모든 자식이 다시 렌더링됨
 * 
 * 스냅샷
 *  -한 번의 렌더링 안에서 state 값은 고정이 되어있다.
 *  - setCount()보다 alert가 먼저 실행된다기보다는 리렌더링이 alert보다 나중에 된다.
 */

function Child({ label }) {
  console.log(`  └ ${label} 렌더링`)
  return <span className="badge">{label}</span>
}

export default function Rendering() {
  const [count, setCount] = useState(0)
  console.log(`Rendering 컴포넌트 렌더링 (count = ${count})`)

  function handleSnapshot() {
    setCount(count + 1)                         // 상태값 변경 -> 리렌더링
    alert(`setCount 직후 count 값: ${count}`)   // 상태값 출력
  }

  return (
    <div className="stack">
      <div className="note">
        <h3>F12 → Console을 열고 버튼을 눌러 보자</h3>
        <ul>
          <li>버튼을 누를 때마다 부모와 자식 3개가 모두 다시 실행된다</li>
          <li>
            개발 모드의 StrictMode 때문에 로그가 두 번씩 보인다 (배포 빌드에서는 한 번)
          </li>
        </ul>
      </div>

      <div className="box">
        <p className="big-number">{count}</p>
        <div className="row" style={{ marginBottom: 12 }}>
          <Child label="자식 A" />    
          <Child label="자식 B" />
          <Child label="자식 C" />
        </div>
        <div className="row">
          <button className="btn primary" onClick={() => setCount(count + 1)}>
            리렌더링 일으키기 (+1)
          </button>
          <button className="btn" onClick={handleSnapshot}>
            State Snapshot 확인
          </button>
        </div>
      </div>

      <div className="note">
        <h3>정리</h3>
        <ul>
          <li>state 변경 → 컴포넌트 함수 재실행 → 새 JSX → 바뀐 부분만 DOM 반영(01-3)</li>
          <li>setState는 값을 "즉시" 바꾸지 않는다. 다음 렌더링을 "예약"한다</li>
        </ul>
      </div>
    </div>
  )
}
