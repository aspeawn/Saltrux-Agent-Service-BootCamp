import { useState } from 'react'

/**
 * const [state, setState] = useState()
 * const [현재값, 값을 바꾸는 함수(이름규칙 : set+변수명)] = useState(초기값)
 * 
 * Hook : 리엑트의 상태관리나 생명주기같은 핵심 기능을 연결해서 쓸 수 있게 만들어주는 함수
 */
export default function UseState() {
  // 함수형 컴포넌트에서 훅은 항상 최상단에서 호출 (if, for문, 일반함수 안에서 사용하면 X)
  const [count, setCount] = useState(0)
  const [name, setName] = useState('React')
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="stack">
      <div className="box">
        <h3>숫자 state</h3>
        <div className="row">
          <button className="btn" onClick={() => setCount(count - 1)}>
            -
          </button>
          <b style={{ minWidth: 40, textAlign: 'center' }}>{count}</b>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>

      <div className="box">
        <h3>문자열 state</h3>
        <p>
          안녕하세요, <b>{name}</b>!
        </p>
        <div className="row">
          <button className="btn" onClick={() => setName('React')}>
            React
          </button>
          <button className="btn" onClick={() => setName('Vite')}>
            Vite
          </button>
          <button className="btn" onClick={() => setName('JavaScript')}>
            JavaScript
          </button>
        </div>
      </div>

      {/* 
      1. 어떻게 바뀔 것 인가?
      2. 언제 바꿀 것 인가? -> 이벤트 (변경될 상태값)
      */}
      <div
        className="box"
        style={{
          background: isDark ? '#23272f' : '#fff',
          color: isDark ? '#fff' : 'inherit',
        }}
      >
        <h3>불리언 state — 토글</h3>
        <p>현재 모드: {isDark ? '🌙 다크' : '☀️ 라이트'}</p>
        <button className="btn" onClick={() => setIsDark(!isDark)}>
          모드 전환
        </button>
      </div>
    </div>
  )
}
