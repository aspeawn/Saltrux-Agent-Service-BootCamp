import { useEffect, useState } from 'react'
import EffectLog from '../../components/EffectLog'
import { logEffect } from '../../components/effectLogger'

/**
 *  Cleanup : useEffect가 돌려준 함수
 */
const runningTimers = new Set()
const leakedTimers = new Set()
let nextTimerNo = 1

function LeakyClock() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    // 끝날 때 닫기?
    const no = nextTimerNo++
    const id = setInterval(() => setTime(new Date()), 1000)
    runningTimers.add(id)
    leakedTimers.add(id)
    logEffect(`✕ 타이머 #${no} 시작 — 정리 코드가 없다`)
  }, [])

  return <p className="big-number">{time.toLocaleTimeString()}</p>
}

function Clock() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const no = nextTimerNo++
    const id = setInterval(() => setTime(new Date()), 1000)
    runningTimers.add(id)
    logEffect(`○ 타이머 #${no} 시작`)

    // 응답을 콜백함수
    // -> 정리할 수 있는 코드를 작성할 공간
    return () => {
      clearInterval(id)
      runningTimers.delete(id)
      logEffect(`○ 타이머 #${no} 정리 (cleanup)`)
    }
  }, [])

  return <p className="big-number">{time.toLocaleTimeString()}</p>
}

export default function Cleanup() {
  const [mode, setMode] = useState('leaky')
  const [isOn, setIsOn] = useState(true)
  const [runningCount, setRunningCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRunningCount(runningTimers.size), 300)
    return () => clearInterval(id)
  }, [])

  const expected = isOn ? 1 : 0
  const leaked = runningCount - expected

  function handleForceClear() {
    for (const id of leakedTimers) {
      clearInterval(id)
      runningTimers.delete(id)
    }
    leakedTimers.clear()
    logEffect('🧹 남아 있던 타이머를 강제로 모두 정리 (새로고침한 것과 같은 효과)')
  }

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <span>시계 버전:</span>
          <button className={`btn ${mode === 'leaky' ? 'primary' : ''}`} onClick={() => setMode('leaky')}>
            ✕ cleanup 없음
          </button>
          <button className={`btn ${mode === 'clean' ? 'primary' : ''}`} onClick={() => setMode('clean')}>
            ○ cleanup 있음
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={() => setIsOn(!isOn)}>
            {isOn ? '시계 끄기 (unmount)' : '시계 켜기 (mount)'}
          </button>
        </div>

        {isOn ? (
          mode === 'leaky' ? <LeakyClock key="leaky" /> : <Clock key="clean" />
        ) : (
          <p className="hint">시계가 꺼져 있다 → 시계 컴포넌트가 화면에서 사라진 상태</p>
        )}

        <p style={{ fontSize: 20 }}>
          지금 돌고 있는 타이머: <b className={leaked > 0 ? 'bad' : 'good'}>{runningCount}개</b>
          {leaked > 0 && <span className="bad"> (그중 {leaked}개는 주인 없이 남은 타이머 = 메모리 누수)</span>}
        </p>
        <div>
          <button className="btn" onClick={handleForceClear} disabled={leakedTimers.size === 0}>
            남은 타이머 강제 정리
          </button>
        </div>
      </div>

      <EffectLog />

      <div className="note">
        <h3>이렇게 확인해 보자</h3>
        <ul>
          <li>✕ cleanup 없음 상태에서 [시계 끄기] → [시계 켜기]를 몇 번 반복한다 → 타이머 수가 계속 늘어난다</li>
          <li>시계를 꺼도 타이머 수가 0이 되지 않는다 → 화면에서 사라진 컴포넌트의 타이머가 계속 돈다</li>
          <li>[남은 타이머 강제 정리]를 누른 뒤 ○ cleanup 있음으로 바꿔 같은 실험 → 항상 켜면 1개, 끄면 0개</li>
          <li>남은 타이머는 다른 절로 이동해도 계속 돈다. 새로고침(F5)해야 사라진다 → 실제 앱이라면 계속 쌓인다</li>
        </ul>
      </div>
    </div>
  )
}
