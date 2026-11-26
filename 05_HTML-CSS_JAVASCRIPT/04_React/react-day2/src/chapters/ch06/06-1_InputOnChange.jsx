import { useState } from 'react'

export default function InputOnChange() {
  const [text, setText] = useState('')
  const [age, setAge] = useState('')
  const [log, setLog] = useState([])

  function handleTextChange(e) {
    setText(e.target.value)
    setLog([e.target.value, ...log].slice(0, 5))
  }

  return (
    <div className="stack">
      <div className="box stack">
        <h3>글자 입력</h3>
        <input className="input" placeholder="입력해 보세요" value={text} onChange={handleTextChange} />
        <p>
          입력값: <b>{text}</b> · 글자 수: {text.length} · 대문자: {text.toUpperCase()}
        </p>
        <div>
          <p className="hint">onChange 발생 기록 (최근 5회)</p>
          <div className="cmd">{log.map((v) => JSON.stringify(v)).join('\n') || ' '}</div>
        </div>
      </div>

      <div className="box stack">
        <h3>숫자 입력 — 값은 문자열로 들어온다</h3>
        <input
          className="input"
          type="number"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>
          typeof e.target.value → <code>{typeof age}</code>
        </p>
        <p>
          {/* 숫자만 입력 받을 수 있고, 상태값을 숫자로 놓아도 => 문자열로 state에 저장됨. */}
          <span className="bad">age + 1 = {age + 1}</span> &nbsp;/&nbsp;
          <span className="good">Number(age) + 1 = {Number(age) + 1}</span>
        </p>
      </div>
    </div>
  )
}
