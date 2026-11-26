// 🎯 미션 08-6. 🐞 1초에 2씩 올라가는 타이머 — Cleanup
// 📘 문법 — useEffect cleanup
//
// 상황: AI가 만든 공부 타이머. 이상한 점이 두 가지 있다.
//   ① 1초에 1씩이 아니라 2씩 올라간다
//   ② [타이머 끄기]를 눌러도 콘솔에 '⏱ tick' 이 계속 찍힌다. 껐다 켤 때마다 더 많이 찍힌다!
//
// 순서
//   1. 증상 ①, ②를 직접 확인한다 (F12 콘솔 열기)
//   2. 원인: setInterval로 타이머를 "시작"만 하고 "정리"하지 않는다
//        - 개발 모드의 StrictMode는 effect를 "실행 → 정리 → 다시 실행" 해 본다
//          정리 코드가 없으니 타이머가 2개가 되어 2씩 올라간다 (①)
//        - 컴포넌트가 사라져도 타이머는 계속 돈다 (②, 메모리 누수)
//   3. effect에 정리(cleanup) 코드를 추가한다
//      힌트: - setInterval은 "타이머 번호(id)"를 돌려준다 → 변수에 받아 두자
//            - effect 안에서 "함수를 return" 하면, 그 함수가 정리할 때 실행된다
//            - 타이머를 멈추는 함수는 clearInterval(타이머 번호)
//
// ✅ 확인: 1초에 1씩 올라가고, 끄면 콘솔의 tick도 바로 멈춘다
// ※ 고치기 전에 만들어진 타이머는 계속 돌고 있다 → 고친 뒤 새로고침(F5)하고 확인하자
// 📖 막히면: 08-6 예제
// 🤖 AI에게 물어볼 때: "타이머가 두 배로 빨라지고 꺼도 계속 돌아. useEffect에서 정리하지 않은 게 있는지 확인해 줘"
import { useEffect, useState } from 'react'

function StudyTimer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('⏱ tick')
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <h2>⏱ {seconds}초째 공부 중</h2>
}

export default function Mission() {
  const [isOn, setIsOn] = useState(true)

  return (
    <div>
      <h3>📚 공부 타이머</h3>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? '타이머 끄기' : '타이머 켜기'}</button>
      {isOn ? <StudyTimer /> : <p>타이머가 꺼져 있습니다. 콘솔을 확인해 보세요.</p>}
    </div>
  )
}
