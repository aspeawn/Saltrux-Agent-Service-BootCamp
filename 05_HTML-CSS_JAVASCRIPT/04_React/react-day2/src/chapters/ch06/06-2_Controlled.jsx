import { useState } from 'react'

/**
 * 제어 컴포넌트
 * - 입력창의 값을 React State가 '제어'하는 방식
 * - value + onChange 조합을 의미
 */

export default function Controlled() {
  const [phone, setPhone] = useState('')
  const [nickname, setNickname] = useState('')

  function handlePhoneChange(e) {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11)
    let formatted = digits
    if (digits.length > 3 && digits.length <= 7) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`  // 하이픈 넣어주기
    } else if (digits.length > 7) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`  // 마지막 하이픈 넣기
    }
    setPhone(formatted)
  }

  return (
    <div className="stack">
      <div className="box stack">
        <h3>입력값 가공: 숫자만 + 자동 하이픈</h3>
        <input
          className="input"
          placeholder="01012345678"
          value={phone}
          onChange={handlePhoneChange}
        />
        <p className="hint">문자를 입력해도 들어가지 않는다. state에 넣기 전에 걸러 내기 때문이다.</p>
      </div>

      <div className="box stack">
        <h3>코드로 값 바꾸기 + 글자 수 제한</h3>
        <input
          className="input"
          placeholder="닉네임 (최대 10자)"
          value={nickname}
          maxLength={10}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div className="row">
          <button className="btn" onClick={() => setNickname('리액트왕')}>
            추천 닉네임 넣기
          </button>
          <button className="btn" onClick={() => setNickname('')}>
            지우기
          </button>
          <span className="hint">{nickname.length} / 10</span>
        </div>
      </div>

      <div className="box stack">
        <h3>✕ onChange 없이 value만 주면?</h3>
        <input className="input" value="입력이 안 됩니다" readOnly />
        <p className="hint">
          React가 Console에 경고를 띄운다. (여기서는 readOnly를 붙여 경고를 막아 두었다)
        </p>
      </div>
    </div>
  )
}
