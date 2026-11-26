// 🎯 미션 08-9. 투표 앱 — useCounter Custom Hook 만들기
// 🧩 패턴 — Custom Hook (use로 시작하는 일반 함수)
//
// 상황: 찬성 · 반대 카운터가 똑같은 코드를 두 번씩 반복하고 있다.
//
// 순서
//   1. 이 파일 위쪽에 useCounter 함수를 만든다 (이름은 반드시 use로 시작!)
//        받는 값    : 처음 숫자 (안 넘기면 0)
//        안에서 할 일: useState로 count 만들기 + 증가 · 감소(0 아래로는 안 내려감) · 초기화 함수 만들기
//        돌려주는 값: { count, increase, decrease, reset } 객체
//        힌트: 지금 Mission 안에 있는 "찬성" 쪽 코드를 옮겨 와서, 이름만 일반적인 이름으로 바꾸면 된다
//   2. Mission 안의 useState 두 줄과 함수들을 지우고, useCounter를 두 번 부른다 (찬성용, 반대용)
//   3. JSX의 yesCount, increaseYes … 를 useCounter가 돌려준 객체의 값으로 바꾼다
//   4. [모두 초기화] 는 두 카운터의 초기화 함수를 모두 부르면 된다
//   5. (도전) "기권" 카운터를 추가해 본다 → 몇 줄이면 될까?
//   6. (도전) useCounter를 hooks/useCounter.js 파일로 옮기고 import 해 본다
//
// ✅ 확인: 동작은 똑같고, 찬성 · 반대가 서로 독립적으로 움직인다
// 💡 Custom Hook은 "로직"을 공유하는 것. state는 부를 때마다 따로 생긴다
// 📖 막히면: 08-9 예제 (hooks/useToggle.js, useInput.js)
import { useState } from 'react'

// TODO 1. useCounter

export default function Mission() {
  // TODO 2. 아래를 useCounter 두 줄로
  const [yesCount, setYesCount] = useState(0)
  const [noCount, setNoCount] = useState(0)

  function increaseYes() {
    setYesCount((prev) => prev + 1)
  }
  function decreaseYes() {
    setYesCount((prev) => Math.max(prev - 1, 0))
  }
  function increaseNo() {
    setNoCount((prev) => prev + 1)
  }
  function decreaseNo() {
    setNoCount((prev) => Math.max(prev - 1, 0))
  }
  function resetAll() {
    setYesCount(0)
    setNoCount(0)
  }

  return (
    <div>
      <h3>🗳️ 점심 메뉴 투표: 짜장면?</h3>
      <article>
        👍 찬성 <b>{yesCount}</b>
        <button onClick={increaseYes}>+</button>
        <button onClick={decreaseYes}>-</button>
      </article>
      <article>
        👎 반대 <b>{noCount}</b>
        <button onClick={increaseNo}>+</button>
        <button onClick={decreaseNo}>-</button>
      </article>
      <button onClick={resetAll}>모두 초기화</button>
    </div>
  )
}
