/**
 * 컴포넌트 합성
 * - 작은 컴포넌트들을 조립해서 더 큰 컴포넌트를 만듬
 */

function Logo() {
  return <b style={{ fontSize: 18 }}>🛍️ React Shop</b>
}

function Menu() {
  return (
    <div className="row">
      <span>홈</span>
      <span>상품</span>
      <span>장바구니</span>
    </div>
  )
}

function Header() {
  return (
    <header
      className="row"
      style={{ justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: 12 }}
    >
      <Logo />
      <Menu />
    </header>
  )
}

function ProductItem() {
  return (
    <div className="box" style={{ flex: 1, textAlign: 'center' }}>
      <div style={{ fontSize: 36 }}>📦</div>
      <p>상품 이름</p>
      <p className="hint">10,000원</p>
    </div>
  )
}

function ProductSection() {
  return (
    <section className="row" style={{ alignItems: 'stretch', margin: '16px 0' }}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </section>
  )
}

function Footer() {
  return <footer className="hint">© 2026 React Shop</footer>
}

export default function ShopPage() {
  return (
    <div className="box" style={{ background: '#fbfcfd' }}>
      <Header />
      <ProductSection />
      <Footer />
    </div>
  )
}
