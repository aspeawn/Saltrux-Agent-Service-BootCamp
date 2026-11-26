import { useState } from 'react'

function MutateList() {
  const [items, setItems] = useState(['🍎'])

  function handleAdd() {
    items.push('🍌')  // 기존 배열에 push
    setItems(items)   // items 상태값 업데이틉
    console.log('items 실제 내용:', items)
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="bad">✕ push 후 같은 배열을 set</h3>
      <p style={{ fontSize: 28, minHeight: 44 }}>{items.join(' ')}</p>
      <button className="btn" onClick={handleAdd}>
        바나나 추가
      </button>
      <p className="hint">화면이 안 바뀐다. Console에는 배열이 길어지는 게 보인다.</p>
    </div>
  )
}

function ImmutableList() {
  const [items, setItems] = useState(['🍎'])  // State

  function handleAdd() {

    // 기존 배열을 스프레드하고, 새로운 거 추가한 새로운 배열을 만들어 변경함
    setItems([...items, '🍌'])
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="good">○ 새 배열을 만들어 set</h3>
      <p style={{ fontSize: 28, minHeight: 44 }}>{items.join(' ')}</p>
      <button className="btn primary" onClick={handleAdd}>
        바나나 추가
      </button>
      <p className="hint">[...items, &apos;🍌&apos;] → 기존 배열은 그대로, 새 배열 생성</p>
    </div>
  )
}

export default function Immutability() {
  const a = [1, 2]
  const b = a
  const c = [...a]

  return (
    <div className="stack">
      <div className="row" style={{ alignItems: 'stretch' }}>
        <MutateList />
        <ImmutableList />
      </div>

      <div className="box">
        <h3>참조(주소) 비교 실험</h3>
        <div className="cmd">{`const a = [1, 2]
const b = a        // 같은 배열을 가리킨다
const c = [...a]   // 내용은 같지만 새 배열

Object.is(a, b)  →  ${Object.is(a, b)}
Object.is(a, c)  →  ${Object.is(a, c)}`}</div>
      </div>

      <div className="note">
        <h3>왜 불변성을 지킬까?</h3>
        <ul>
          <li>React가 변경을 빠르게 감지한다 (주소만 비교하면 끝)</li>
          <li>이전 상태가 보존된다 → 되돌리기(undo), 비교, 디버깅이 쉽다</li>
          <li>AI가 만든 코드에서 "화면이 안 바뀌는" 버그의 대표 원인이다 → 가장 먼저 의심할 곳</li>
        </ul>
      </div>
    </div>
  )
}
