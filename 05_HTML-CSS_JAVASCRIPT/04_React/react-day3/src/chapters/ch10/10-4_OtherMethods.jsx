import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const REQUESTS = [
  {
    label: "POST 등록",
    code: "axios.post('/posts', { title: '새 글', body: '내용', userId: 1 })",
    send: () =>
      axios.post(`${BASE_URL}/posts`, {
        title: "새 글",
        body: "내용",
        userId: 1,
      }),
  },
  {
    label: "PUT 전체 수정",
    code: "axios.put('/posts/1', { id: 1, title: '바꾼 제목', body: '바꾼 내용', userId: 1 })",
    send: () =>
      axios.put(`${BASE_URL}/posts/1`, {
        id: 1,
        title: "바꾼 제목",
        body: "바꾼 내용",
        userId: 1,
      }),
  },
  {
    label: "PATCH 일부 수정",
    code: "axios.patch('/posts/1', { title: '제목만 바꿈' })",
    send: () => axios.patch(`${BASE_URL}/posts/1`, { title: "제목만 바꿈" }),
  },
  {
    label: "DELETE 삭제",
    code: "axios.delete('/posts/1')",
    send: () => axios.delete(`${BASE_URL}/posts/1`),
  },
];

export default function OtherMethods() {
  const [result, setResult] = useState(null);

  async function handleSend(request) {
    setResult({ label: request.label, loading: true });
    try {
      const response = await request.send();
      setResult({
        label: request.label,
        status: response.status,
        data: response.data,
      });
    } catch (error) {
      setResult({ label: request.label, error: error.message });
    }
  }

  return (
    <div className="stack">
      <table className="table">
        <tbody>
          {REQUESTS.map((request) => (
            <tr key={request.label}>
              <td style={{ width: 150 }}>
                <button
                  className="btn primary"
                  onClick={() => handleSend(request)}
                >
                  {request.label}
                </button>
              </td>
              <td>
                <code>{request.code}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {result && (
        <div className="box">
          <h3>{result.label} 응답</h3>
          {result.loading && <p className="hint">요청 중…</p>}
          {result.error && <p className="bad">❌ {result.error}</p>}
          {result.status && (
            <>
              <p>
                상태 코드: <b className="good">{result.status}</b>
              </p>
              <div className="cmd">{JSON.stringify(result.data, null, 2)}</div>
            </>
          )}
        </div>
      )}

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>
            POST 응답의 id는 항상 101 — 가짜 서버가 "101번으로 만들었다"고
            대답만 한다
          </li>
          <li>
            PUT과 PATCH 응답을 비교: PATCH는 보낸 title만 바뀌고 나머지는 원래
            값이 남아 있다
          </li>
          <li>
            Network 탭 → 요청 클릭 → Payload: 우리가 보낸 데이터가 JSON으로 들어
            있다
          </li>
        </ul>
      </div>
    </div>
  );
}
