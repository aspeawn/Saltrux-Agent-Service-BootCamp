// 🎯 미션 07-2. 따로 노는 두 입력창 — Lifting State Up
// 🧩 패턴 — Lifting State Up (새 문법 없음: useState + props)
//
// 상황: cm 칸과 inch 칸이 각자 state를 갖고 있어서, 한쪽에 입력해도 다른 쪽이 안 바뀐다.
// 목표: 두 입력창이 "같은 데이터"를 보도록 state를 공통 부모(Mission)로 올린다
//
// 순서
//   1. LengthInput 안의 useState를 지운다
//      → 대신 props로 value와 onChange를 받는다. 입력하면 onChange(입력한 값)을 부르게
//   2. 공통 부모 Mission에 state를 하나 만든다
//      힌트: cm와 inch를 둘 다 저장할 필요는 없다. "마지막으로 입력한 숫자 + 그게 어느 단위였는지"만 있으면 된다
//            예) { amount: '100', unit: 'cm' }
//   3. 화면에 보여 줄 cm 값과 inch 값을 계산한다
//      → 입력한 단위 쪽은 amount 그대로, 반대쪽은 위에 준비된 toCm / toInch 로 변환
//   4. 두 LengthInput에 value와 onChange를 내려 준다
//      → cm 칸에 입력하면 unit을 'cm'으로, inch 칸에 입력하면 'inch'로 저장
//
// ✅ 확인: 어느 칸에 입력해도 반대쪽이 바로 바뀐다
// 💡 두 컴포넌트가 같은 데이터를 써야 하면 → state를 가장 가까운 공통 부모로 올린다
// 📖 막히면: 07-2 예제 ② 환율 계산기
import { useState } from 'react'

const RATIO = 2.54 // 1 inch = 2.54 cm

function toInch(cm) {
  if (cm === '') return ''
  return String(Math.round((Number(cm) / RATIO) * 100) / 100)
}

function toCm(inch) {
  if (inch === '') return ''
  return String(Math.round(Number(inch) * RATIO * 100) / 100)
}

// TODO 1. state를 지우고 props로 받기
function LengthInput({ label, value, setValue }) {
  // const [value, setValue] = useState('')
  return (
    <label>
      {label} <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
    </label>
  )
}

export default function Mission() {
  // TODO 2~3
  const [length, setLength] = useState({ amount: '100', unit: 'cm' })
  const cmValue = length.unit === 'cm' ? length.amount : toCm(length.amount)
  const inchValue = length.unit === 'inch' ? length.amount : toInch(length.amount)
  console.log('변환 함수 준비됨:', toCm('1'), toInch('2.54'))

  return (
    <div>
      <h3>📏 길이 변환기</h3>
      {/* TODO 4 */}
      <LengthInput label="cm" value={cmValue} setValue={(amount) => setLength({ amount, unit: 'cm' })} />
      <LengthInput label="inch" value={inchValue} setValue={(amount) => setLength({ amount, unit: 'inch' })} />
    </div>
  )
}
