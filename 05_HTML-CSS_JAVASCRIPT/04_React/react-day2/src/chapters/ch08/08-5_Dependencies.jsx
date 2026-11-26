import { useEffect, useState } from 'react'
import EffectLog from '../../components/EffectLog'
import { logEffect } from '../../components/effectLogger'

/**
 * 의존성 배열 : effect 안에서 사용하는 props, states들을 모아놓는 공간
 */
function Watcher({ a, b }) {
  useEffect(() => {
    logEffect('[없음]   매 렌더링마다 실행')
  })

  useEffect(() => {
    logEffect('[ ]      처음 한 번만 실행')
  }, [])

  useEffect(() => {
    logEffect(`[a]      a가 바뀜 → a = ${a}`)
  }, [a])

  useEffect(() => {
    logEffect(`[a, b]   a 또는 b가 바뀜 → a = ${a}, b = ${b}`)
  }, [a, b])

  return null
}

export default function Dependencies() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [other, setOther] = useState(0)

  return (
    <div className="stack">
      <Watcher a={a} b={b} />
      <div className="box">
        <div className="row">
          <button className="btn primary" onClick={() => setA(a + 1)}>
            a + 1 (지금 {a})
          </button>
          <button className="btn primary" onClick={() => setB(b + 1)}>
            b + 1 (지금 {b})
          </button>
          <button className="btn" onClick={() => setOther(other + 1)}>
            상관없는 state + 1 (지금 {other})
          </button>
        </div>
        <p className="hint" style={{ marginTop: 8 }}>
          버튼마다 어떤 effect가 실행되는지 아래 기록으로 확인하세요. (처음 기록이 두 번씩인 것은 StrictMode 때문)
        </p>
      </div>
      <EffectLog />
      <table className="table">
        <thead>
          <tr>
            <th>버튼</th>
            <th>[없음]</th>
            <th>[ ]</th>
            <th>[a]</th>
            <th>[a, b]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a + 1</td>
            <td>○</td>
            <td>✕</td>
            <td>○</td>
            <td>○</td>
          </tr>
          <tr>
            <td>b + 1</td>
            <td>○</td>
            <td>✕</td>
            <td>✕</td>
            <td>○</td>
          </tr>
          <tr>
            <td>상관없는 state</td>
            <td>○</td>
            <td>✕</td>
            <td>✕</td>
            <td>✕</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
