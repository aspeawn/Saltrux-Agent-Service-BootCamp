import { useState } from 'react'

const initialProducts = [
  { id: 1, name: '키보드', price: 50000, liked: false },
  { id: 2, name: '마우스', price: 30000, liked: true },
  { id: 3, name: '모니터', price: 250000, liked: false },
]

export default function ArrayState() {
  const [products, setProducts] = useState(initialProducts)
  const [name, setName] = useState('')
  const [lastCode, setLastCode] = useState('// 버튼을 누르면 실행된 코드가 여기에 나온다')

  function createProduct() {
    return { id: Date.now(), name: name.trim(), price: 10000, liked: false }
  }

  function handleAddLast() {
    if (!name.trim()) return
    setProducts([...products, createProduct()])
    setName('')
    setLastCode('setProducts([...products, newProduct])  // 추가: 맨 뒤')
  }

  function handleAddFirst() {
    if (!name.trim()) return
    setProducts([createProduct(), ...products])
    setName('')
    setLastCode('setProducts([newProduct, ...products])  // 추가: 맨 앞')
  }

  function handleToggleLike(id) {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product,
      ),
    )
    setLastCode(`setProducts(products.map(p =>
  p.id === ${id} ? { ...p, liked: !p.liked } : p
))  // 수정: 한 항목`)
  }

  function handleSale() {
    setProducts(products.map((product) => ({ ...product, price: Math.round(product.price * 0.9) })))
    setLastCode(`setProducts(products.map(p =>
  ({ ...p, price: p.price * 0.9 })
))  // 수정: 모든 항목`)
  }

  function handleDelete(id) {
    setProducts(products.filter((product) => product.id !== id))
    setLastCode(`setProducts(products.filter(p => p.id !== ${id}))  // 삭제: 한 항목`)
  }

  function handleClearUnliked() {
    setProducts(products.filter((product) => product.liked))
    setLastCode('setProducts(products.filter(p => p.liked))  // 삭제: 조건에 맞는 것 모두')
  }

  function handleReset() {
    setProducts(initialProducts)
    setLastCode('setProducts(initialProducts)  // 원본을 한 번도 고치지 않았으니 되돌릴 수 있다')
  }

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <input
            className="input"
            placeholder="상품 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" onClick={handleAddFirst}>
            맨 앞에 추가
          </button>
          <button className="btn primary" onClick={handleAddLast}>
            맨 뒤에 추가
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>상품</th>
              <th>가격</th>
              <th>찜 (수정)</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString()}원</td>
                <td>
                  <button className="btn" onClick={() => handleToggleLike(product.id)}>
                    {product.liked ? '❤️' : '🤍'}
                  </button>
                </td>
                <td>
                  <button className="btn" onClick={() => handleDelete(product.id)}>
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && <p className="hint">상품이 없습니다.</p>}

        <div className="row">
          <button className="btn" onClick={handleSale}>
            전체 10% 할인 (모두 수정)
          </button>
          <button className="btn" onClick={handleClearUnliked}>
            찜 안 한 상품 모두 삭제
          </button>
          <button className="btn" onClick={handleReset}>
            처음으로
          </button>
        </div>
      </div>

      <div className="box">
        <h3>방금 실행된 코드</h3>
        <div className="cmd">{lastCode}</div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>하고 싶은 일</th>
            <th>✕ 원본을 바꾸는 메서드</th>
            <th>○ 새 배열을 만드는 방법</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>추가</td>
            <td>push, unshift</td>
            <td>[...arr, item], [item, ...arr]</td>
          </tr>
          <tr>
            <td>수정</td>
            <td>arr[i] = x, arr[i].x = y, splice</td>
            <td>map</td>
          </tr>
          <tr>
            <td>삭제</td>
            <td>pop, shift, splice</td>
            <td>filter</td>
          </tr>
          <tr>
            <td>정렬</td>
            <td>sort, reverse</td>
            <td>[...arr].sort(), arr.toSorted()</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
