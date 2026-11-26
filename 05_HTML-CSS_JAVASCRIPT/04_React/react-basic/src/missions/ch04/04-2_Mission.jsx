// 미션 04-2. 과일 가게 — 핸들러 이름 짓기와 인자 넘기기
//
// 목표: 핸들러를 함수로 분리하고, 화살표 함수로 인자를 넘기고, props 로 핸들러를 내려 준다.
//
// 순서
//   1. handleSelect(name) 함수를 만든다 → 안에서 setSelected(name)
//   2. 과일 버튼 3개에 인자를 넘겨 연결한다
//        <button onClick={() => handleSelect('사과')}>사과</button>
//   3. FruitButton 컴포넌트를 완성하고 버튼 3개를 FruitButton 으로 바꾼다
//        props 이름은 on + 동작 →  <FruitButton name="사과" onSelect={handleSelect} />
//        FruitButton 안에서는   →  onClick={() => onSelect(name)}
//   4. 링크 막기: <a> 의 onClick 에서 e.preventDefault() 를 부르고 console.log('이동 막음!')
//
// 일부러 onClick={handleSelect('사과')} 로 써 보자 → 어떤 에러가 날까?
//    (괄호를 붙이면 "클릭할 때"가 아니라 "그리는 순간" 실행된다)
import { useState } from "react";

// TODO 3. FruitButton 을 완성하세요
function FruitButton({ name, onSelect }) {
  return <button onClick={() => onSelect(name)}>{name}</button>;
}

export default function Mission() {
  const [selected, setSelected] = useState("없음");

  // TODO 1. handleSelect
  function handleSelect(name) {
    setSelected(name);
  }
  function handleLinkClick(e) {
    e.preventDefault();
    console.log("이동 막음!");
  }

  return (
    <div>
      <h3>선택한 과일: {selected}</h3>

      {/* TODO 2 → 3. 버튼 3개 
      <button onClick={() => handleSelect('사과')}>사과</button> 에서 바뀜
      */}
      <FruitButton name="사과" onSelect={handleSelect} />
      <FruitButton name="바나나" onSelect={handleSelect} />
      <FruitButton name="포도" onSelect={handleSelect} />

      <p>
        {/* TODO 4. onClick 연결 */}
        <a href="https://react.dev" onClick={handleLinkClick}>
          react.dev 로 가는 링크 (클릭해도 이동하지 않게!)
        </a>
      </p>
    </div>
  );
}
