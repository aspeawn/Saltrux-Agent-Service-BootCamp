// 🎯 미션 08-4. 새 알림 개수를 탭 제목에 — useEffect
// 📘 문법 — useEffect
//
// 목표: React 바깥에 있는 "브라우저 탭 제목"을 state와 맞춘다 (= 외부 시스템과 동기화)
//
// 순서
//   1. import에 useEffect 를 추가한다
//   2. unread가 바뀔 때마다 탭 제목을 바꾸는 effect를 만든다
//      - 탭 제목은 document.title 에 문자열을 넣으면 바뀐다
//      - unread가 1 이상이면 "(3) 새 알림" 처럼, 0이면 "알림 없음"
//      - 의존성 배열에는 effect 안에서 쓰는 state를 넣는다
//   3. effect 안에 console.log 를 넣고, 언제 실행되는지 콘솔로 확인한다
//   4. (도전) [이름 바꾸기] 버튼을 누르면 effect가 실행되는지 확인하고, 이유를 말해 본다 (08-5)
//
// ✅ 확인: [알림 오기]를 누를 때마다 브라우저 탭 제목이 "(3) 새 알림" 처럼 바뀐다
// 💡 렌더링(화면 계산) → 화면 반영 → effect 실행  순서다
// 📖 막히면: 08-4 예제
import { useEffect, useState } from 'react'

export default function Mission() {
  const [unread, setUnread] = useState(0)
  const [name, setName] = useState('리액트')

  // TODO 2~3
  useEffect(() => {
    document.title = unread >= 1 ? `(${unread}) 새 알림` : '알림 없음'
    console.log("언제 실횅되는가")
  }, [unread])  // useEffect의 두번째로 들어간 [unread] -> 의존성 배열 => React가 이 값이 바뀌면 effect 다시 실행

  return (
    <div>
      <h3>🔔 {name}님의 알림: {unread}개</h3>
      <button onClick={() => setUnread(unread + 1)}>알림 오기</button>
      <button onClick={() => setUnread(0)}>모두 읽음</button>
      {/* name은 의존성 배열에 추가되어있지 않아 버튼을 누르면 컴포넌트는 리렌더링 돼지만 effect는 실행되지 않음! */}
      <button onClick={() => setName(name === '리액트' ? '훅스' : '리액트')}>이름 바꾸기</button>
      <p>
        <small>👆 누르고 브라우저 탭 제목을 보세요</small>
      </p>
    </div>
  )
}
