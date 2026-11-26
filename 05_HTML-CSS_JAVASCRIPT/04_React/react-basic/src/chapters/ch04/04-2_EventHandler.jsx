import { useState } from 'react'

/**
 * 이벤트 핸들러
 * - 함수로 분리해서 이름을 붙임 : handle + 대상 + 동작
 * -> handleClick, handleNameChange, handleDeleteClick
 * -> props 전달을 할 수 있음
 * 
 * 핸들러를 props 전달을 할 수 있음
 * -> on + 동작 : onSelect, onDelete
 */

function FruitButton({ name, onSelect }) {
  return (
    // 이벤트 핸들러를 등록할 때 함수형태로 전달해야함
    // 함수 호출을 할 경우에 렌더링 시 바로 실행되어서 다시 리렌더링 불가능 (즉 우선순위상 포도만 나타나고 버튼 동작 X)
    <button className="btn" onClick={() => onSelect(name)}>
      {name}
    </button>
  )
}

export default function EventHandler() {
  const [selected, setSelected] = useState('')
  const [log, setLog] = useState('')

  function handleSelect(fruit) {
    setSelected(fruit)
  }

  function handleLinkClick(e) {
    e.preventDefault()
    setLog('링크 기본 동작(이동)을 막았다')
  }

  function handleParentClick() {
    setLog('부모 상자가 클릭됨 (버블링)')
    console.log("부모 버튼 클릭됨")
  }

  function handleChildClick(e) {
    e.stopPropagation() // 이 stopPropagation 없으면 F12 console에서 자식버튼 누르면 부모버튼도 실행됨
    setLog('자식 버튼만 클릭됨 (전파 중단)')
    console.log("자식 버튼 클릭됨")
  }

  return (
    <div className="stack">
      <div className="box">
        <h3>인자 넘기기 + 핸들러를 props로 전달</h3>
        <div className="row">
          <FruitButton name="🍎 사과" onSelect={handleSelect} />
          <FruitButton name="🍌 바나나" onSelect={handleSelect} />
          <FruitButton name="🍇 포도" onSelect={handleSelect} />
        </div>
        <p style={{ marginTop: 8 }}>선택: {selected || '없음'}</p>
      </div>

      <div className="box">
        <h3>e.preventDefault()</h3>
        <a href="https://react.dev" onClick={handleLinkClick}>
          react.dev로 이동하는 링크 (클릭해도 이동하지 않음)
        </a>
      </div>

      <div className="box" onClick={handleParentClick} style={{ cursor: 'pointer' }}>
        <h3>e.stopPropagation() — 상자(부모)를 클릭해 보고, 버튼(자식)도 클릭해 보자</h3>
        <button className="btn primary" onClick={handleChildClick}>
          자식 버튼
        </button>
      </div>

      <p>📋 로그: {log || '-'}</p>
    </div>
  )
}
