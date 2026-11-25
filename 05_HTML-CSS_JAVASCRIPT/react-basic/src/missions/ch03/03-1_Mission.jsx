// 미션 03-1. 인사 카드 — Props 받기
//
// 목표: 부모가 넘긴 값을 props 객체로 받아서 화면에 보여 준다.
//
// 순서
//   1. Greeting 함수의 괄호 안에 props 를 받는다 → function Greeting(props)
//   2. 함수 맨 위에 console.log(props) 를 넣고 F12 콘솔에서 객체 모양을 확인한다.
//   3. 이름과 메시지를 props 로 바꾼다.
//        <h3>안녕하세요, {props.name}님!</h3>
//        <p>{props.message}</p>
//   4. Mission 에서 이름과 메시지가 다른 <Greeting /> 을 3개 만든다.
//        <Greeting name="철수" message="오늘도 화이팅!" />
//
// 확인: 같은 컴포넌트인데 내용이 다른 카드 3개!
//    콘솔에는 { name: '철수', message: '오늘도 화이팅!' } 같은 객체가 찍힌다.

// TODO 1~3
function Greeting(props) {
  console.log(props)
  return (
    <article>
      <h3>안녕하세요, {props.name}님!</h3>
      <p>{props.message}</p>
    </article>
  )
}

export default function Mission() {
  return (
    <div className="stack">
      {/* TODO 4. name, message 를 넘기고 3개로 늘리세요 */}
      <Greeting name="철수" message="오늘도 화이팅!" />
      <Greeting name="영희" message="좋은 하루 보내세요!" />
      <Greeting name="유리" message="내일도 화이팅!" />
    </div>
  )
}
