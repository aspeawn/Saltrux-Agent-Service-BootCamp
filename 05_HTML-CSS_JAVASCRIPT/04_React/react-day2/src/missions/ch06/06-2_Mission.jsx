// 🎯 미션 06-2. 글자 수 제한 입력창 — 제어 컴포넌트
// 🧩 패턴 — 제어 컴포넌트 (문법: value, onChange)
//
// 목표: 입력창의 값을 state가 "제어"하게 만든다
//
// 순서
//   1. textarea에 value와 onChange를 연결한다 → 입력한 글자가 text state에 들어가게
//   2. 50자를 넘으면 더 입력되지 않게 한다
//      힌트: state에 넣기 전에 문자열을 MAX 글자까지만 잘라서 넣는다 (문자열의 slice)
//   3. 글자 수 표시 "0 / 50" 의 0을 지금 글자 수로 바꾼다
//      45자 이상이면 빨간 글씨로 → <small> 에 style={{ color: 'crimson' }} 이 붙게 (스타일은 이것만 쓰면 된다)
//   4. [#React 붙이기] 버튼 : 지금 글 끝에 ' #React' 를 붙인다 (이때도 50자를 넘지 않게)
//   5. [지우기] 버튼 : 입력창을 비운다
//
// ✅ 확인: 버튼으로 바꾼 값이 입력창에도 바로 보인다 = state가 입력창을 제어한다
// ⚠️ value만 주고 onChange를 빼 보자 → 입력이 안 되고 콘솔에 경고가 뜬다
// 📖 막히면: 06-2 예제
import { useState } from "react";

const MAX = 50;

export default function Mission() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>✍️ 한 줄 소개 (최대 {MAX}자)</h3>
      {/* TODO 1~2 */}
      <textarea
        rows={3}
        cols={40}
        placeholder="자기소개를 입력하세요"
        onChange={(e) => setText(e.target.value.slice(0, MAX))}
      />
      <br />
      {/* TODO 3 */}
      <small style={text.length >= 45 ? { color: "crimson" } : undefined}>
        {text.length} / {MAX}
      </small>

      <br />
      {/* TODO 4~5 */}
      <button onClick={() => setText((current) => (current + " #React").slice(0, MAX))}>#React 붙이기</button>
      <button onClick={() => setText('')}>지우기</button>
      <article>
        <small>미리보기</small>
        <p>{text || "(비어 있음)"}</p>
      </article>
    </div>
  );
}
