import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  intro: '',
}

/**
 * 
 * 여러 State를 사용할 때, 객체 형태로 하나의 State로 관리하자
 */
export default function MultipleInputs() {
  const [form, setForm] = useState(initialForm)

  // 모든 입력창이 하나의 핸들러를 사용
  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value }) 
  }

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      <div className="box stack" style={{ flex: 1 }}>
        <h3>회원 정보</h3>
        <input className="input" name="name" placeholder="이름" value={form.name} onChange={handleChange} />
        <input className="input" name="email" placeholder="이메일" value={form.email} onChange={handleChange} />
        <input className="input" name="phone" placeholder="전화번호" value={form.phone} onChange={handleChange} />
        <textarea className="input" name="intro" rows={3} placeholder="자기소개" value={form.intro} onChange={handleChange} />
        <button className="btn" onClick={() => setForm(initialForm)}>
          모두 지우기
        </button>
      </div>

      <div className="box" style={{ flex: 1 }}>
        <h3>form state</h3>
        <div className="cmd">{JSON.stringify(form, null, 2)}</div>
      </div>
    </div>
  )
}
