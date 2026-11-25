// 미션 03-5. 볼륨 조절기 — 단방향 데이터 흐름
//
// 목표: 값은 부모 → 자식으로, 바꿔 달라는 "요청"은 함수로 내려 보낸다.
//
//   Mission (volume 보관)
//    ├── VolumeDisplay   ← volume 을 받아서 보여 주기만
//    └── VolumeControls  ← onUp, onDown 을 받아서 호출만
//
// 순서
//   1. VolumeDisplay 가 { volume } 을 받아 <h3>볼륨 {volume}</h3> 을 보여 준다.
//   2. VolumeControls 가 { onUp, onDown } 을 받아 버튼 두 개의 onClick 에 연결한다.
//   3. Mission 에 handleUp, handleDown 함수를 만든다.
//        console.log('볼륨을 올려 주세요!')  /  console.log('볼륨을 내려 주세요!')
//   4. Mission 에서 두 자식에게 props 를 내려 준다.
//        <VolumeDisplay volume={volume} />
//        <VolumeControls onUp={handleUp} onDown={handleDown} />
//
// 확인: 버튼을 누르면 콘솔에 "요청"이 찍힌다.
//    화면의 숫자는 아직 안 바뀐다 → 03-7 useState 에서 해결!

// TODO 1
function VolumeDisplay() {
  return <h3>볼륨 ?</h3>
}

// TODO 2
function VolumeControls() {
  return (
    <div>
      <button>내리기</button>
      <button>올리기</button>
    </div>
  )
}

export default function Mission() {
  const volume = 7 // 데이터는 부모가 들고 있다

  // TODO 3. handleUp, handleDown

  return (
    <div>
      {/* TODO 4. props 를 내려 주세요 */}
      <VolumeDisplay />
      <VolumeControls />
    </div>
  )
}
