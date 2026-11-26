import { useEffect, useState } from 'react'

function BadFullName() {
  const [first, setFirst] = useState('리액트')
  const [last, setLast] = useState('김')
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    setFullName(last + first)
  }, [first, last])

  return <NameForm title="✕ useEffect + state" titleClass="bad" first={first} last={last} setFirst={setFirst} setLast={setLast} fullName={fullName} />
}

function GoodFullName() {
  const [first, setFirst] = useState('리액트')
  const [last, setLast] = useState('김')
  const fullName = last + first

  return <NameForm title="○ 그냥 계산" titleClass="good" first={first} last={last} setFirst={setFirst} setLast={setLast} fullName={fullName} />
}

function NameForm({ title, titleClass, first, last, setFirst, setLast, fullName }) {
  return (
    <div className="box stack" style={{ flex: 1 }}>
      <h3 className={titleClass}>{title}</h3>
      <div className="row">
        <input className="input" style={{ width: 70 }} value={last} onChange={(e) => setLast(e.target.value)} />
        <input className="input" style={{ width: 120 }} value={first} onChange={(e) => setFirst(e.target.value)} />
      </div>
      <p>
        전체 이름: <b>{fullName}</b>
      </p>
    </div>
  )
}

export default function NoEffectNeeded() {
  return (
    <div className="stack">
      <div className="row" style={{ alignItems: 'stretch' }}>
        <BadFullName />
        <GoodFullName />
      </div>
      <p className="hint">결과는 같아 보이지만 왼쪽은 state가 하나 더 있고, 입력할 때마다 렌더링이 두 번 일어난다.</p>

      <div className="row" style={{ alignItems: 'stretch' }}>
        <div className="box" style={{ flex: 1 }}>
          <h3>② 클릭에 대한 반응 → 이벤트 핸들러</h3>
          <div className="cmd">{`// ✕ state가 바뀐 걸 effect가 보고 반응
useEffect(() => {
  if (isSubmitted) alert('주문 완료!')
}, [isSubmitted])

// ○ 원인이 된 이벤트에서 바로 처리
function handleSubmit() {
  submitOrder()
  alert('주문 완료!')
}`}</div>
        </div>
        <div className="box" style={{ flex: 1 }}>
          <h3>③ props 변경 시 state 초기화 → key</h3>
          <div className="cmd">{`// ✕ userId가 바뀌면 댓글 입력창 비우기
useEffect(() => {
  setComment('')
}, [userId])

// ○ 부모에서 key를 바꾸면 컴포넌트가 새로 만들어진다
<Profile key={userId} userId={userId} />`}</div>
        </div>
      </div>

      <div className="note">
        <h3>effect를 쓰기 전에 스스로 묻기</h3>
        <ul>
          <li>이 코드는 &quot;화면에 보였기 때문에&quot; 실행돼야 하나? → effect</li>
          <li>&quot;사용자가 무언가를 했기 때문에&quot; 실행돼야 하나? → 이벤트 핸들러</li>
          <li>값을 &quot;계산&quot;하는 것뿐인가? → 렌더링 중에 계산</li>
        </ul>
      </div>
    </div>
  )
}
