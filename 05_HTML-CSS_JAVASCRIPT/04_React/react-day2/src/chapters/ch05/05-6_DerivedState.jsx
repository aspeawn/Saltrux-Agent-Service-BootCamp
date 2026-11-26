import { useState } from "react";

/**
 * 파생상태 (Derived State) : 다른 State로 계산할 수 있는 값 / 합계, 개수, 필터링 목록
 * -> state로 따로 만들지 말고, 렌더링할 때 계산하게끔 만들자
 */
const initialCart = [
  { id: 1, name: "노트북", price: 1200000, qty: 1 },
  { id: 2, name: "마우스", price: 30000, qty: 2 },
];

function BadCart() {
  // state를 따로 관리하고 있음
  const [cart, setCart] = useState(initialCart);
  const [total, setTotal] = useState(1260000); // 파생상태

  function handleAdd(id) {
    const item = cart.find((c) => c.id === id); // 추가한 상품
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c))); // 카트에 담기
    setTotal(total + item.price); // 총합 계산
  }

  function handleRemove(id) {
    setCart(
      cart.map((c) =>
        c.id === id ? { ...c, qty: Math.max(c.qty - 1, 0) } : c,
      ),
    ); // 상품 카트에서 제거
  }

  return (
    <CartView
      title="✕ total을 state로 관리"
      titleClass="bad"
      cart={cart}
      total={total}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  );
}

function GoodCart() {
  const [cart, setCart] = useState(initialCart);
  // total은 관리 안함

  // total을 계산 : 카트가 변경되면 컴포넌트를 다시 그리면서 계산도 다시함
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function handleAdd(id) {
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
  }

  function handleRemove(id) {
    setCart(
      cart.map((c) =>
        c.id === id ? { ...c, qty: Math.max(c.qty - 1, 0) } : c,
      ),
    );
  }

  return (
    <CartView
      title="○ total은 계산"
      titleClass="good"
      cart={cart}
      total={total}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  );
}

function CartView({ title, titleClass, cart, total, onAdd, onRemove }) {
  return (
    <div className="box" style={{ flex: 1, minWidth: 280 }}>
      <h3 className={titleClass}>{title}</h3>
      {cart.map((item) => (
        <div
          key={item.id}
          className="row"
          style={{ justifyContent: "space-between", marginBottom: 6 }}
        >
          <span>
            {item.name} × {item.qty}
          </span>
          <span className="row">
            <button className="btn" onClick={() => onRemove(item.id)}>
              -
            </button>
            <button className="btn" onClick={() => onAdd(item.id)}>
              +
            </button>
          </span>
        </div>
      ))}
      <p style={{ marginTop: 8 }}>
        합계: <b>{total.toLocaleString()}원</b>
      </p>
    </div>
  );
}

function SelectById() {
  const [items, setItems] = useState([
    { id: 1, title: "첫 번째 글" },
    { id: 2, title: "두 번째 글" },
  ]);
  const [selectedId, setSelectedId] = useState(1);    // 선택된 ID : 필요한 state
  const selectedItem = items.find((item) => item.id === selectedId);  // 객체는 계산

  function handleRename(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, title: item.title + " (수정)" } : item,
      ),
    );
  }

  return (
    <div className="box">
      <h3>중복 상태 피하기 — selectedItem 대신 selectedId</h3>
      {items.map((item) => (
        <div key={item.id} className="row" style={{ marginBottom: 6 }}>
          <button
            className={`btn ${item.id === selectedId ? "primary" : ""}`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.title}
          </button>
          <button className="btn" onClick={() => handleRename(item.id)}>
            제목 수정
          </button>
        </div>
      ))}
      <p>
        선택한 글: <b>{selectedItem.title}</b>
      </p>
      <p className="hint">
        선택한 "객체"를 state에 따로 복사해 두면, 제목을 수정해도 위 문구는 옛
        제목으로 남는다.
      </p>
    </div>
  );
}

export default function DerivedState() {
  return (
    <div className="stack">
      <p className="hint">
        양쪽에서 [-] 버튼을 눌러 보세요. 왼쪽 합계만 틀려진다.
      </p>
      <div className="row" style={{ alignItems: "stretch" }}>
        <BadCart />
        <GoodCart />
      </div>
      <SelectById />
    </div>
  );
}
