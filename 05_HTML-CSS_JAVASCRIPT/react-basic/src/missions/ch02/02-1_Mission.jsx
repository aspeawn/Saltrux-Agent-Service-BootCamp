// 미션 02-1. HTML을 JSX로 옮기기
//
// 목표: 아래 HTML을 JSX 규칙에 맞게 고쳐서 Mission 안에 옮겨 적는다.
//
//   <h3 class="title">회원 가입</h3>
//   <label for="nickname">닉네임</label>
//   <input id="nickname" type="text" placeholder="닉네임 입력">
//   <br>
//   <label><input type="checkbox"> 약관에 동의합니다</label>
//   <p style="color: tomato; font-weight: bold">* 필수 항목입니다</p>
//   <!-- 가입 버튼은 나중에 만들 예정 -->
//
// 고칠 곳 (JSX 규칙 6가지)
//   ① 하나의 부모로 감싸기          ② 모든 태그 닫기  <input />  <br />
//   ③ class → className            ④ for → htmlFor
//   ⑤ style은 객체로  style={{ color: 'tomato', fontWeight: 'bold' }}
//   ⑥ 주석은 {/* ... */}
//
// 확인: 에러 없이 화면에 나오면 성공!
// 일부러 하나씩 틀려 보고(예: <br> 안 닫기) 에러 메시지를 읽어 보자.

export default function Mission() {
  return (
    // TODO 위 HTML을 JSX로 바꿔서 이 <div> 안에 적으세요
    <div className="stack">
      <h3 className="title">회원 가입</h3>
      <label htmlFor="nickname">닉네임</label>
      <input id="nickname" type="text" placeholder="닉네임 입력" />
      <br />
      <label>
        <input type="checkbox" /> 약관에 동의합니다
      </label>
      <p style={{ color: 'tomato', fontWeight: 'bold' }}>* 필수 항목입니다</p>
    </div>
  )
}
