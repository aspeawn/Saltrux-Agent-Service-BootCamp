import { useState } from 'react'
// 단방향으로 데이터 흐름
// 데이터는 항상 부모 -> 아래로만 흐름

function Display({ value }) {
  return <p className="big-number">{value}</p>
}

function Controls({ onIncrease, onReset }) {
  return (
    <div className="row">
      <button className="btn primary" onClick={onIncrease}>
        +1 (부모에게 요청)
      </button>
      <button className="btn" onClick={onReset}>
        초기화
      </button>
    </div>
  )
}

export default function OneWayFlow() {
  const [score, setScore] = useState(0)

  return (
    <div className="box">
      <h3>부모(OneWayFlow)가 score를 가지고 있다</h3>
      <Display value={score} />
      <Controls onIncrease={() => setScore(score + 1)} onReset={() => setScore(0)} />
      <p className="hint" style={{ marginTop: 8 }}>
        Controls는 score를 모른다. 받은 함수만 호출할 뿐이다. 실제 변경은 항상 부모에서
        일어난다.
      </p>
    </div>
  )
}
