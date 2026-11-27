import { useState } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const ENDPOINTS = [
  { path: '/users/1', desc: '1번 사용자' },
  { path: '/posts?userId=1', desc: '1번 사용자가 쓴 글 목록' },
  { path: '/todos/5', desc: '5번 할 일' },
  { path: '/posts/1/comments', desc: '1번 글의 댓글' },
  { path: '/posts/999', desc: '없는 글 → 404' },
]

const STATUS_CODES = [
  ['200', 'OK', '성공'],
  ['201', 'Created', '등록 성공 (POST)'],
  ['400', 'Bad Request', '보낸 데이터가 잘못됨'],
  ['401 / 403', 'Unauthorized / Forbidden', '로그인 안 함 / 권한 없음'],
  ['404', 'Not Found', '그런 주소 · 데이터가 없음'],
  ['500', 'Internal Server Error', '서버 쪽 문제'],
]

export default function HttpRest() {
  const [path, setPath] = useState(ENDPOINTS[0].path)
  const [result, setResult] = useState(null)

  async function handleSend() {
    setResult({ loading: true })
    const start = performance.now()
    try {
      const response = await fetch(BASE_URL + path)
      const data = await response.json()
      setResult({ status: response.status, ok: response.ok, ms: Math.round(performance.now() - start), data })
    } catch (error) {
      setResult({ failed: true, message: error.message })
    }
  }

  return (
    <div className="stack">
      <div className="box stack">
        <h3>📡 요청 해 보기 (F12 → Network 탭을 열어 두세요)</h3>
        <div className="row">
          <span className="badge">GET</span>
          <select className="input" value={path} onChange={(e) => setPath(e.target.value)}>
            {ENDPOINTS.map((item) => (
              <option key={item.path} value={item.path}>
                {item.path} — {item.desc}
              </option>
            ))}
          </select>
          <button className="btn primary" onClick={handleSend}>
            보내기
          </button>
        </div>
        <p className="hint">요청 주소: {BASE_URL + path}</p>

        {result?.loading && <p className="hint">요청 중…</p>}
        {result?.failed && <p className="bad">❌ 요청 실패 (인터넷 연결을 확인하세요): {result.message}</p>}
        {result?.status && (
          <>
            <p>
              응답 상태 코드:{' '}
              <b className={result.ok ? 'good' : 'bad'}>
                {result.status} {result.ok ? '성공' : '실패'}
              </b>{' '}
              <span className="hint">({result.ms}ms)</span>
            </p>
            <div className="cmd" style={{ maxHeight: 260 }}>
              {JSON.stringify(result.data, null, 2)}
            </div>
          </>
        )}
      </div>

      <div className="box">
        <h3>자주 보는 상태 코드</h3>
        <table className="table">
          <tbody>
            {STATUS_CODES.map(([code, name, meaning]) => (
              <tr key={code}>
                <th style={{ width: 100 }}>{code}</th>
                <td style={{ width: 220 }}>{name}</td>
                <td>{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="hint" style={{ marginTop: 8 }}>2xx 성공 · 4xx 요청한 쪽(프런트) 문제 · 5xx 서버 문제 — 앞자리만 봐도 어디를 볼지 정해진다</p>
      </div>

      <div className="note">
        <h3>👉 Network 탭에서 볼 것</h3>
        <ul>
          <li>Name 줄을 클릭 → Headers: Request URL · Request Method · Status Code</li>
          <li>Preview / Response: 서버가 보낸 JSON 그대로</li>
          <li>/posts/999 를 보내 보면 빨간 줄(404)이 생긴다</li>
        </ul>
      </div>
    </div>
  )
}
