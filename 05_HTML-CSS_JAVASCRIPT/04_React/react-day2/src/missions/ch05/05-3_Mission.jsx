// 🎯 미션 05-3. 장보기 목록 — 배열 추가 · 수정 · 삭제
// 🧩 패턴 — 배열 추가 · 수정 · 삭제 (문법: spread, map, filter)
//
// 목표: 추가 · 수정 · 삭제를 모두 "원본을 고치지 않고 새 배열을 만드는 방법"으로 구현한다
//
// 순서
//   1. handleSubmit : 빈 값이면 등록하지 않기 → { id, name, done } 모양의 새 항목을 맨 뒤에 추가 → 입력창 비우기
//                     (id는 다른 항목과 겹치지만 않으면 된다. Date.now() 를 쓰면 편하다)
//   2. handleToggle : 받은 id 항목의 done만 true ↔ false 뒤집기
//   3. handleDelete : 받은 id 항목만 목록에서 빼기
//   4. (도전) [산 것 모두 지우기] 버튼 : done이 true인 항목을 한 번에 삭제
//   5. (도전) [맨 앞에 추가] 버튼 : 새 항목을 맨 앞에 넣기
//
// 힌트 — 어떤 도구를 쓸까?
//   추가 → spread        수정 → map (바꿀 항목만 새 객체로, 나머지는 그대로)        삭제 → filter
//
// ✅ 확인: 추가 · 체크 · 삭제가 바로 화면에 반영된다
// ⚠️ push, splice, items[0].done = true 처럼 원본을 고치는 코드는 쓰지 않기 (05-1)
// 📖 막히면: 05-3 예제
import { useState } from 'react'

export default function Mission() {
  const [name, setName] = useState('')
  const [items, setItems] = useState([
    { id: 1, name: '🥛 우유', done: false },
    { id: 2, name: '🍞 식빵', done: true },
    { id: 3, name: '🥚 달걀', done: false },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    // TODO 1
    setItems([...items, e.target.value])
    setName('')
  }

  function handleToggle(id) {
    // TODO 2
    
    console.log('체크한 id:', id)
  }

  function handleDelete(id) {
    // TODO 3
    console.log('삭제할 id:', id)
  }

  return (
    <div>
      <h3>🛒 장보기 목록 ({items.length})</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="살 것" value={name} onChange={(e) => setName(e.target.value)} />
        <button>추가</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.done} onChange={() => handleToggle(item.id)} />
              {item.done ? <s>{item.name}</s> : item.name}
            </label>
            <button onClick={() => handleDelete(item.id)}>×</button>
          </li>
        ))}
      </ul>
      {items.length === 0 && <small>목록이 비어 있습니다.</small>}

      {/* TODO 4. (도전) 산 것 모두 지우기 */}
    </div>
  )
}
