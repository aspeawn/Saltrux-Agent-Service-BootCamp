import { useState } from 'react'

const fruits = ['사과', '바나나', '포도', '딸기', '수박']

export default function VirtualDom() {
  const [likes, setLikes] = useState([0, 0, 0, 0, 0])

  function handleLike(target) {
    setLikes(likes.map((count, index) => (index === target ? count + 1 : count)))
  }

  return (
    <div className="stack">
      <div className="note">
        <h3>확인 방법</h3>
        <ul>
          <li>F12 → <b>Elements(요소)</b> 탭을 열고 아래 목록 부분을 펼친다</li>
          <li>
            버튼을 누르면 <b>숫자가 바뀐 그 줄만</b> 보라색으로 반짝인다 → 실제
            DOM에서는 바뀐 텍스트만 교체된다
          </li>
          <li>나머지 4줄은 React가 건드리지 않는다</li>
        </ul>
      </div>

      <div className="box">
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {fruits.map((fruit, index) => (
            <li key={fruit} style={{ marginBottom: 6 }}>
              {fruit} ❤️ <b>{likes[index]}</b>{' '}
              <button className="btn" onClick={() => handleLike(index)}>
                좋아요
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
