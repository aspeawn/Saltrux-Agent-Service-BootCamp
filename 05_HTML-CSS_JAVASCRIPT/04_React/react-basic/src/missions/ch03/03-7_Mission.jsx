// 미션 03-7. State 3종 세트 — 숫자 · 불리언 · 문자열
//
// 목표: 여러 종류의 값을 useState 로 기억하고 바꿔 본다.
//
// 순서
//   1. 숫자   : const [likes, setLikes] = useState(0)
//               [좋아요 {likes}] 버튼을 누르면 +1
//   2. 불리언 : const [isOpen, setIsOpen] = useState(false)
//               버튼 글자는 {isOpen ? '접기 ▲' : '펼치기 ▼'}
//               누르면 setIsOpen(!isOpen)
//               {isOpen && <p>숨겨진 내용이 나타났다!</p>}   (조건부 렌더링은 04-3에서 자세히)
//   3. 문자열 : const [mood, setMood] = useState('보통')
//               [좋음] [나쁨] 버튼을 누르면 "오늘 기분: 좋음" 이 바뀐다
//
// 확인: 세 가지가 서로 영향을 주지 않고 따로따로 기억된다.
import { useState } from 'react'

export default function Mission() {
  // TODO 1~3. state 3개를 만드세요

  return (
    <div>
      <h3>1. 숫자</h3>
      {/* TODO 1 */}

      <h3>2. 불리언</h3>
      {/* TODO 2 */}

      <h3>3. 문자열</h3>
      {/* TODO 3 */}
    </div>
  )
}
