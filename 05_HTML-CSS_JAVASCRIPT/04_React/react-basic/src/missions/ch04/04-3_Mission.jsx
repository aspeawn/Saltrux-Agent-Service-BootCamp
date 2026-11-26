// 미션 04-3. 알림 센터 — 조건부 렌더링 4가지
//
// 목표: 조건에 따라 다른 화면을 보여 주는 4가지 방법을 모두 써 본다.
//
// 순서
//   ① if + early return : isLoggedIn 이 false 이면 아래 화면만 return 한다
//        <div> <p>로그인이 필요합니다</p> <button>로그인</button> </div>
//        (로그인 버튼을 누르면 setIsLoggedIn(true))
//   ② 삼항 연산자 : count 가 0 이면 "새 알림이 없습니다", 아니면 "새 알림 {count}개"
//   ③ && 연산자   : count 가 1 이상일 때만 [모두 읽음] 버튼 보이기 (누르면 setCount(0))
//                   {count > 0 && <button>...</button>}
//   ④ 변수에 JSX  : return 위에서 let badge 를 정해 두고 {badge} 로 출력
//                   10 이상 → '알림 폭주!' / 5 이상 → '확인 필요' / 그 외 → '여유'
//
// ③을 {count && <button>...</button>} 로 바꿔 보자 → count 가 0일 때 화면에 0 이 찍힌다!
import { useState } from "react";

export default function Mission() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(3);

  // TODO ① if + early return
  if (!isLoggedIn)
    return (
      <div>
        <p>로그인이 필요합니다</p>
        <button onClick={() => setIsLoggedIn(true)}>로그인</button>
      </div>
    );
  // TODO ④ let badge = ...
  let badge;
  if (count >= 10) badge = "알림 폭주!";
  else if (count >= 5) badge = "확인 필요";
  else badge = "여유";

  return (
    <div>
      <h3>알림 센터</h3>
      {/* TODO ② 삼항 연산자 */}
      <p>{count === 0 ? "새 알림이 없습니다" : `새 알림 ${count}개`}</p>
      <button onClick={() => setCount(count + 1)}>알림 +1</button>
      {/* TODO ③ && 연산자 */}
      {count >= 1 && <button onClick={() => setCount(0)}>[모두 읽음]</button>}
      {/* TODO ④ {badge} */}
      <p>{badge}</p>
      <hr />
      <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
      <small> (isLoggedIn: {String(isLoggedIn)})</small>
    </div>
  );
}
