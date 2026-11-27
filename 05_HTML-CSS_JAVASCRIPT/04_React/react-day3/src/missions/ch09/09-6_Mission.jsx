// 🎯 미션 09-6. 새로고침해도 남는 찜 목록 — persist
// 📘 문법 — persist (zustand/middleware)
//
// 상황: 찜 기능은 잘 되지만, 새로고침(F5)하면 찜이 전부 사라진다
// 목표: store를 persist로 감싸서 새로고침해도 찜이 남게 한다
//
// 순서
//   1. 찜을 몇 개 누르고 새로고침해 본다 → 사라진다
//   2. import에 persist 를 추가한다 (어디서 가져오는지는 09-6 예제의 stores/useSettingsStore.js 참고)
//   3. create( ) 안에 있는 함수를 persist( )로 한 번 감싼다
//      persist의 두 번째 값으로 옵션 객체를 주고, 저장 이름(name)은 'mission-09-6-wish' 로 한다
//   4. 다시 찜을 누르고 새로고침 → 남아 있는지 확인한다. 아래 "저장된 값" 칸에도 나타난다
//   5. (도전) F12 → Application → Local Storage 에서 mission-09-6-wish 를 지우고 새로고침해 본다
//
// ✅ 확인: 새로고침해도 찜이 남아 있다. 컴포넌트 코드는 한 줄도 바꾸지 않았다
// ⚠️ 괄호 짝이 헷갈리기 쉽다 → persist는 create 바로 안쪽에서, 원래 있던 함수를 통째로 감싼다
// 📖 막히면: 09-6 예제

import { create } from "zustand";
import { persist } from "zustand/middleware";

const PRODUCTS = [
  { id: 1, name: "🎧 무선 이어폰" },
  { id: 2, name: "⌨️ 기계식 키보드" },
  { id: 3, name: "🖱️ 버티컬 마우스" },
];

// TODO 2~3. persist로 감싸기
// create(
// persist(
//    기존 Store 생성 함수,
//    저장 옵션
//  )
// )
const useWishStore = create(
  persist(
    (set) => ({
      ids: [],
      toggle: (id) =>
        set((state) => ({
          ids: state.ids.includes(id)
            ? state.ids.filter((wishId) => wishId !== id)
            : [...state.ids, id],
        })),
    }),
    { name: "mission-09-6-wish" },
  ),
);

function ProductCard({ product }) {
  const ids = useWishStore((state) => state.ids);
  const toggle = useWishStore((state) => state.toggle);
  const isWished = ids.includes(product.id);

  return (
    <article>
      {product.name}{" "}
      <button onClick={() => toggle(product.id)}>
        {isWished ? "♥ 찜함" : "♡ 찜"}
      </button>
    </article>
  );
}

function StorageView() {
  useWishStore((state) => state.ids); // 찜이 바뀌면 이 칸도 다시 그려지게
  return (
    <article>
      <small>localStorage에 저장된 값 (mission-09-6-wish)</small>
      <pre>{localStorage.getItem("mission-09-6-wish") ?? "(아직 없음)"}</pre>
    </article>
  );
}

export default function Mission() {
  return (
    <div>
      <h3>💖 찜하기</h3>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <StorageView />
    </div>
  );
}
