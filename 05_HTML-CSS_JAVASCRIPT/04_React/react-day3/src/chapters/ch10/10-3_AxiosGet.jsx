import { useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
/**
 * 
 * Axios = 서버 요청을 편하게 해주는 라이브러리
 * 설치 : npm install axios
 * 
 * axios.get('/post', { params : {userid : 1}) -> /post?userid=1
 * fetch 다른점
 *  - 404여도 에러가 안나서 직접 검사하는 코드 작성 if(!res.ok)..
 *  - axios에서는 알아서 에러 발생
 *  - JSON 변환을 직접 / axios에서는 JSON 변환이 자동
 */

export default function AxiosGet() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [message, setMessage] = useState('')

  async function handleLoadUser() {
    try {
      const response = await axios.get(`${BASE_URL}/users/1`)
      console.log('response 전체:', response)
      setUser(response.data)
      setMessage(`✅ ${response.status} — /users/1`)
    } catch (error) {
      setMessage(`❌ ${error.message}`)
    }
  }

  async function handleLoadPosts() {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, { params: { userId: 1 } })
      setPosts(response.data)
      setMessage(`✅ ${response.status} — /posts?userId=1 (${response.data.length}개)`)
    } catch (error) {
      setMessage(`❌ ${error.message}`)
    }
  }

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <button className="btn primary" onClick={handleLoadUser}>
            ① 1번 사용자 불러오기
          </button>
          <button className="btn primary" onClick={handleLoadPosts}>
            ② 1번 사용자의 글 목록 (params)
          </button>
        </div>
        {message && <p className="hint">{message}</p>}
      </div>

      {user && (
        <div className="box">
          <h3>👤 {user.name}</h3>
          <p>
            📧 {user.email} · 🏢 {user.company.name} · 🌐 {user.website}
          </p>
          <p className="hint">response.data 는 이미 객체다 → user.company.name 처럼 바로 꺼내 쓴다</p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="box">
          <h3>📝 글 목록 ({posts.length}개)</h3>
          <ol>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>F12 콘솔: response 객체를 펼쳐 보면 data · status · headers · config 가 들어 있다. 우리가 쓰는 건 거의 data뿐</li>
          <li>Network 탭: ②의 Request URL 끝에 ?userId=1 이 자동으로 붙어 있다</li>
        </ul>
      </div>
    </div>
  )
}
