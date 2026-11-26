import { useState } from 'react'

function ColorPicker({ colors, onPick }) {
  return (
    <div className="row">
      {colors.map((color) => (
        <button
          key={color}
          className="btn"
          onClick={() => onPick(color)}
          style={{ width: 36, height: 36, padding: 0, background: color }}
          aria-label={color}
        />
      ))}
    </div>
  )
}

function CommentForm({ onSubmit }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onSubmit(text.trim())
    setText('')
  }

  return (
    <form className="row" onSubmit={handleSubmit}>
      <input className="input" placeholder="댓글 입력" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="btn primary">등록</button>
    </form>
  )
}

export default function ChildToParent() {
  const [bgColor, setBgColor] = useState('#ffffff')
  const [comments, setComments] = useState(['첫 댓글입니다!'])

  function handleAddComment(text) {
    setComments([...comments, text])
  }

  return (
    <div className="stack" style={{ background: bgColor, padding: 16, borderRadius: 12, transition: 'background 0.3s' }}>
      <div className="box">
        <h3>① 자식이 고른 색으로 부모 배경 바꾸기</h3>
        <ColorPicker colors={['#ffffff', '#e6f7ff', '#fff7e6', '#f6ffed', '#f9f0ff']} onPick={setBgColor} />
        <p className="hint" style={{ marginTop: 8 }}>부모 state: bgColor = {bgColor}</p>
      </div>

      <div className="box">
        <h3>② 자식 폼에서 부모 목록에 추가하기 ({comments.length}개)</h3>
        <CommentForm onSubmit={handleAddComment} />
        <ul style={{ marginBottom: 0 }}>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
