// [실습용 시작 파일] 1일차 실습 ② 카운터 앱
// TODO를 차례대로 채워 보세요.
//
// 스타일은 준비되어 있다 → ../Counter.module.css
//   사용할 클래스: counter, title, display, positive, negative, info, warning,
//                 buttons, button, primary, steps, step, stepActive
import { useState } from 'react'
import styles from '../Counter.module.css'

export default function CounterStart() {
  // TODO 1. count state를 만든다 (초기값 0)
  //   const [count, setCount] = useState(0)
  const [count, setCount] = useState(0)

  // TODO 2. 버튼 이벤트 핸들러를 만든다
  //   handleIncrease: count + 1
  //   handleDecrease: count - 1
  //   handleReset:    0으로
  //   힌트: 이전 값으로 계산할 때는 setCount(prev => prev + 1)
  function handleIncrease() {
    setCount((prev) => prev + 1)
  }

  function handleDecrease() {
    setCount((prev) => prev - 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div className={styles.counter}>
      <h3 className={styles.title}>🔢 카운터</h3>

      {/* TODO 3. count가 양수면 styles.positive, 음수면 styles.negative 클래스를 추가한다 */}
      <p className={`${styles.display} ${count > 0 ? styles.positive : count < 0 ? styles.negative : ""}`}>{count}</p>

      {/* TODO 4. 짝수/홀수를 표시한다 (count % 2 === 0) */}
      <p className={styles.info}>{count % 2 === 0 ? "짝수" : "홀수"}</p>

      <div className={styles.buttons}>
        {/* TODO 5. 각 버튼에 onClick을 연결한다 */}
        <button className={styles.button} onClick={handleDecrease}>−</button>
        <button className={styles.button} onClick={handleReset}>초기화</button>
        <button className={`${styles.button} ${styles.primary}`} onClick={handleIncrease}>+</button>
      </div>
    </div>
  )
}

// 도전 과제
//   1. 증감 단위(step)를 1 / 5 / 10 중에서 고를 수 있게 하기
//      → step state 추가, [1, 5, 10].map(...)으로 버튼 만들기
//   2. 범위를 -50 ~ 50으로 제한하고, 끝에 닿으면 버튼 disabled + 안내 문구
//   3. 화면을 CounterDisplay / CounterButtons 컴포넌트로 분리하고 props로 연결하기
