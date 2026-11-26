// 🎯 미션 06-6. 댓글 등록 — form과 onSubmit
// 📘 문법 — form onSubmit, e.preventDefault(), button type
//
// 목표: <form onSubmit> 으로 감싸면 버튼 클릭 · Enter 둘 다 한 번에 처리된다
//
// 순서
//   1. input과 버튼 두 개를 <form> 으로 감싸고, onSubmit에 handleSubmit을 연결한다
//   2. handleSubmit 을 완성한다
//        ① 새로고침 막기 (가장 먼저!) — 이벤트 객체 e 의 메서드를 쓴다
//        ② 빈 값(공백만 있는 것도)이면 등록하지 않기
//        ③ comments 배열 맨 뒤에 { id, text } 모양의 새 댓글 추가 (05-3)
//        ④ 입력창 비우기
//   3. [지우기] 버튼을 눌러도 댓글이 등록되지 않게 한다
//      힌트: form 안의 button은 따로 적지 않으면 type이 "submit" 이다
//
// ✅ 확인: Enter로도 등록되고, [지우기]를 눌러도 등록되지 않는다
// ⚠️ 2-① 을 빼고 등록해 보자 → 페이지가 새로고침되며 댓글이 사라진다
// 📖 막히면: 06-6 예제
import { useState } from "react";

export default function Mission() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([{ id: 1, text: "첫 댓글!" }]);

  function handleSubmit(e) {
    // TODO 2
    e.preventDefault();
    if (!text.trim()) return;
    setText(text);
    setComments([...comments, { id: Date.now(), text: text }]);
    console.log("제출 이벤트:", e.type);
    setText("");
  }

  return (
    <div>
      <h3>💬 댓글 ({comments.length})</h3>
      {/* TODO 1. form으로 감싸기 */}
      <form className="box stack" onSubmit={handleSubmit}>
        <input
          placeholder="댓글을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>등록</button>
      </form>
      {/* TODO 3 */}
      <button onClick={() => setText("")}>지우기</button>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}
