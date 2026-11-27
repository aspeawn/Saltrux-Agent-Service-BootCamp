// 🎯 미션 10-4. 글 등록하기 — POST
// 📘 문법 — axios.post, 201 Created
//
// 목표: 제목을 입력하고 [등록]하면 서버에 POST로 보내고, 서버가 돌려준 글을 아래 목록에 추가한다
//   주소: BASE_URL + '/posts'     보낼 데이터: { title, body, userId: 1 }  (body는 아무 글이나)
//   응답: 상태 코드 201 · 보낸 데이터에 id가 붙어서 온다
//
// 순서
//   1. 빈 제목(공백만 있는 것도)이면 보내지 않는다
//   2. axios.post 로 보내고 await 로 기다린다 (주소, 보낼 데이터 순서로 넘긴다)
//   3. 응답의 상태 코드를 status state에 넣는다 → 화면에 "마지막 응답: 201" 이 보이게
//   4. 응답 데이터(서버가 만든 글)를 posts 배열 맨 앞에 추가하고, 입력창을 비운다
//      ⚠️ JSONPlaceholder는 가짜 서버라 id가 매번 101로 온다
//         → 목록에 넣을 때 id만 Date.now() 로 바꿔서 넣자 (그래야 key가 겹치지 않는다)
//   5. (도전) 보내는 동안 버튼을 disabled 로 하고, 글자를 "등록 중…" 으로 바꾼다
//
// ✅ 확인: 등록할 때마다 목록 맨 위에 글이 생기고, Network 탭에 POST /posts (201) 가 보인다. Payload에 보낸 데이터가 있다
// 💡 가짜 서버라 새로고침하면 사라진다. 진짜 서버라면 다시 GET 해도 남아 있다
// 📖 막히면: 10-4 예제
import { useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export default function Mission() {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(null)
  const [posts, setPosts] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    // TODO 1~4
    console.log('보낼 제목:', title)
  }

  return (
    <div>
      <h3>📝 글 등록</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />{' '}
        <button>등록</button>
      </form>
      <p>
        <small>마지막 응답: {status ?? '-'}</small>
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
