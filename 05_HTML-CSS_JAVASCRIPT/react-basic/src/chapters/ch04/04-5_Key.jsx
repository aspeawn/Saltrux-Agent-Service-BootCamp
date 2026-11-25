import { useState } from 'react'
/**
 * KEY 규칙
 * - 형제들 사이에서 "고유해야함"
 * - 바뀌지 않아야함 "데이터 id를 사용"
 * - index는 항목이 추가/삭제/정렬되면 바뀜
 * - key는 props로 전달되지 않음
 */

const newFruits = ['🍓 딸기', '🍑 복숭아', '🥝 키위', '🍒 체리', '🍍 파인애플']

function MemoRow({ name }) {
  return (
    <li className="row" style={{ marginBottom: 6 }}>
      <span style={{ width: 100 }}>{name}</span>
      <input className="input" placeholder="메모" />
    </li>
  )
}

export default function Key() {
  const [fruits, setFruits] = useState([
    { id: 1, name: '🍎 사과' },
    { id: 2, name: '🍌 바나나' },
    { id: 3, name: '🍇 포도' },
  ])
  const [nextId, setNextId] = useState(4)

  function handleAddFirst() {
    const name = newFruits[(nextId - 4) % newFruits.length]
    setFruits([{ id: nextId, name }, ...fruits])
    setNextId(nextId + 1)
  }

  return (
    <div className="stack">
      <div className="row">
        <button className="btn primary" onClick={handleAddFirst}>
          맨 앞에 추가
        </button>
        <span className="hint">양쪽 메모칸을 채운 뒤 눌러 보세요.</span>
      </div>

      <div className="row" style={{ alignItems: 'stretch' }}>
        <div className="box" style={{ flex: 1 }}>
          <h3 className="bad">✕ key={'{index}'}</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {/* 반복시켜서 컴포넌트를 만들 때, 1이상부터 시작하는 key를 추가하자 */}
            {fruits.map((fruit, index) => (
              <MemoRow key={index} name={fruit.name} />
              // index를 key로 씀 => 이름만 변경
            ))}
          </ul>
        </div>

        <div className="box" style={{ flex: 1 }}>
          <h3 className="good">○ key={'{fruit.id}'}</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {fruits.map((fruit) => (
              <MemoRow key={fruit.id} name={fruit.name} />
            ))}
          </ul>
        </div>
      </div>

      <div className="note">
        <h3>왜 이런 일이 생길까?</h3>
        <ul>
          <li>
            index를 key로 쓰면 맨 앞에 추가했을 때 기존 "사과"의 key가 0 → 1로 바뀐다
          </li>
          <li>
            React는 key=0인 줄이 그대로 있다고 보고 이름만 바꾼다 → 입력칸(메모)은 그
            자리에 남는다
          </li>
          <li>id를 key로 쓰면 React가 "새 줄이 앞에 생겼다"고 정확히 알아챈다</li>
          <li>
            key를 빼먹으면 Console에 <code>Each child in a list should have a unique "key" prop</code>{' '}
            경고가 뜬다
          </li>
        </ul>
      </div>
    </div>
  )
}
