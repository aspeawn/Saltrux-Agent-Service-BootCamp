// 🎯 미션 06-4. 배송지 입력 — 여러 입력값을 객체 하나로
// 🧩 패턴 — 객체 state 하나로 여러 입력 관리 (문법: 계산된 속성 이름 [ ])
//
// 목표: 입력창이 4개여도 state 하나 + 핸들러 하나로 관리한다
//
// 순서
//   1. 각 input에 name 속성을 붙인다 → state 객체의 키 이름과 똑같이 (receiver, phone, address, memo)
//   2. 각 input에 value와 onChange를 연결한다 (onChange는 4개 모두 handleChange 하나)
//   3. handleChange 를 완성한다
//      힌트: e.target 에서 name과 value를 꺼낸다
//            → form을 객체 spread로 복사하고, "name에 들어 있는 키"만 value로 덮어쓴다
//            → 변수에 들어 있는 값을 키로 쓰려면 대괄호 [ ] 로 감싼다
//   4. [모두 지우기] 버튼 → 처음 값(initialForm)으로 되돌린다
//
// ✅ 확인: 어느 칸에 입력해도 아래 미리보기의 해당 키만 바뀐다
// 📖 막히면: 06-4 예제
import { useState } from 'react'

const initialForm = { receiver: '', phone: '', address: '', memo: '' }

export default function Mission() {
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    // TODO 3
    const {name, value} = e.target
    console.log(e.target.name, e.target.value)
    setForm({...form, [name]: value})
  }

  return (
    <div>
      <h3>📦 배송지 입력</h3>
      {/* TODO 1~2 */}
      <input name="receiver" placeholder="받는 분" value={form.receiver} onChange={handleChange} />
      <input name="phone" placeholder="연락처" value={form.phone} onChange={handleChange} />
      <br />
      <input name="address" placeholder="주소" value={form.address} onChange={handleChange} size={40} />
      <br />
      <input name="memo" placeholder="배송 메모" value={form.memo} onChange={handleChange} size={40} />
      <br />
      {/* TODO 4 */}
      <button onClick={() => setForm(initialForm)}>모두 지우기</button>

      <article>
        <small>form state</small>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </article>
    </div>
  )
}
