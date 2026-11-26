/**
 * Props
 *  - 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는 값
 *  - HTML 속성처럼 넘김
 *  - 함수형 컴포넌트의 매개변수로 받음
 */

// props는 객체 하나로 들어온다.
function Greeting(props) {
  console.log('Greeting props:', props)
  // 읽기전용으로 막힘
  // props.name = "바뀐 이름";
  return <p>안녕하세요, {props.name}님!</p>
}

export default function PropsConcept() {
  return (
    <div className="stack">
      <div className="box">
        <h3>같은 컴포넌트, 다른 데이터</h3>
        <Greeting name="김철수" />
        <Greeting name="이영희" />
        <Greeting name="박민수" />
        <p className="hint">
          F12 → Console에서 각 Greeting이 받은 props 객체를 확인하자. (StrictMode
          때문에 두 번씩 찍힌다)
        </p>
      </div>

      <div className="note">
        <h3>Props의 특징</h3>
        <ul>
          <li>부모 → 자식 방향으로만 전달된다 (03-5 단방향 데이터 흐름)</li>
          <li>
            <b>읽기 전용</b>이다. 자식이 props를 직접 바꾸면 안 된다 (
            <code>props.name = &apos;x&apos;</code> ✕)
          </li>
          <li>문자열, 숫자, 불리언, 배열, 객체, 함수, JSX 등 무엇이든 넘길 수 있다</li>
        </ul>
      </div>
    </div>
  )
}
