import { useState } from 'react'

const categories = ['전체', '커피', '음료', '디저트']

const menus = [
  { id: 1, name: '아메리카노', category: '커피', price: 4500, emoji: '☕', soldOut: false },
  { id: 2, name: '카페라테', category: '커피', price: 5000, emoji: '🥛', soldOut: false },
  { id: 3, name: '바닐라라테', category: '커피', price: 5500, emoji: '🍦', soldOut: true },
  { id: 4, name: '레몬에이드', category: '음료', price: 5500, emoji: '🍋', soldOut: false },
  { id: 5, name: '딸기스무디', category: '음료', price: 6000, emoji: '🍓', soldOut: false },
  { id: 6, name: '치즈케이크', category: '디저트', price: 6500, emoji: '🍰', soldOut: false },
  { id: 7, name: '크루아상', category: '디저트', price: 4000, emoji: '🥐', soldOut: true },
]

function formatPrice(price) {
  return price.toLocaleString() + '원'
}

function Panel({ title, children }) {
  return (
    <section className="box" style={{ flex: 1, minWidth: 260 }}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}

function CategoryTabs({ current, onChange }) {
  return (
    <div className="row" style={{ marginBottom: 12 }}>
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${category === current ? 'primary' : ''}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function MenuItem({ menu, isSelected, onSelect }) {
  return (
    <li>
      <button
        className="btn"
        disabled={menu.soldOut}
        onClick={() => onSelect(menu.id)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 6,
          borderColor: isSelected ? 'var(--accent)' : undefined,
          background: isSelected ? 'var(--accent-soft)' : undefined,
        }}
      >
        <span>
          {menu.emoji} {menu.name} {menu.soldOut && <span className="badge">품절</span>}
        </span>
        <span>{formatPrice(menu.price)}</span>
      </button>
    </li>
  )
}

function MenuDetail({ menu }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="stack">
      <div style={{ fontSize: 56 }}>{menu.emoji}</div>
      <div>
        <h3 style={{ fontSize: 20 }}>{menu.name}</h3>
        <p className="hint">
          {menu.category} · {formatPrice(menu.price)}
        </p>
      </div>
      <div className="row">
        <button
          className="btn"
          disabled={quantity <= 1}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          -
        </button>
        <b style={{ minWidth: 32, textAlign: 'center' }}>{quantity}</b>
        <button
          className="btn"
          disabled={quantity >= 10}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
        {quantity >= 10 && <span className="hint">최대 10잔</span>}
      </div>
      <p style={{ fontSize: 18 }}>
        합계 <b>{formatPrice(menu.price * quantity)}</b>
      </p>
    </div>
  )
}

export default function Practice() {
  const [category, setCategory] = useState('전체')
  const [keyword, setKeyword] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  
  const visibleMenus = menus
    .filter((menu) => category === '전체' || menu.category === category)
    .filter((menu) => menu.name.includes(keyword.trim()))

  const selectedMenu = menus.find((menu) => menu.id === selectedId)

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      <Panel title="☕ 메뉴">
        <CategoryTabs current={category} onChange={setCategory} />
        <input
          className="input"
          style={{ width: '100%', marginBottom: 12 }}
          placeholder="메뉴 검색 (예: 라테)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        {visibleMenus.length === 0 ? (
          <p className="hint">검색 결과가 없습니다.</p>
        ) : (
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {visibleMenus.map((menu) => (
              <MenuItem
                key={menu.id}
                menu={menu}
                isSelected={menu.id === selectedId}
                onSelect={setSelectedId}
              />
            ))}
          </ul>
        )}
      </Panel>

      <Panel title="📝 주문">
        {selectedMenu ? (
          <MenuDetail key={selectedMenu.id} menu={selectedMenu} />
        ) : (
          <p className="hint">왼쪽에서 메뉴를 선택하세요.</p>
        )}
      </Panel>
    </div>
  )
}
