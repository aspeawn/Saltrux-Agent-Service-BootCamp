// 미션 04-6. 오늘 뭐 먹지? — 1일차 종합
//
// 사용 문법: 컴포넌트 · Props · useState · 이벤트 · 조건부 렌더링 · 리스트 · key
//
// 기능
//   1. 카테고리 버튼(전체 / 한식 / 양식 / 일식)을 누르면 그 메뉴만 보인다
//        CATEGORIES.map(...) 으로 버튼 만들기
//        지금 고른 카테고리 버튼 글자 앞에는 '[v] ' 를 붙인다
//        visibleMenus = category === '전체' ? menus : menus.filter(...)
//   2. 메뉴 한 개를 MenuCard 컴포넌트로 그린다 → props: menu, onPick
//        <article> 이름 · 가격 · [이걸로!] 버튼 </article>
//        [이걸로!] 를 누르면 onPick(menu.name) → 부모의 setPicked 실행
//   3. 맨 아래 선택 결과
//        picked 가 '' 이면 "아직 고르지 않았어요"
//        아니면 "오늘 점심은 ○○!"
//   4. (도전) 가격이 10,000원 이상인 메뉴는 카드 이름 옆에 '(비쌈)' 표시
//   5. (도전) [랜덤 추천] 버튼
//        menus[Math.floor(Math.random() * menus.length)].name 으로 setPicked
//
// 확인: 카테고리 → 메뉴 선택 → 결과 문장까지 한 번에 동작하면 1일차 완료!
import { useState } from "react";

const CATEGORIES = ["전체", "한식", "양식", "일식"];

const menus = [
  { id: 1, name: "김치찌개", category: "한식", price: 9000 },
  { id: 2, name: "비빔밥", category: "한식", price: 9500 },
  { id: 3, name: "토마토 파스타", category: "양식", price: 13000 },
  { id: 4, name: "수제버거", category: "양식", price: 11000 },
  { id: 5, name: "연어초밥", category: "일식", price: 15000 },
  { id: 6, name: "돈코츠라멘", category: "일식", price: 10000 },
];

// TODO 2. MenuCard 컴포넌트 ({ menu, onPick })
function MenuCard({ menu, onPick }) {
  return (
    <article>
      {/* TODO 4 구현: 10,000원 이상이면 비쌈 표시 */}
      {menu.name}{menu.price >= 10000 ? ' (비쌈)' : ''} · {menu.price.toLocaleString()}원
      <button onClick={() => onPick(menu.name)}>이걸로!</button>
    </article>
  )
}

export default function Mission() {
  const [category, setCategory] = useState("전체");
  const [picked, setPicked] = useState("");

  // TODO 1. visibleMenus 계산
  const visibleMenus = category === "전체"
    ? menus
    : menus.filter((menu) => menu.category === category)
  return (
    <div>
      <h3>오늘 뭐 먹지?</h3>

      {/* TODO 1. 카테고리 버튼 (CATEGORIES.map) */}
      {CATEGORIES.map((categoryName) => (
        <button key={categoryName}
        onClick={() => setCategory(categoryName)}>
          {category === categoryName ? '[v]' : ''}
          
          {categoryName}
        </button>
      ))}
      {visibleMenus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} onPick={setPicked} />
      ))}
      <hr />
      {/* TODO 3 구현: 선택 결과 표시 */}
      {picked === '' ? (
        <p>아직 고르지 않았어요</p>
      ) : (
        <p>오늘 점심은 {picked}!</p>
      )}

      {/* TODO 5 구현: 전체 메뉴 중 하나를 무작위 추천 */}
      <button
        onClick={() => setPicked(menus[Math.floor(Math.random() * menus.length)].name)}
      >
        랜덤 추천
      </button>
    </div>
  );
}
