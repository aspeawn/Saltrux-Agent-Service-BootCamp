import { useState } from "react";

export default function StateDesign() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("typing");

  const isSending = status === "sending";
  const canSend = message.trim().length > 0 && !isSending;

  function handleSend() {
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  }

  if (status === "sent") {
    return (
      <div className="box">
        <h3>✅ 전송 완료!</h3>
        <p>&quot;{message}&quot;</p>
        <button
          className="btn"
          style={{ marginTop: 8 }}
          onClick={() => {
            setMessage("");
            setStatus("typing");
          }}
        >
          새 메시지 쓰기
        </button>
      </div>
    );
  }

  return (
    <div className="stack">
      <div className="box stack">
        <h3>메시지 보내기</h3>
        <textarea
          className="input"
          rows={3}
          placeholder="메시지를 입력하세요"
          value={message}
          disabled={isSending}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="row">
          <button
            className="btn primary"
            disabled={!canSend}
            onClick={handleSend}
          >
            {isSending ? "전송 중…" : "보내기"}
          </button>
          <span className="badge">status: {status}</span>
        </div>
      </div>

      <div className="note">
        <h3>상태 설계 체크리스트</h3>
        <ul>
          <li>
            이 값은 시간이 지나며 바뀌는가? → 안 바뀌면 state가 아니다 (상수)
          </li>
          <li>부모에게서 props로 받는가? → state가 아니다</li>
          <li>다른 state나 props로 계산할 수 있는가? → state가 아니다</li>
          <li>남은 것만 state로 만든다. 그리고 "가장 적게" 만든다</li>
        </ul>
      </div>
    </div>
  );
}
