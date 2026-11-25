export default function JsxBasic() {
  return (
    // 규칙 1. 반드시 '하나의' 부모 요소로 감싸서 반환해야함
    <div className="stack">
      <div className="box">
        <h3>규칙 2. 모든 태그는 닫아야 한다</h3>
        <input className="input" placeholder="input도 닫는다 />" />
        <br />
        <img src="/favicon.svg" alt="로고" width={32} />
      </div>

      {/*class -> className class는 JS의 예약어이기 때문에 사용하지못함 */}
      <div className="box">
        <h3 className="good">규칙 3. class 대신 className</h3>

        <label htmlFor="agree">
          <input id="agree" type="checkbox" /> 규칙 4. for 대신 htmlFor, 속성은
          camelCase
        </label>
      </div>

      <div className="box">
        <h3>규칙 5. style은 "객체"로 쓴다</h3>
        <p
          style={{
            backgroundColor: '#fff4e5',
            fontSize: 18,
            padding: '8px 12px',
            borderRadius: 8,
          }}
        >
          style={'{{ backgroundColor: "#fff4e5", fontSize: 18 }}'}
        </p>
      </div>

      <div className="box">
        <h3>규칙 6. 주석은 {'{/* ... */}'}</h3>
        <p className="hint">JSX 바깥(일반 JS 영역)에서는 // 주석을 그대로 쓴다.</p>
      </div>
    </div>
  )
}
