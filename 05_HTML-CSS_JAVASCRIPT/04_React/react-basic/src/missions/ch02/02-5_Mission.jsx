// 미션 02-5. 컴포넌트를 다른 파일로 옮기기
//
// 목표: 컴포넌트를 별도 파일로 분리하고, import 해서 여러 번 재사용한다.
//
// 순서
//   1. src/missions/ch02/ 안에 parts 폴더를 만들고, 그 안에 Sticker.jsx 파일을 새로 만든다.
//   2. 아래 Sticker 함수를 잘라내서(Ctrl + X) 새 파일에 붙여 넣고,
//      function 앞에 export default 를 붙인다.
//   3. 이 파일 맨 위에 import Sticker from './parts/Sticker' 를 추가한다.
//   4. Mission 안에서 <Sticker /> 를 3번 쓴다.
//   5. Sticker.jsx 의 문구를 하나 바꿔 본다 → 3개가 한꺼번에 바뀐다!
//   6. (보너스 · named export) Sticker.jsx 에 아래 함수를 추가하고
//        export function Star() { return <span>*</span> }
//      import Sticker, { Star } from './parts/Sticker' 로 같이 가져와 <Star /> 를 써 본다.
//
// 확인: 이 파일에는 Sticker 함수가 없는데도 스티커 3개가 보인다.

// TODO 2. 이 함수를 parts/Sticker.jsx 로 옮기세요
// function Sticker() {
//   return (
//     <article>
//       <h4>React 스티커</h4>
//       <p>한 번 만들어 두면 몇 번이든 다시 쓸 수 있다!</p>
//     </article>
//   )
// }
import Sticker, {Star} from './parts/Sticker'

export default function Mission() {
  return (
    <div>
      <Sticker />

      {/* TODO 4. <Sticker /> 를 두 번 더 쓰세요 */}
      <Sticker />
      <Sticker />
      <Star />

    </div>
  )
}
