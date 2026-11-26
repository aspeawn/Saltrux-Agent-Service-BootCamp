// [실습용 시작 파일] 2일차 실습 – Todo List
// 화면(JSX)과 스타일은 준비되어 있다. TODO를 순서대로 채워 기능을 완성하세요.
// (직접 짜는 버전. AI로 만드는 버전은 메뉴 "🤖 AI로 만들기 가이드")
//
// 스타일은 준비되어 있다 → ../Todo.module.css (CSS는 고칠 필요 없음)
//   새로 만드는 태그에 붙일 클래스
//     styles.empty      : 할 일이 없을 때 안내 문구 <p>
//     styles.editInput  : ⑤ 수정할 때 글자 대신 보여 줄 <input>
//     styles.iconButton : ⑤ 저장 · 취소 같은 작은 버튼 (빨간 버튼은 styles.danger 를 함께)
//
// 요구사항
//   ① 할 일 등록         ② 완료 여부 변경      ③ 삭제
//   ④ 전체·완료·미완료 필터                     ⑤ 수정
//   ⑥ localStorage 저장  ⑦ 컴포넌트 분리 및 리팩토링
import { useState } from 'react'
import styles from '../Todo.module.css'

const FILTERS = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '미완료' },
  { value: 'done', label: '완료' },
]

const initialTodos = [
  { id: 1, text: 'React 2일차 복습하기', done: true },
  { id: 2, text: 'useEffect 예제 다시 보기', done: false },
]

export default function TodoStart() {
  const [todos] = useState(initialTodos) // TODO: setTodos도 꺼내 쓰기
  const [text, setText] = useState('')
  const filter = 'all' // TODO ④: useState로 바꾸기

  // TODO ④: filter에 따라 걸러진 목록 계산하기 (state로 만들지 말 것! 05-6)
  const visibleTodos = todos

  // TODO: 완료 개수 계산하기
  const doneCount = 0

  // ① 등록 ---------------------------------------------------------------
  function handleSubmit(e) {
    e.preventDefault()
    // TODO ①
    //  - 앞뒤 공백 제거 후 비어 있으면 return
    //  - { id, text, done } 모양의 새 할 일을 배열 맨 뒤에 추가 (push ✕ → 새 배열로, 05-3)
    //  - 입력창 비우기
  }

  // ② 완료 토글 (인자: id) ---------------------------------------------------
  function handleToggle() {
    // TODO ②: map으로 해당 id의 done만 뒤집은 새 배열 만들기 (05-3)
  }

  // ③ 삭제 (인자: id) --------------------------------------------------------
  function handleDelete() {
    // TODO ③: filter로 해당 id를 뺀 새 배열 만들기 (05-3)
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h2 className={styles.title}>📝 할 일 목록</h2>
        <span className={styles.summary}>
          {doneCount} / {todos.length} 완료
        </span>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.addButton}>추가</button>
      </form>

      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`${styles.filter} ${filter === f.value ? styles.filterActive : ''}`}
            // TODO ④: onClick으로 filter 바꾸기
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* TODO: 보여 줄 할 일이 없으면 <p className={styles.empty}>할 일이 없습니다 🎉</p> */}
      <ul className={styles.list}>
        {visibleTodos.map((todo) => (
          <li key={todo.id} className={`${styles.item} ${todo.done ? styles.done : ''}`}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />
            <span className={styles.text}>{todo.text}</span>
            <div className={styles.actions}>
              {/* TODO ⑤: 수정 버튼 → 누르면 글자 대신 입력창 + 저장/취소 버튼 보여 주기
                    힌트: "지금 수정 중인 할 일의 id"와 "입력 중인 글자"를 state로 들고 있어야 한다
                          id가 같은 항목만 입력창으로 그린다 (조건부 렌더링) */}
              <button className={styles.iconButton}>수정</button>
              <button
                className={`${styles.iconButton} ${styles.danger}`}
                onClick={() => handleDelete(todo.id)}
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ⑥ localStorage 저장 — 새로고침해도 할 일이 남게
//   - 처음 한 번: 저장된 값이 있으면 그걸로 시작하기 (useState 지연 초기화)
//   - todos가 바뀔 때마다: localStorage에 저장하기 (useEffect)
//   - 배열은 문자열로 바꿔서 저장하고, 읽을 때 다시 배열로 바꾼다 (JSON)
//   - 📖 08-10 예제와 hooks/useLocalStorage.js
//
// ⑦ 리팩토링
//   - TodoForm / TodoFilter / TodoList / TodoItem 컴포넌트로 나누고 props로 연결하기 (📖 07-2, 07-3)
//   - todos state와 바꾸는 함수들을 useTodos Custom Hook으로 빼기 (📖 08-9)
