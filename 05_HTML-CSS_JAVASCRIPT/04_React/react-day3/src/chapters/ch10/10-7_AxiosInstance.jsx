import { useState } from 'react'
import client from './api/client'
import useApiLogStore from './api/useApiLogStore'

const REQUESTS = [
  { label: 'GET /posts/1', send: () => client.get('/posts/1') },
  { label: 'GET /posts/999 (없는 글)', send: () => client.get('/posts/999') },
  { label: 'POST /posts', send: () => client.post('/posts', { title: '새 글', body: '내용', userId: 1 }) },
]

export default function AxiosInstance() {
  const [message, setMessage] = useState('')
  const token = useApiLogStore((state) => state.token)
  const setToken = useApiLogStore((state) => state.setToken)
  const logs = useApiLogStore((state) => state.logs)
  const clearLogs = useApiLogStore((state) => state.clearLogs)

  async function handleSend(request) {
    try {
      const response = await request.send()
      setMessage(`✅ ${response.status} · ${response.data.title}`)
    } catch (err) {
      setMessage(`❌ ${err.userMessage}`)
    }
  }

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          {REQUESTS.map((request) => (
            <button key={request.label} className="btn primary" onClick={() => handleSend(request)}>
              {request.label}
            </button>
          ))}
        </div>
        <label className="row">
          <input
            type="checkbox"
            checked={token !== null}
            onChange={(e) => setToken(e.target.checked ? 'demo-token-123' : null)}
          />
          로그인했다고 치기 (토큰: demo-token-123)
        </label>
        {message && <p>{message}</p>}
      </div>

      <div className="box stack">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h3>🧾 인터셉터가 남긴 로그</h3>
          <button className="btn" onClick={clearLogs}>
            지우기
          </button>
        </div>
        <div className="cmd" style={{ minHeight: 120 }}>
          {logs.length === 0 ? '버튼을 눌러 보세요' : logs.join('\n')}
        </div>
      </div>

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>버튼마다 📤(요청 인터셉터) → ✅ 또는 ❌(응답 인터셉터) 순서로 로그가 쌓인다. 컴포넌트에는 로그 코드가 한 줄도 없다</li>
          <li>/posts/999 → 오류 메시지는 응답 인터셉터가 만든 것. 컴포넌트는 그대로 보여 주기만 한다</li>
          <li>
            체크를 켜고 다시 요청 → F12 Network 탭에서 요청을 클릭하면 Request Headers에 <code>Authorization: Bearer demo-token-123</code>
            이 붙어 있다
          </li>
          <li>코드 보기 탭에서 api/client.js 를 열어 보세요 — 주소 · 토큰 · 오류 처리가 전부 이 파일 하나에 있다</li>
        </ul>
      </div>
    </div>
  )
}
