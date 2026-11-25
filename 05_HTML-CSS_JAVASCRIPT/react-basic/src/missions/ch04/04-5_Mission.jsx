// 미션 04-5. key 실험실 — index vs id
//
// 목표: key 를 index 로 줬을 때 생기는 버그를 직접 만들고, id 로 고친다.
//
// 순서
//   1. guests 배열을 map() 으로 그린다. 한 줄 = 이름 + 메모 입력칸
//      먼저 일부러 key 를 index 로 준다.
//        {guests.map((guest, index) => (
//          <li key={index}>
//            {guest.name} <input placeholder="메모" />
//          </li>
//        ))}
//   2. 메모칸에 이름을 따라 적는다 (철수 옆에 "철수", 영희 옆에 "영희" …)
//   3. [맨 앞에 손님 추가] 를 누른다 → 메모가 엉뚱한 사람 옆에 붙는다!
//   4. key={guest.id} 로 바꾸고, 새로고침(F5) 후 2~3 을 다시 해 본다 → 메모가 제자리!
//
// 확인: key 가 id 일 때만 메모가 자기 사람 옆에 붙어 있다.
// 왜? React는 key 가 같으면 "같은 줄"이라고 판단한다. index 는 맨 앞에 추가하면 전부 밀린다.
import { useState } from 'react'

const waitingList = ['민수', '지우', '하늘', '서연', '도윤']

export default function Mission() {
  const [guests, setGuests] = useState([
    { id: 1, name: '철수' },
    { id: 2, name: '영희' },
    { id: 3, name: '준호' },
  ])
  const [nextId, setNextId] = useState(4)

  // 이미 완성된 함수 — 배열 맨 앞에 새 손님을 넣는다 (배열 state 업데이트는 2일차에 자세히)
  function handleAddFirst() {
    const name = waitingList[(nextId - 4) % waitingList.length]
    setGuests([{ id: nextId, name }, ...guests])
    setNextId(nextId + 1)
  }

  return (
    <div>
      <h3>대기 명단</h3>
      <button onClick={handleAddFirst}>맨 앞에 손님 추가</button>

      <ul>{/* TODO 1. guests.map() 으로 그리기 (처음엔 key={index}) */}
            {guests.map((guest) => (
      <li key={guest}>{guest}</li>
    ))}
      </ul>
    </div>
  )
}
