import { createContext, useContext, useState } from 'react'
import { create } from 'zustand'
import RenderBadge from '../../components/RenderBadge'

const DemoContext = createContext(null)

function ContextCount() {
  const { count } = useContext(DemoContext)
  return (
    <div className="box row" style={{ justifyContent: 'space-between' }}>
      <span>count를 쓰는 컴포넌트: {count}</span>
      <RenderBadge />
    </div>
  )
}

function ContextText() {
  const { text } = useContext(DemoContext)
  return (
    <div className="box row" style={{ justifyContent: 'space-between' }}>
      <span>text를 쓰는 컴포넌트: {text || '(비어 있음)'}</span>
      <RenderBadge />
    </div>
  )
}

function ContextSide() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <DemoContext value={{ count, text }}>
      <div className="stack" style={{ flex: 1, minWidth: 280 }}>
        <h3>Context API</h3>
        <div className="row">
          <button className="btn" onClick={() => setCount(count + 1)}>
            count +1
          </button>
          <input className="input" placeholder="text 입력" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <ContextCount />
        <ContextText />
      </div>
    </DemoContext>
  )
}

const useDemoStore = create((set) => ({
  count: 0,
  text: '',
  increase: () => set((state) => ({ count: state.count + 1 })),
  setText: (text) => set({ text }),
}))

function StoreCount() {
  const count = useDemoStore((state) => state.count)
  return (
    <div className="box row" style={{ justifyContent: 'space-between' }}>
      <span>count를 쓰는 컴포넌트: {count}</span>
      <RenderBadge />
    </div>
  )
}

function StoreText() {
  const text = useDemoStore((state) => state.text)
  return (
    <div className="box row" style={{ justifyContent: 'space-between' }}>
      <span>text를 쓰는 컴포넌트: {text || '(비어 있음)'}</span>
      <RenderBadge />
    </div>
  )
}

function StoreSide() {
  const text = useDemoStore((state) => state.text)
  const increase = useDemoStore((state) => state.increase)
  const setText = useDemoStore((state) => state.setText)

  return (
    <div className="stack" style={{ flex: 1, minWidth: 280 }}>
      <h3>Zustand</h3>
      <div className="row">
        <button className="btn" onClick={increase}>
          count +1
        </button>
        <input className="input" placeholder="text 입력" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <StoreCount />
      <StoreText />
    </div>
  )
}

const ROWS = [
  ['설치', '필요 없음 (React 기본 기능)', 'npm install zustand'],
  ['Provider', '필요', '필요 없음'],
  ['state 위치', '컴포넌트 안 (useState)', '컴포넌트 밖 (store)'],
  ['값이 바뀌면', '그 Context를 쓰는 컴포넌트 전부 다시 렌더링', 'selector로 고른 값이 바뀐 컴포넌트만'],
  ['새로고침해도 저장', '직접 구현', 'persist 한 겹'],
  ['잘 맞는 곳', '잘 안 바뀌는 값: 테마, 언어, 로그인 사용자', '자주 바뀌는 값: 장바구니, 필터, 여러 화면이 고치는 데이터'],
]

export default function ContextVsZustand() {
  return (
    <div className="stack">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 140 }} />
            <th>Context API</th>
            <th>Zustand</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([label, context, zustand]) => (
            <tr key={label}>
              <th>{label}</th>
              <td>{context}</td>
              <td>{zustand}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row" style={{ alignItems: 'flex-start' }}>
        <ContextSide />
        <StoreSide />
      </div>

      <div className="note">
        <h3>👉 양쪽 text 칸에 글자를 쳐 보세요</h3>
        <ul>
          <li>Context: text만 바꿨는데 count를 쓰는 컴포넌트도 다시 렌더링된다 (Context 값 전체가 새 객체가 되니까)</li>
          <li>Zustand: text를 쓰는 컴포넌트만 다시 렌더링된다 (selector)</li>
          <li>💡 서버에서 받아 온 데이터는 둘 다 아니다 → TanStack Query</li>
        </ul>
      </div>
    </div>
  )
}
