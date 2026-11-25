// 미션 03-3. props. 지우기 — 구조 분해 할당 + 기본값
//
// 목표: 이미 완성된 Profile 컴포넌트를 구조 분해 할당으로 바꿔 쓴다.
//
// 순서
//   1. function Profile(props)  →  function Profile({ name, job, emoji }) 로 바꾼다.
//   2. 안에 있는 props. 를 모두 지운다.  props.name → name
//   3. emoji 에 기본값 ':)' 을 준다  →  { name, job, emoji = ':)' }
//   4. job 에도 기본값 '비밀' 을 줘 본다.
//
// 확인: 화면은 그대로인데 코드는 짧아졌다.
//    세 번째 카드(emoji를 안 넘김)에는 :), 네 번째 카드(job을 안 넘김)에는 "비밀"이 보인다.

// TODO 1~4. 구조 분해 할당으로 바꾸세요
function Profile(props) {
  return (
    <article>
      <h3>
        {props.emoji} {props.name}
      </h3>
      <p>직업: {props.job}</p>
    </article>
  )
}

export default function Mission() {
  return (
    <div>
      <Profile name="김리액트" job="프런트엔드 개발자" emoji="</>" />
      <Profile name="이디자인" job="UI 디자이너" emoji="~" />
      <Profile name="박기획" job="서비스 기획자" />
      <Profile name="최비밀" emoji="?" />
    </div>
  )
}
