import { useState } from 'react'

const SIZES = ['S', 'M', 'L']
const TOPPINGS = ['치즈', '베이컨', '올리브', '버섯']

export default function SelectCheckbox() {
  const [city, setCity] = useState('seoul')
  const [size, setSize] = useState('M')
  const [toppings, setToppings] = useState(['치즈'])
  const [agree, setAgree] = useState(false)

  function handleToppingChange(e) {
    // checkbox : e.target.checked
    const { value, checked } = e.target
    if (checked) {
      setToppings([...toppings, value]) // 체크 : 배열에 추가
    } else {
      setToppings(toppings.filter((t) => t !== value))  // 배열에서 삭제
    }
  }

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      <div className="box stack" style={{ flex: 1 }}>
        <label className="row">
          <b style={{ width: 70 }}>배송 지역</b>
          <select className="input" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
            <option value="jeju">제주 (+3,000원)</option>
          </select>
        </label>

        <div className="row">
          <b style={{ width: 70 }}>사이즈</b>
          {SIZES.map((s) => (
            <label key={s} className="row" style={{ gap: 4 }}>
              <input
                type="radio"
                name="size"
                value={s}
                checked={size === s}
                onChange={() => setSize(s)}
              />
              {s}
            </label>
          ))}
        </div>

        <div className="row">
          <b style={{ width: 70 }}>토핑</b>
          {TOPPINGS.map((t) => (
            <label key={t} className="row" style={{ gap: 4 }}>
              <input
                type="checkbox"
                value={t}
                checked={toppings.includes(t)}
                onChange={handleToppingChange}
              />
              {t}
            </label>
          ))}
        </div>

        <label className="row">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          주문 내용을 확인했습니다 (필수)
        </label>

        <button className="btn primary" disabled={!agree}>
          주문하기
        </button>
      </div>

      <div className="box" style={{ flex: 1 }}>
        <h3>state</h3>
        <div className="cmd">{JSON.stringify({ city, size, toppings, agree }, null, 2)}</div>
      </div>
    </div>
  )
}
