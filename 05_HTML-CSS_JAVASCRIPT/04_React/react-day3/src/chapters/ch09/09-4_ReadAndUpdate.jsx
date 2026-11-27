import useCartStore from './stores/useCartStore'

const PRODUCTS = [
  { id: 1, name: '☕ 원두 200g', price: 12000 },
  { id: 2, name: '🫖 드립 포트', price: 35000 },
  { id: 3, name: '🥛 오트 우유', price: 3500 },
]

function Header() {
  const items = useCartStore((state) => state.items)
  const totalCount = items.reduce((sum, item) => sum + item.qty, 0)

  // 상태값으로 계산해서 만들수있는 변경는 값은 상태로 만들지 않는다.

  return (
    <div className="box row" style={{ justifyContent: 'space-between' }}>
      <b>☕ 커피 상점</b>
      <span className="badge">🛒 {totalCount}</span>
    </div>
  )
}

function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <div className="box row" style={{ justifyContent: 'space-between' }}>
      <span>
        {product.name} <span className="hint">{product.price.toLocaleString()}원</span>
      </span>
      <button className="btn primary" onClick={() => addItem(product)}>
        담기
      </button>
    </div>
  )
}

function CartPanel() {
  const items = useCartStore((state) => state.items)              // -> Selector
  const changeQty = useCartStore((state) => state.changeQty)      
  const removeItem = useCartStore((state) => state.removeItem)    
  const clear = useCartStore((state) => state.clear)              

  
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="box stack" style={{ flex: 1, minWidth: 260 }}>
      <h3>🛒 장바구니</h3>
      {items.length === 0 && <p className="hint">비어 있습니다</p>}
      {items.map((item) => (
        <div key={item.id} className="row" style={{ justifyContent: 'space-between' }}>
          <span>{item.name}</span>
          <span className="row">
            <button className="btn" onClick={() => changeQty(item.id, -1)}>
              −
            </button>
            {item.qty}
            <button className="btn" onClick={() => changeQty(item.id, 1)}>
              +
            </button>
            <button className="btn" onClick={() => removeItem(item.id)}>
              삭제
            </button>
          </span>
        </div>
      ))}
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <b>합계 {totalPrice.toLocaleString()}원</b>
        <button className="btn" onClick={clear} disabled={items.length === 0}>
          비우기
        </button>
      </div>
    </div>
  )
}

export default function ReadAndUpdate() {
  return (
    <div className="stack">
      <Header />
      <div className="row" style={{ alignItems: 'flex-start' }}>
        <div className="stack" style={{ flex: 1, minWidth: 260 }}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <CartPanel />
      </div>
      <p className="hint">
        👆 Header · ProductCard · CartPanel 셋 다 props로 장바구니를 받지 않는다. 각자 store에서 필요한 것만 꺼낸다
      </p>
    </div>
  )
}
