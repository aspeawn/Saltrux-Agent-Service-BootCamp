// 미션 04-4. 할 일 목록 — map() 과 filter()
//
// 목표: 배열 데이터를 map() 으로 목록으로 그리고, filter() 로 걸러 본다.
//
// 순서
//   1. todos 배열을 map() 으로 <li> 목록으로 그린다. key 는 todo.id
//        {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
//      완료(done: true)면 앞에 '[v]', 아니면 '[ ]' 를 붙인다.
//   2. 한 줄을 TodoItem 컴포넌트로 분리한다.
//        <TodoItem key={todo.id} todo={todo} />
//   3. [완료한 일 숨기기] 체크박스를 연결한다.
//        <input type="checkbox" checked={hideDone} onChange={(e) => setHideDone(e.target.checked)} />
//      그리고 화면에 그릴 목록을 계산한다.
//          const visibleTodos = hideDone ? todos.filter((todo) => !todo.done) : todos
//   4. 목록 아래에 "전체 {todos.length}개 중 {visibleTodos.length}개 표시" 를 보여 준다.
//
// 확인: 체크박스를 켜면 [v] 항목이 사라지고, 개수 문장이 바뀐다.
import { useState } from 'react'

const todos = [
  { id: 1, text: 'React 설치하기', done: true },
  { id: 2, text: 'JSX 문법 익히기', done: true },
  { id: 3, text: 'Props 미션 풀기', done: false },
  { id: 4, text: 'useState 복습하기', done: false },
  { id: 5, text: '리스트 렌더링 연습', done: false },
]

// TODO 2. TodoItem 컴포넌트
function TodoItem({todos}) {
  <TodoItem key={todo.id} todo={todo} />
}

export default function Mission() {
  const [hideDone, setHideDone] = useState(false)

  // TODO 3. visibleTodos 계산
  const visibleTodos = hideDone ? todos.filter((todo) => !todo.done) : todos
  return (
    <div>
      <h3>오늘 할 일</h3>

      {/* TODO 3. 체크박스 연결 */}
      <label>
        <input type="checkbox" checked={hideDone} 
        onChange={(e) => setHideDone(e.target.checked)} /> 완료한 일 숨기기
        
      </label>

      <ul>{/* TODO 1. map() 으로 목록 그리기 */}
        {visibleTodos.map((todo) => (<li key={todo.id}>{todo.text}
          {todo.done ? '[v]' : '[ ]'}
      </li>))}
      </ul>

      {/* TODO 4. 개수 표시 */}
      <p>{todos.length}개 중 {visibleTodos.length}개 표시</p>
    </div>

  )
}
