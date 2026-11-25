import { useState } from 'react'

const pageLoadedAt = new Date(performance.timeOrigin).toLocaleTimeString()

const pages = {
  home: '🏠 홈 화면입니다.',
  products: '🛍️ 상품 목록 화면입니다.',
  cart: '🛒 장바구니 화면입니다.',
}

export default function Spa() {
  const [page, setPage] = useState('home')

  return (
    <div className="stack">
      <div className="note">
        <h3>MPA vs SPA</h3>
        <ul>
          <li>
            <b>MPA</b>(전통 방식): 메뉴를 누를 때마다 서버에서 새 HTML을 받아 온다 →
            화면이 깜빡이고 전체를 다시 그린다
          </li>
          <li>
            <b>SPA</b>: index.html 하나만 받고, 필요한 부분만 JavaScript로 바꾼다 →
            빠르고 앱처럼 부드럽다
          </li>
          <li>React로 만든 앱은 기본적으로 SPA다 (index.html에 div#root 하나뿐)</li>
        </ul>
      </div>

      <div className="box">
        <h3>직접 확인하기</h3>
        <div className="row">
          <button className="btn" onClick={() => setPage('home')}>홈</button>
          <button className="btn" onClick={() => setPage('products')}>상품</button>
          <button className="btn" onClick={() => setPage('cart')}>장바구니</button>
        </div>
        <p style={{ margin: '16px 0', fontSize: 20 }}>{pages[page]}</p>
        <p className="hint">
          페이지가 처음 열린 시각: <b>{pageLoadedAt}</b> — 버튼을 아무리 눌러도 이
          시각은 그대로다. 페이지를 새로 받지 않고 화면만 바꿨기 때문이다.
        </p>
        <p className="hint">
          브라우저 새로고침(F5)을 누르면 시각이 바뀐다 → 이것이 "페이지를 새로
          받는" MPA 방식의 이동이다.
        </p>
      </div>
    </div>
  )
}
