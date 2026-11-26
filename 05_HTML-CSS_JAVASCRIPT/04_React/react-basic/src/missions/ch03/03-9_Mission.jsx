// 미션 03-9. 농구 점수판 — 함수형 상태 업데이트
//
// 목표: "이전 값으로 계산할 때" 왜 prev => 를 써야 하는지 직접 확인한다.
//
// 순서
//   1. handleWrongThree : setScore(score + 1) 을 3번 연달아 쓴다
//   2. handleRightThree : setScore((prev) => prev + 1) 을 3번 연달아 쓴다
//   3. 두 버튼을 번갈아 눌러 보고 몇 점씩 오르는지 비교한다
//   4. [초기화] 버튼: setScore(0)
//   5. 응원 토글: const [cheer, setCheer] = useState(false) 를 만들고
//        버튼을 누르면 setCheer((prev) => !prev)
//        cheer 가 true 이면 점수 옆에 '(응원 중!)' 을 붙인다  {cheer ? '(응원 중!)' : ''}
//
// 확인: 틀린 3점슛은 1점, 맞는 3점슛은 3점씩 오른다.
//    0 → setScore(0 + 1) × 3 = 1        vs        0 → 1 → 2 → 3
import { useState } from 'react'

export default function Mission() {
  const [score, setScore] = useState(0)
  // TODO 5. cheer state

  function handleWrongThree() {
    // TODO 1
  }

  function handleRightThree() {
    // TODO 2
  }

  return (
    <div>
      <h3>점수: {score}</h3>

      <button onClick={handleWrongThree}>틀린 3점슛 (score + 1 × 3)</button>
      <button onClick={handleRightThree}>맞는 3점슛 (prev =&gt; prev + 1 × 3)</button>

      {/* TODO 4. 초기화 버튼 */}

      {/* TODO 5. 응원 토글 버튼 */}
    </div>
  )
}
