import { useState } from 'react'

export default function Declarative() {
  const [count, setCount] = useState(0)

  return (
    <div className="stack">
      <div className="box">
        <h3>선언형(React) 카운터</h3>
        <p className={`big-number ${count < 0 ? 'bad' : ''}`}>{count}</p>
        <div className="row">
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button className="btn primary" onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
      </div>

      <div className="box">
        <h3>명령형(순수 JavaScript) 카운터와 비교</h3>
        <p className="hint" style={{ marginBottom: 8 }}>
          같은 기능을 DOM API로 직접 만든 버전이다. 새 탭에서 열고 코드를 비교해 보자.
        </p>
        <a className="btn" href="/vanilla/imperative-counter.html" target="_blank">
          명령형 카운터 열기 ↗
        </a>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>명령형 (Vanilla JS)</th>
            <th>선언형 (React)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>관심사</td>
            <td>어떻게(How) 바꿀까</td>
            <td>무엇을(What) 보여줄까</td>
          </tr>
          <tr>
            <td>DOM 조작</td>
            <td>querySelector, textContent, classList를 직접 호출</td>
            <td>React가 대신 처리</td>
          </tr>
          <tr>
            <td>상태가 늘어나면</td>
            <td>바꿔야 할 곳을 하나하나 기억해야 한다 → 실수 증가</td>
            <td>state만 바꾸면 화면은 자동으로 일치</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
