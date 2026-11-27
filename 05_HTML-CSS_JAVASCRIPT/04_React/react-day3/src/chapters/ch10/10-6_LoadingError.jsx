import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * 서버 데이터의 상태
 * 데이터, 로딩 중, 오류
 */
const BASE_URL = 'https://jsonplaceholder.typicode.com'

function wait(ms, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms)
    signal.addEventListener('abort', () => {
      clearTimeout(timer)

      // axios 전용 에러객체
      reject(new axios.CanceledError())
    })
  })
}

function toMessage(err) {
  if (err.response) {
    if (err.response.status === 404) return '그런 사용자가 없어요 (404)'
    return `서버 오류가 났어요 (${err.response.status})`
  }
  return '서버에 연결할 수 없어요. 인터넷 연결을 확인하세요'
}

export default function LoadingError() {
  const [userId, setUserId] = useState(1)
  const [slow, setSlow] = useState(true)
  const [retryCount, setRetryCount] = useState(0)

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadUser() {
      setIsLoading(true)
      setError(null)
      try {
        if (slow) await wait(1500, controller.signal)
        const response = await axios.get(`${BASE_URL}/users/${userId}`, { signal: controller.signal })
        setUser(response.data)
      } catch (err) {
        if (axios.isCancel(err)) return
        setError(toMessage(err))
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }
    loadUser()

    return () => controller.abort()
  }, [userId, slow, retryCount])

  let content
  // 로딩중
  if (isLoading) {
    content = <p className="hint">⏳ 불러오는 중…</p>
  } // 오류
  else if (error) {
    content = (
      <div className="row">
        <span className="bad">❌ {error}</span>
        <button className="btn" onClick={() => setRetryCount(retryCount + 1)}>
          다시 시도
        </button>
      </div>
    )// 내용 출력
  } else {
    content = (
      <>
        <h3>👤 {user.name}</h3>
        <p>
          📧 {user.email} · 📍 {user.address.city}
        </p>
      </>
    )
  }

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <b>사용자</b>
          {[1, 2, 3, 999].map((id) => (
            <button key={id} className={id === userId ? 'btn primary' : 'btn'} onClick={() => setUserId(id)}>
              {id === 999 ? '999 (없는 사용자)' : id}
            </button>
          ))}
        </div>
        <label className="row">
          <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} />
          느린 인터넷 흉내 (1.5초 기다렸다가 요청)
        </label>
      </div>

      <div className="box" style={{ minHeight: 90 }}>
        {content}
      </div>

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>999를 누르면 404 → "그런 사용자가 없어요". [다시 시도]를 눌러도 같은 결과 (주소가 같으니까)</li>
          <li>
            인터넷 끊김 흉내: F12 → Network 탭 → No throttling 을 <b>Offline</b>으로 바꾸고 [다시 시도] → err.response 가 없는 오류
          </li>
          <li>체크를 끄고 Network 탭에서 <b>Slow 4G</b>를 골라도 로딩 화면을 볼 수 있다 (진짜 느린 인터넷 흉내)</li>
        </ul>
      </div>
    </div>
  )
}
