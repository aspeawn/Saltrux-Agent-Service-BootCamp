import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export default function AxiosWithEffect() {
  const [userId, setUserId] = useState(1)
  const [posts, setPosts] = useState([])
  const [logs, setLogs] = useState([])

  /**
   * 화면이 열릴 때 데이터 가져오기
   * - 서버에서 데이터를 요청보내고 응답받는 것 = Axios (or Fetch)
   * - 화면을 그려주는 것은 useEffect가 한다
   * 
   */
  useEffect(() => {
    const controller = new AbortController()
    /**
     * AbortController
     * - 브라우저에 들어있는 객체
     * - 이미 보낸 요청을 중간에 취소할 때 사용
     */

    async function loadPosts() {
      setLogs((prev) => [...prev, `📤 요청 시작  userId=${userId}`])
      try {
        const response = await axios.get(`${BASE_URL}/posts`, {
          params: { userId },
          // 요청에 붙이는 신호
          signal: controller.signal,
        })
        // 상태 변경 -> 화면 재렌더링
        setPosts(response.data)
        setLogs((prev) => [...prev, `✅ 도착     userId=${userId} (${response.data.length}개)`])
      } catch (error) {
        if (axios.isCancel(error)) {
          setLogs((prev) => [...prev, `🚫 취소됨   userId=${userId} (cleanup)`])
          return
        }
        setLogs((prev) => [...prev, `❌ 실패     ${error.message}`])
      }
    }
    loadPosts()

    return () => controller.abort()
  }, [userId])

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <b>사용자</b>
          {[1, 2, 3, 4, 5].map((id) => (
            <button key={id} className={id === userId ? 'btn primary' : 'btn'} onClick={() => setUserId(id)}>
              {id}
            </button>
          ))}
          <span className="hint">← 빠르게 여러 번 눌러 보세요</span>
        </div>
        <div className="cmd" style={{ maxHeight: 160 }}>
          {logs.join('\n')}
        </div>
      </div>

      <div className="box">
        <h3>
          📝 {userId}번 사용자의 글 ({posts.length}개)
        </h3>
        <ol>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol>
      </div>

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>처음 열었을 때 로그: 요청 시작이 두 번 → 첫 번째는 취소됨 → 도착 1번 (StrictMode가 effect를 한 번 더 실행해 본 것)</li>
          <li>사용자 버튼을 빠르게 누르면 이전 요청들이 "취소됨"으로 바뀌고, 마지막 사용자 결과만 남는다</li>
          <li>아직 빠진 것: 기다리는 동안 "불러오는 중", 실패했을 때 안내 → 10-6</li>
        </ul>
      </div>
    </div>
  )
}
