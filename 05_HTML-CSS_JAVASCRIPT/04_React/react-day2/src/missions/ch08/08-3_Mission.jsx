// 🎯 미션 08-3. 채팅 입력창 — useRef로 포커스 주기
// 📘 문법 — useRef, ref 속성
//
// 목표: 메시지를 보낸 뒤 커서가 다시 입력창으로 돌아오게 한다
//
// 순서
//   1. useRef로 ref를 하나 만든다 (import에 useRef 추가, 초기값은 null)
//   2. 그 ref를 input의 ref 속성에 연결한다 → ref.current 에 input 요소가 들어온다
//   3. 메시지를 보낸 뒤(handleSubmit 끝)에 input에 포커스를 준다
//      힌트: input 같은 DOM 요소에는 포커스를 주는 .focus() 메서드가 있다
//   4. 빈 값으로 보내려고 하면 → 보내지 말고 포커스만 준다
//   5. [입력창으로] 버튼 → 누르면 입력창에 포커스
//
// ✅ 확인: Enter로 보내고 바로 이어서 입력할 수 있다 (마우스로 다시 클릭할 필요 없음)
// ⚠️ ref.current 는 이벤트 핸들러 안에서만 쓰자. 렌더링 중(return 위)에는 아직 DOM이 없을 수 있다
// 📖 막히면: 08-3 예제
import { useRef, useState } from 'react'

export default function Mission() {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState(['안녕하세요! 👋'])
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) {
      // TODO 4
      inputRef.current.focus()
      return
    }
    setMessages([...messages, text.trim()])
    setText('')
    // TODO 3
    inputRef.current.focus()
  }

  return (
    <div>
      <h3>💬 채팅</h3>
      <article>
        {messages.map((message, index) => (
          <p key={index}>🗨️ {message}</p>
        ))}
      </article>
      <form onSubmit={handleSubmit}>
        {/* TODO 2 */}
        <input ref={inputRef} placeholder="메시지 입력 후 Enter" value={text} onChange={(e) => setText(e.target.value)} />
        <button>보내기</button>
        {/* TODO 5 */}
        <button type="button" onClick={() => inputRef.current.focus()}>입력창으로</button>
      </form>
    </div>
  )
}
