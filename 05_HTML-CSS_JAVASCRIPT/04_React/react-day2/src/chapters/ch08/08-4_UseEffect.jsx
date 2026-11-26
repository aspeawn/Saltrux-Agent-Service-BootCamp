import { useEffect, useState } from 'react'
import EffectLog from '../../components/EffectLog'
import { logEffect } from '../../components/effectLogger'

/**
 * useEffect : 컴포넌트를 'React' 바깥의 시스템과 동기화하는 훅
 * -> 브라우저 탭, 제목, 타이머, window 이벤트, localstorage, 서버
 * 
 * 문법
 * useEffect(() => {
 *    // 화면이 그려진 뒤에 실행할 코드
 *    
 * return () => { ... } // 정리할 코드
 * }, [의존성])
 */
export default function UseEffect() {
  const [count, setCount] = useState(0)

  console.log(`① 렌더링 (count = ${count})`)

  // 화면을 그린다음에, count가 지난번과 달라졌으면 함수를 실행 해줘 (처음 렌더링도 마찬가지)
  // 의존성배열
  // [count]    : 해당 + count가 바뀔 때 마다
  // []         : 처음 한번만 동작
  // 안쓴다      : 렌더링이 될 때마다.
  useEffect(() => {
    logEffect(`② effect 실행: document.title = "클릭 ${count}회"`)
    document.title = `클릭 ${count}회`
  }, [count])

  return (
    <div className="stack">
      <div className="box stack">
        <h3>브라우저 탭 제목을 count와 동기화</h3>
        <p className="big-number">{count}</p>
        <div className="row">
          <button className="btn primary" onClick={() => setCount(count + 1)}>
            클릭
          </button>
          <span className="hint">👆 누르고 브라우저 탭 제목을 보세요</span>
        </div>
      </div>
      <EffectLog />
      <div className="note">
        <h3>effect에 들어갈 코드 vs 들어가면 안 될 코드</h3>
        <ul>
          <li>○ 렌더링 결과를 바깥 세계에 반영: 탭 제목, 타이머 시작, 이벤트 구독, 데이터 요청</li>
          <li>✕ 다른 state로 계산할 수 있는 값 만들기 → 그냥 계산한다 (08-7)</li>
          <li>✕ 버튼 클릭에 대한 반응 → 이벤트 핸들러에 쓴다 (08-7)</li>
        </ul>
      </div>
    </div>
  )
}
