// 미션 04-1. 이벤트 3종 세트 — onChange · onMouseEnter · onKeyDown
//
// 목표: 클릭 말고도 다양한 이벤트를 연결하고, 이벤트 객체 e 를 써 본다.
//
// 순서
//   1. onChange : 입력창에 글자를 치면 아래에 "입력한 내용: ○○ (n글자)" 가 보인다
//        <input value={text} onChange={(e) => setText(e.target.value)} />
//        글자 수는 {text.length}
//   2. onMouseEnter / onMouseLeave : 동물 위에 마우스를 올리면 강아지 → 고양이 로 바뀐다
//        onMouseEnter={() => setAnimal('고양이')}
//        onMouseLeave={() => setAnimal('강아지')}
//   3. onKeyDown : 입력창에서 Enter 를 누르면 콘솔에 입력값을 찍는다
//        function handleKeyDown(e) {
//          if (e.key === 'Enter') console.log('엔터!', text)
//        }
//
// 확인: 글자를 칠 때마다 아래 문장이 바뀌고, Enter 를 누르면 콘솔에 찍힌다.
import { useState } from "react";

export default function Mission() {
  const [text, setText] = useState("");
  const [animal, setAnimal] = useState("강아지");

  // TODO 3. handleKeyDown 함수

  return (
    <div>
      <h3>1. onChange · 3. onKeyDown</h3>
      {/* TODO 1, 3. value, onChange, onKeyDown 을 연결하세요 */}
      <input
        placeholder="아무거나 입력해 보세요"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") console.log("엔터!", text, text.length);
        }}
      />
      <p>입력한 내용: {text}</p>

      <h3>2. onMouseEnter / onMouseLeave</h3>
      {/* TODO 2. 마우스 이벤트를 연결하세요 */}
      <h1
        onMouseEnter={() => setAnimal("고양이")}
        onMouseLeave={() => setAnimal("강아지")}
      >
        {animal}
      </h1>
      <small>위 동물에 마우스를 올려 보세요</small>
    </div>
  );
}
