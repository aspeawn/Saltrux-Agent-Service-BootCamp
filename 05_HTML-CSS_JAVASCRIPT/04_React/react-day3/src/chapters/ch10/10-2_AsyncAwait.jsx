import { useState } from 'react'

function fakeRequest(ms, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error('서버가 응답하지 않습니다'))
      else resolve({ name: '김리액트', level: '🌱 새싹' })
    }, ms)
  })
}

/**
 * await : Promise가 끝날 때까지 이 함수 안에서 기다렸다가 결과를 꺼냄
 * async : 안에서 awiat를 쓰는 함수 앞에 붙이기
 */

export default function AsyncAwait() {
  const [logs, setLogs] = useState([])
  const [clicks, setClicks] = useState(0)

  function addLog(text) {
    const time = new Date().toLocaleTimeString()
    setLogs((prev) => [...prev, `${time}  ${text}`])
  }

  async function handleLoad(shouldFail) {
    addLog('① 요청 보냄 — 1.5초 기다리는 중…')
    try {
      const user = await fakeRequest(1500, shouldFail)
      addLog(`② 응답 도착: ${user.name} (${user.level})`)
    } catch (error) {
      addLog(`② ❌ 실패: ${error.message}`)
    }
    addLog('③ 함수 끝')
  }

  function handleNoAwait() {
    const user = fakeRequest(1500, false)
    addLog(`🐞 await 없이 받은 값: ${String(user)} → user.name = ${user.name}`)
  }

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <button className="btn primary" onClick={() => handleLoad(false)}>
            성공하는 요청
          </button>
          <button className="btn" onClick={() => handleLoad(true)}>
            실패하는 요청
          </button>
          <button className="btn" onClick={handleNoAwait}>
            🐞 await 빼먹기
          </button>
          <button className="btn" onClick={() => setLogs([])}>
            로그 지우기
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => setClicks(clicks + 1)}>
            기다리는 동안 눌러 보기 👆 {clicks}
          </button>
          <span className="hint">← 요청을 기다리는 중에도 화면은 멈추지 않는다</span>
        </div>
        <div className="cmd" style={{ minHeight: 120 }}>
          {logs.length === 0 ? '버튼을 눌러 보세요' : logs.join('\n')}
        </div>
      </div>

      <div className="note">
        <h3>읽는 법</h3>
        <ul>
          <li>await 줄에서 "그 함수만" 잠깐 멈춘다. 브라우저와 다른 버튼은 계속 움직인다</li>
          <li>실패하면 try 안의 나머지는 건너뛰고 catch로 간다. ③은 성공 · 실패 모두 실행된다</li>
          <li>await를 빼먹으면 [object Promise]가 찍히고 .name 은 undefined — 에러 없이 조용히 틀린다</li>
        </ul>
      </div>
    </div>
  )
}
