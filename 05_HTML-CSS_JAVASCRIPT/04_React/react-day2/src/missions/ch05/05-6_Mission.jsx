// 🎯 미션 05-6. 🐞 합계가 틀린 장바구니
// 🧩 패턴 — 파생 상태: 계산할 수 있으면 state로 만들지 않는다
//
// 상황: AI가 만든 장바구니. 담을 때는 괜찮은데, [빼기]를 누르면 합계가 틀려진다!
//
// 순서
//   1. [빼기]를 몇 번 눌러 보고 "총 개수 · 총 금액"이 틀려지는 것을 확인한다
//   2. 원인을 찾는다: 🐞 표시가 있는 state 두 개는 어디서 갱신되고, 어디서 빠졌을까?
//   3. 빠진 곳에 갱신 코드를 더 넣어서 고치지 말자. 이 두 값은 items만 있으면 "계산"할 수 있다
//      → state에서 빼고, 렌더링할 때 items로 계산하는 일반 변수로 바꾼다
//      힌트: 배열의 값을 하나로 합칠 때는 reduce (어렵다면 forEach로 하나씩 더해도 된다)
//   4. 필요 없어진 useState 줄과 set 함수 호출을 모두 지운다
//
// ✅ 확인: 담기 · 빼기를 아무리 눌러도 합계가 항상 맞다. state는 items 하나만 남는다
// 💡 다른 state로 계산할 수 있는 값은 state가 아니다 (파생 상태)
// 📖 막히면: 05-6 예제
// 🤖 AI에게 물어볼 때: "합계가 틀려. state 중에 다른 state로 계산할 수 있는 값이 있는지 확인해 줘"
import { useState } from 'react'

export default function Mission() {
  const [items, setItems] = useState([
    { id: 1, name: '☕ 아메리카노', price: 4500, qty: 1 },
    { id: 2, name: '🍰 치즈케이크', price: 6500, qty: 1 },
  ])
  const [totalCount, setTotalCount] = useState(2) // 🐞
  const [totalPrice, setTotalPrice] = useState(11000) // 🐞

  function handleAdd(id) {
    const target = items.find((item) => item.id === id)
    setItems(items.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)))
    setTotalCount(totalCount + 1)
    setTotalPrice(totalPrice + target.price)
  }

  function handleRemove(id) {
    setItems(
      items.map((item) => (item.id === id ? { ...item, qty: Math.max(item.qty - 1, 0) } : item)),
    )
  }

  return (
    <div>
      <h3>🧾 주문서</h3>
      {items.map((item) => (
        <article key={item.id}>
          {item.name} × {item.qty} <small>({(item.price * item.qty).toLocaleString()}원)</small>
          <br />
          <button onClick={() => handleAdd(item.id)}>담기</button>
          <button onClick={() => handleRemove(item.id)}>빼기</button>
        </article>
      ))}
      <hr />
      <p>
        총 {totalCount}개 · <b>{totalPrice.toLocaleString()}원</b>
      </p>
    </div>
  )
}
