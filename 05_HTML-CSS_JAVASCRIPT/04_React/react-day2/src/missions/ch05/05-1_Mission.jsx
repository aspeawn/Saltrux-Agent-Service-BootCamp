// 🎯 미션 05-1. 🐞 화면이 안 바뀌는 장바구니
// 💡 개념 + 🧩 패턴 — 불변성 원리 / 새 배열을 만들어 set
//
// 상황: AI에게 "장바구니 만들어 줘"라고 했더니 아래 코드를 줬다.
//       그런데 버튼을 눌러도 화면이 바뀌지 않는다!
//
// 순서
//   1. [바나나 담기]를 눌러 보고, F12 콘솔도 확인한다
//      → 콘솔에는 배열이 길어지는데 화면은 그대로다. 왜 그럴까?
//   2. 🐞 표시가 있는 두 줄을 본다. 원본 배열을 직접 고친 뒤, "같은 배열"을 다시 set 하고 있다
//   3. handleAdd 를 고친다
//      힌트: 원본은 건드리지 않는다. 기존 항목 + 새 항목이 들어 있는 "새 배열"을 만들어 set (spread 문법)
//   4. handleClear 도 고친다
//      힌트: 원본의 길이를 0으로 만들 필요가 없다. 비어 있는 새 배열을 넘기면 된다
//
// ✅ 확인: 담기 · 비우기가 화면에 바로 반영된다
// 💡 React는 Object.is(이전 값, 새 값)로 비교한다. 배열 주소가 같으면 "안 바뀜"으로 본다
// 📖 막히면: 05-1 예제
// 🤖 AI에게 물어볼 때: "버튼을 눌러도 화면이 안 바뀌어. state를 불변성을 지켜서 바꾸고 있는지 확인해 줘"
import { useState } from 'react'

export default function Mission() {
  const [cart, setCart] = useState(['🍎 사과'])

  function handleAdd(item) {
    // item을 직접 바꾸기 때문에 다른 값들이 사라짐
    // cart.push(item) // 🐞
    setCart([...cart, item])
    console.log('cart 실제 내용:', cart)
  }

  function handleClear() {
    cart.length = 0 // 🐞
    // setCart(cart)
    setCart([]);
  }

  return (
    <div>
      <h3>🛒 장바구니 ({cart.length}개)</h3>
      <p>{cart.join(', ') || '비어 있음'}</p>
      <button onClick={() => handleAdd('🍌 바나나')}>바나나 담기</button>
      <button onClick={() => handleAdd('🍇 포도')}>포도 담기</button>
      <button onClick={handleClear}>비우기</button>
    </div>
  )
}
