// 🎯 미션 09-4. 찜 목록 store 만들기 — Zustand
// 🧩 패턴 — store 하나에 state + action, 컴포넌트는 꺼내 쓰기만
//
// 목표: 상품 카드의 [♡ 찜] 버튼과 맨 위 "찜 N개"가 props 없이 같은 데이터를 쓰게 한다
//
// 순서
//   1. 파일 위쪽에 useWishStore 를 만든다 (create는 이미 import 되어 있다)
//        state  : ids — 찜한 상품 id 배열 (처음엔 빈 배열)
//        action : toggle(id) — ids에 있으면 빼고, 없으면 넣는다 (원본을 고치지 말고 새 배열로! 05-3)
//   2. ProductCard: store에서 ids와 toggle을 selector로 하나씩 꺼낸다
//        버튼을 누르면 toggle(상품 id)
//        이 상품이 찜한 상품이면 버튼 글자를 '♥ 찜함' 으로 (배열에 들어 있는지 확인: includes)
//   3. Header: ids를 꺼내서 "찜 0개"의 0을 진짜 개수로
//   4. (도전) WishList: 찜한 상품의 이름만 나열하기 → PRODUCTS 중 ids에 들어 있는 것만 (filter)
//
// ✅ 확인: 카드에서 찜을 누르면 Header 숫자가 바로 바뀐다. 다른 절에 갔다 와도 찜이 남아 있다
// 💡 찜한 개수는 store에 따로 넣지 않는다 → ids로 계산할 수 있으니까 (05-6)
// 📖 막히면: 09-4 예제 (stores/useCartStore.js)
import { create } from "zustand";

const PRODUCTS = [
  { id: 1, name: "🎧 무선 이어폰", price: 89000 },
  { id: 2, name: "⌨️ 기계식 키보드", price: 129000 },
  { id: 3, name: "🖱️ 버티컬 마우스", price: 45000 },
  { id: 4, name: "🖥️ 모니터 받침대", price: 32000 },
];

// TODO 1. useWishStore
const useWishStore = create((set) => ({
  ids: [], // 상태 : 찜한 상품 id 목록

  toggle: (id) =>
    set((state) => ({
      ids: state.ids.includes(id)
        ? state.ids.filter((wishId) => wishId !== id)
        : [...state.ids, id],
    })),
}));

function Header() {
  // TODO 3
  const ids = useWishStore((state) => state.ids);
  return <h3>💖 찜 {ids.length}개</h3>;
}

function ProductCard({ product }) {
  // TODO 2
  const ids = useWishStore((state) => state.ids);
  const toggle = useWishStore((state) => state.toggle);
  return (
    <article>
      {product.name} <small>{product.price.toLocaleString()}원</small>{" "}
      <button onClick={() => toggle(product.id)}>
        {ids.includes(product.id) ? "♥ 찜함" : "♡ 찜"}{" "}
      </button>
    </article>
  );
}

function WishList() {
  // TODO 4. (도전)
  const ids = useWishStore((state) => state.ids);
  const wishedProducts = PRODUCTS.filter((product) =>
    ids.includes(product.id),
  );

  return (
    <small>
      찜한 상품 이름이 여기에 나옵니다
      <ul>
        {wishedProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </small>
  );
}

export default function Mission() {
  return (
    <div>
      <Header />
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <hr />
      <WishList />
    </div>
  );
}
