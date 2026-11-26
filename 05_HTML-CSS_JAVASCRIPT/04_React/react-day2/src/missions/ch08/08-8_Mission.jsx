// 🎯 미션 08-8. 회원가입 폼 — useState 5개를 useReducer 하나로
// 📘 문법 — useReducer (reducer · action · dispatch)
//
// 상황: 아래 회원가입 폼은 잘 동작하지만, state가 5개이고 바꾸는 코드가 여기저기 흩어져 있다.
// 목표: state를 바꾸는 코드를 signupReducer 한 곳으로 모은다.
//
// 순서
//   1. 위쪽 signupReducer의 case 4개를 채운다. case마다 "새 객체"를 return 한다 (05-2)
//        'changed'   : action.field 에 적힌 칸을 action.value 로 바꾸기 (키를 변수로 쓰기 — 06-4)
//        'toggled'   : agree 를 true ↔ false 뒤집기
//        'submitted' : done 을 true 로
//        'reset'     : 처음 상태로 (initialState)
//   2. Mission 안의 useState 5줄을 지우고 useReducer 한 줄로 바꾼다 (import에 useReducer 추가)
//        useReducer(reducer 함수, 초기 state) 는 [state, dispatch] 를 돌려준다
//   3. set 함수를 부르던 곳을 모두 dispatch로 바꾼다. action 모양은 이렇게 정했다
//        { type: 'changed', field: '칸 이름', value: 새 값 }
//        { type: 'toggled' }      { type: 'submitted' }      { type: 'reset' }
//   4. 화면과 canSubmit 에서 쓰던 name, email … 을 state 객체 안의 값으로 바꾼다
//   5. (도전) input에 name 속성을 붙이면 입력칸 3개를 핸들러 하나로 처리할 수 있다 (06-4)
//
// ✅ 확인: 동작은 그대로이고, state를 바꾸는 코드가 signupReducer 한 곳에만 있다
// 💡 dispatch는 "무슨 일이 일어났는지"만 알리고, "state를 어떻게 바꿀지"는 reducer가 정한다
// 📖 막히면: 08-8 예제 (장바구니 reducer)
// 🤖 AI 코드에서 useReducer를 만나면: reducer의 case 목록만 읽어도 이 화면에서 일어나는 일을 알 수 있다
// import { useState } from 'react'
import { useReducer } from 'react'

const initialState = {
  name: '',
  email: '',
  password: '',
  agree: false,
  done: false,
}

// TODO 1. reducer: (현재 state, action) → 새 state
function signupReducer(state, action) {
  switch (action.type) {
    // case 'changed':
    // case 'toggled':
    // case 'submitted':
    // case 'reset':
    case 'changed':
      return { ...state, [action.field]: action.value }
    case 'toggled':
      return { ...state, agree: !state.agree }
    case 'submitted':
      return { ...state, done: true }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function Mission() {
  // TODO 2. 아래 5줄을 useReducer 한 줄로
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [agree, setAgree] = useState(false)
  // const [done, setDone] = useState(false)

  // const canSubmit = name && email && password.length >= 4 && agree
  const [state, dispatch] = useReducer(signupReducer, initialState)

  const canSubmit = state.name && state.email && state.password.length >= 4 && state.agree

  function handleChange(e) {
    const { name, value } = e.target
    dispatch({ type: 'changed', field: name, value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    // setDone(true) // TODO 3
    dispatch({ type: 'submitted' })
  }

  function handleReset() {
        // TODO 3
    // setName('')
    // setEmail('')
    // setPassword('')
    // setAgree(false)
    // setDone(false)
    // TODO 3
    setName('')
    setEmail('')
    setPassword('')
    setAgree(false)
    setDone(false)
  }

  if (state.done) {
    return (
      <article>
        <h3>🎉 {state.name}님, 가입을 환영합니다!</h3>
        <small>{state.email}</small>
        <p>
          <button onClick={handleReset}>다시 쓰기</button>
        </p>
      </article>
    )
  }

  return (
    <div>
      <h3>📝 회원가입</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <input name="name" placeholder="이름" value={state.name} onChange={handleChange} />
        </p>
        <p>
          <input name="email" placeholder="이메일" value={state.email} onChange={handleChange} />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="비밀번호 (4자 이상)"
            value={state.password}
            onChange={handleChange}
          />
        </p>
        <label>
          <input type="checkbox" checked={state.agree} onChange={() => dispatch({ type: 'toggled' })} /> 약관에 동의합니다
        </label>
        <p>
          <button disabled={!canSubmit}>가입하기</button>{' '}
          <button type="button" onClick={handleReset}>
            다시 쓰기
          </button>
        </p>
      </form>
      <article>
        <small>현재 state</small>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </article>
    </div>
  )
}
