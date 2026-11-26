function Greeting() {
  return <p>안녕하세요, React! 👋</p>;
}

export default function WhatIsReact() {
  return (
    <div className="stack">
      <div className="note">
        <h3>React는…</h3>
        <ul>
          <li>
            Meta(Facebook)가 만든 <b>UI 라이브러리</b> (프레임워크가 아니다)
          </li>
          <li>
            화면을 <b>컴포넌트</b>로 나눠서 만들고, 컴포넌트를 <b>재사용</b>한다
          </li>
          <li>
            데이터(state)가 바뀌면 React가 <b>알아서 화면을 다시 그린다</b>
          </li>
          <li>
            "어떻게 바꿀지"가 아니라 "어떤 모습이어야 하는지"를 적는다 →{" "}
            <b>선언형 UI</b> (01-4)
          </li>
        </ul>
      </div>

      <div className="note">
        <h3>라이브러리 vs 프레임워크</h3>
        <ul>
          <li>
            <b>라이브러리</b>: 내가 필요할 때 불러서 쓰는 도구 (React, Axios)
          </li>
          <li>
            <b>프레임워크</b>: 정해진 구조 안에서 내 코드를 채워 넣는 틀
            (Next.js, Angular)
          </li>
          <li>
            그래서 React만으로는 라우팅·서버 통신이 없다 → 3일차에 React Router,
            Axios를 추가한다
          </li>
        </ul>
      </div>

      <div className="box">
        <h3>가장 작은 React 컴포넌트</h3>
        <Greeting />
        <Greeting />
        <p className="hint">
          같은 컴포넌트를 두 번 썼다 → 한 번 만들면 몇 번이든 재사용할 수 있다.
        </p>
      </div>
    </div>
  );
}
