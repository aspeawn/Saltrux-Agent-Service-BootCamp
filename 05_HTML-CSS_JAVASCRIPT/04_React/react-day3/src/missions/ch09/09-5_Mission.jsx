// 🎯 미션 09-5. 🐞 글자 하나 칠 때마다 전부 다시 그려지는 화면 — Selector
// 📘 문법 — selector 함수
//
// 상황: AI가 만든 쇼핑몰 상단 화면. 동작은 잘 되는데, 검색창에 글자를 칠 때마다
//       검색과 상관없는 CartBadge, UserGreeting, AddButton까지 "렌더링 N회"가 올라간다!
//
// 순서
//   1. 검색창에 글자를 쳐 보고, 네 컴포넌트의 "렌더링 N회"를 비교한다
//   2. 원인을 찾는다: 네 컴포넌트가 store에서 값을 어떻게 꺼내고 있나? (🐞 표시)
//      → selector 없이 꺼내면 store 안의 "무엇이든" 바뀔 때 다시 렌더링된다
//   3. 네 컴포넌트를 고친다: 각자 정말 쓰는 값만 selector로 하나씩 꺼낸다
//   4. (도전) SearchBox처럼 두 개를 꺼내는 곳은 useShallow로도 바꿔 본다 (import 경로는 09-5 예제 참고)
//
// ✅ 확인: 검색창에 글자를 치면 SearchBox만 올라가고, [장바구니 담기]를 누르면 CartBadge만 올라간다
// ⚠️ 두 값을 한 번에 꺼내려고 selector에서 새 객체를 만들어 돌려주면 v5에서는 무한 렌더링 에러가 난다
// 📖 막히면: 09-5 예제
// 🤖 AI에게 물어볼 때: "이 컴포넌트가 필요 없을 때도 다시 렌더링돼. Zustand store를 어떻게 구독하고 있는지 확인해 줘"
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import RenderBadge from "../../components/RenderBadge";

const useShopStore = create((set) => ({
  keyword: "",
  cartCount: 0,
  userName: "김리액트",
  setKeyword: (keyword) => set({ keyword }),
  addCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));

function SearchBox() {
  const { keyword, setKeyword } = useShopStore(
    // 🐞
    useShallow((state) => ({
      keyword: state.keyword,
      setKeyword: state.setKeyword,
    })),
  ); // 🐞
  return (
    <article>
      🔍{" "}
      <input
        placeholder="상품 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />{" "}
      <RenderBadge />
    </article>
  );
}

function CartBadge() {
  const { cartCount } = useShopStore((state) => state.cartCount); // 🐞
  return (
    <article>
      🛒 장바구니 {cartCount}개 <RenderBadge />
    </article>
  );
}

function UserGreeting() {
  const { userName } = useShopStore((state) => state.userName); // 🐞
  return (
    <article>
      👤 {userName}님, 안녕하세요 <RenderBadge />
    </article>
  );
}

function AddButton() {
  const  addCart  = useShopStore((state) => state.addCart); // 🐞
  return (
    <article>
      <button onClick={addCart}>장바구니 담기</button> <RenderBadge />
    </article>
  );
}

export default function Mission() {
  return (
    <div>
      <SearchBox />
      <CartBadge />
      <UserGreeting />
      <AddButton />
    </div>
  );
}
