
import { useState } from 'react'

const fruits = ['사과', '바나나', '포도', '복숭아', '파인애플', '바나나우유']

/**
 * 단방향 데이터 흐름
 *  - React.에서 데이터는 부모 -> 자식으로만 흐른다. 
 * 
 * 함께쓰는 state를 공통 부모로 옮기는 방법 (Lifting State Up)
 *  - Props를 이용해 상태값을 전달함으로써 형제관계의 컴포넌트에서 이벤트를 줄 수 있다.
 * 
 */
function SearchBox({ keyword, onKeywordChange }) {
  return (
    <div className="box">
      <h3>SearchBox</h3>
      <input
        className="input"
        placeholder="과일 검색"
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
      />
    </div>
  )
}

function ResultList({ keyword, selected, onSelect }) {
  const results = fruits.filter((fruit) => fruit.includes(keyword))
  return (
    <div className="box" style={{ flex: 1 }}>
      <h3>ResultList ({results.length}개)</h3>
      <div className="row">
        {results.map((fruit) => (
          <button
            key={fruit}
            className={`btn ${fruit === selected ? 'primary' : ''}`}
            onClick={() => onSelect(fruit)}
          >
            {fruit}
          </button>
        ))}
      </div>
    </div>
  )
}

function SelectedInfo({ selected }) {
  return (
    <div className="box" style={{ flex: 1 }}>
      <h3>SelectedInfo</h3>
      <p>{selected ? `🛒 "${selected}"을(를) 골랐습니다.` : '아직 고르지 않았습니다.'}</p>
    </div>
  )
}

function FruitSearch() {
  const [keyword, setKeyword] = useState('')
  const [selected, setSelected] = useState('')

  return (
    <div className="stack">
      <SearchBox keyword={keyword} onKeywordChange={setKeyword} />
      <div className="row" style={{ alignItems: 'stretch' }}>
        <ResultList keyword={keyword} selected={selected} onSelect={setSelected} />
        <SelectedInfo selected={selected} />
      </div>
      <p className="hint">세 형제가 부모의 state 하나를 통해 서로 연결된다. (07-1과 비교해 보자)</p>
    </div>
  )
}

const RATE = 1400

function toDollar(won) {
  if (won === '') return ''
  return String(Math.round((Number(won) / RATE) * 100) / 100)
}

function toWon(dollar) {
  if (dollar === '') return ''
  return String(Math.round(Number(dollar) * RATE))
}

function MoneyInput({ label, unit, value, onChange }) {
  return (
    <label className="box stack" style={{ flex: 1 }}>
      <b>{label}</b>
      <div className="row">
        <input
          className="input"
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ flex: 1 }}
        />
        <span>{unit}</span>
      </div>
    </label>
  )
}

function ExchangeCalculator() {
  const [money, setMoney] = useState({ amount: '14000', currency: 'won' })

  const won = money.currency === 'won' ? money.amount : toWon(money.amount)
  const dollar = money.currency === 'dollar' ? money.amount : toDollar(money.amount)

  function handleWonChange(value) {
    setMoney({ amount: value, currency: 'won' })
  }

  function handleDollarChange(value) {
    setMoney({ amount: value, currency: 'dollar' })
  }

  return (
    <div className="stack">
      <div className="row" style={{ alignItems: 'stretch' }}>
        <MoneyInput label="🇰🇷 원화" unit="원" value={won} onChange={handleWonChange} />
        <MoneyInput label="🇺🇸 달러" unit="$" value={dollar} onChange={handleDollarChange} />
      </div>
      <div className="cmd">{`ExchangeCalculator   state: money = ${JSON.stringify(money)}
├── MoneyInput(원화)  props: value = won,    onChange = handleWonChange
└── MoneyInput(달러)  props: value = dollar, onChange = handleDollarChange`}</div>
      <p className="hint">어느 쪽에 입력해도 다른 쪽이 바로 바뀐다. 1달러 = {RATE.toLocaleString()}원</p>
    </div>
  )
}

export default function LiftingStateUp() {
  return (
    <div className="stack">
      <h3>① 과일 검색 — 07-1의 문제를 고친 버전 (쓰는 형제 · 읽는 형제)</h3>
      <FruitSearch />
      <h3 style={{ marginTop: 16 }}>② 환율 계산기 — 두 형제가 서로 값을 바꾼다</h3>
      <ExchangeCalculator />
    </div>
  )
}
