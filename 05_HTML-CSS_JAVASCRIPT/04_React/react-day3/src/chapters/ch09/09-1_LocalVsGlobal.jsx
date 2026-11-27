import { useState } from 'react'

const QUIZ = [
  { text: '검색창에 입력 중인 글자', answer: '지역', why: '그 입력창만 쓴다' },
  { text: '로그인한 사용자 정보', answer: '전역', why: '헤더 · 마이페이지 · 주문서 등 여러 곳에서 쓴다' },
  { text: '장바구니에 담긴 상품', answer: '전역', why: '헤더 배지 · 상품 카드 · 장바구니 페이지가 같이 쓴다' },
  { text: '모달이 열려 있는지', answer: '지역', why: '모달을 띄운 컴포넌트만 알면 된다' },
  { text: '다크 모드 / 라이트 모드', answer: '전역', why: '모든 화면의 색이 바뀐다' },
  { text: '상품 상세의 "설명 / 리뷰" 탭 선택', answer: '지역', why: '그 상세 화면 안에서만 쓴다' },
]

function QuizRow({ item }) {
  const [picked, setPicked] = useState(null)
  const isRight = picked === item.answer

  return (
    <tr>
      <td>{item.text}</td>
      <td>
        <div className="row">
          {['지역', '전역'].map((choice) => (
            <button
              key={choice}
              className={picked === choice ? 'btn primary' : 'btn'}
              onClick={() => setPicked(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </td>
      <td>
        {picked && (
          <span className={isRight ? 'good' : 'bad'}>
            {isRight ? '⭕ ' : '❌ '}
            {item.answer} — {item.why}
          </span>
        )}
      </td>
    </tr>
  )
}

export default function LocalVsGlobal() {
  return (
    <div className="stack">
      <div className="note">
        <h3>쇼핑몰에서 "장바구니"를 쓰는 곳</h3>
        <div className="cmd">{`App
├── Header          🛒 3   ← 장바구니 개수
├── ProductPage
│   └── ProductList
│       └── ProductCard   [담기]   ← 장바구니에 추가
└── CartPage        목록 · 수량 · 합계   ← 장바구니 전체`}</div>
        <ul>
          <li>세 곳이 같은 장바구니를 써야 한다 → 공통 부모(App)로 올리면 중간 컴포넌트가 전부 전달만 한다 (07-5)</li>
          <li>
            그래서 이런 값은 <b>전역 상태</b>로 만든다 → Context(09-2) 또는 Zustand(09-3)
          </li>
        </ul>
      </div>

      <div className="box">
        <h3>🧐 지역일까, 전역일까? 골라 보세요</h3>
        <table className="table">
          <thead>
            <tr>
              <th>state</th>
              <th style={{ width: 150 }}>내 답</th>
              <th>정답</th>
            </tr>
          </thead>
          <tbody>
            {QUIZ.map((item) => (
              <QuizRow key={item.text} item={item} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="note">
        <h3>🤖 AI에게 시킬 때</h3>
        <ul>
          <li>"장바구니는 여러 페이지에서 쓰니까 전역 상태로 관리해 줘 (Zustand)"</li>
          <li>"검색어는 이 컴포넌트 안에서만 쓰니까 useState로 둬"</li>
          <li>AI가 모든 state를 전역 store에 넣었다면 → 한 곳에서만 쓰는 값은 다시 useState로 내리게 한다</li>
        </ul>
      </div>
    </div>
  )
}
