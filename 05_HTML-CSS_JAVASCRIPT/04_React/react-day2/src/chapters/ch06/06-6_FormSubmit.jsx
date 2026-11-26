import { useState } from 'react'

export default function FormSubmit() {
  const [form, setForm] = useState({ title: '', content: '' })
  const [posts, setPosts] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(e) {
    // form의 기본동작때문에 submit 되었을 경우 해당 페이지를 새로고침한다.
    // 새로고침이되면 리렌더링이되면서 상태값이 초기화된다.
    e.preventDefault()
    if (!form.title.trim()) return
    setPosts([{ id: Date.now(), ...form }, ...posts])
    setForm({ title: '', content: '' })
  }

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      <form className="box stack" style={{ flex: 1 }} onSubmit={handleSubmit}>
        <h3>방명록 쓰기</h3>
        <input
          className="input"
          name="title"
          placeholder="제목 (Enter로도 제출)"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          className="input"
          name="content"
          rows={3}
          placeholder="내용"
          value={form.content}
          onChange={handleChange}
        />
        <div className="row">
          <button className="btn primary">등록 (submit)</button>
          <button type="button" className="btn" onClick={() => setForm({ title: '', content: '' })}>
            지우기 (button)
          </button>
        </div>
      </form>

      <div className="box" style={{ flex: 1 }}>
        <h3>등록된 글 {posts.length}개</h3>
        {posts.length === 0 && <p className="hint">아직 글이 없습니다.</p>}
        {posts.map((post) => (
          <div key={post.id} style={{ borderTop: '1px solid var(--line)', padding: '8px 0' }}>
            <b>{post.title}</b>
            <p className="hint">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
