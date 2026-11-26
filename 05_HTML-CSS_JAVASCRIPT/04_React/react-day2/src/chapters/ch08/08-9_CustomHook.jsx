import useToggle from "./hooks/useToggle";
import useInput from "./hooks/useInput";
import useWindowWidth from "./hooks/useWindowWidth";

/**
 * 커스텀 훅
 * - 여러 컴포넌트에서 같은 Hook 조합 + 같은 로직이 반복되면 함수로 뽑아내서 사용
 * - use + 훅 이름으로 생성해내서 상태 공유를 할 수 있게 만듬
 * - 커스텀 훅은 컴포넌트가 아니라 Hook을 사용하는 함수이므로, JSX를 반환할 필요는 없음
 */

function FaqItem({ question, answer }) {

  // 배열 구조분해 할당 : 순서로
  const [isOpen, toggle] = useToggle(false);  // 커스텀 훅

  return (
    <div style={{ borderTop: "1px solid var(--line)", padding: "8px 0" }}>
      <button
        className="btn"
        style={{ border: 0, padding: 0, fontWeight: 600 }}
        onClick={toggle}
      >
        {isOpen ? "▼" : "▶"} {question}
      </button>
      {isOpen && (
        <p className="hint" style={{ marginTop: 4 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

function SignupForm() {
  const name = useInput("");
  const email = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${name.value} / ${email.value}`);
    name.reset();
    email.reset();
  }

  return (
    <form className="stack" onSubmit={handleSubmit}>
      <input className="input" placeholder="이름" {...name.bind} />
      <input className="input" placeholder="이메일" {...email.bind} />
      <button className="btn primary">제출</button>
    </form>
  );
}

function ScreenInfo() {
  const width = useWindowWidth();
  return (
    <p>
      창 너비 <b>{width}px</b> →{" "}
      {width < 768 ? "📱 모바일 레이아웃" : "🖥️ 데스크톱 레이아웃"}
    </p>
  );
}

export default function CustomHook() {
  return (
    <div className="stack">
      <div className="box">
        <h3>① useToggle — FAQ 아코디언 (항목마다 독립된 state)</h3>
        <FaqItem
          question="Custom Hook 이름은 왜 use로 시작하나요?"
          answer="React와 린터가 Hook 규칙을 검사할 수 있도록 하기 위해서입니다."
        />
        <FaqItem
          question="두 컴포넌트가 같은 Hook을 쓰면 state도 공유되나요?"
          answer="아니요. 로직만 공유하고 state는 각자 따로 가집니다."
        />
        <FaqItem
          question="오늘 소울 푸드는 맛이 있었나요?"
          answer="네 깐풍소스가 기가 막히더라구요."
          />
      </div>

      <div className="row" style={{ alignItems: "stretch" }}>
        <div className="box" style={{ flex: 1 }}>
          <h3>② useInput — 입력창 코드 줄이기</h3>
          <SignupForm />
        </div>
        <div className="box" style={{ flex: 1 }}>
          <h3>③ useWindowWidth — effect 재사용</h3>
          <ScreenInfo />
          <p className="hint">
            resize 이벤트 등록 · 해제(useEffect + cleanup, 08-6) 코드가 Hook
            안으로 숨었다. 쓰는 쪽은 한 줄이면 끝.
          </p>
        </div>
      </div>

      <div className="row" style={{ alignItems: "stretch" }}>
        <div className="box" style={{ flex: 1 }}>
          <h3 className="bad">Before — 컴포넌트마다 반복</h3>
          <div className="cmd">{`const [name, setName] = useState('')
const [email, setEmail] = useState('')

<input value={name}
  onChange={e => setName(e.target.value)} />
<input value={email}
  onChange={e => setEmail(e.target.value)} />`}</div>
        </div>
        <div className="box" style={{ flex: 1 }}>
          <h3 className="good">After — Custom Hook</h3>
          <div className="cmd">{`const name = useInput('')
const email = useInput('')

<input {...name.bind} />
<input {...email.bind} />`}</div>
        </div>
      </div>
    </div>
  );
}
