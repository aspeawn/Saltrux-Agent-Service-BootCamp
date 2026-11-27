// 🎯 미션 10-3. 할 일 한 개 불러오기 — Axios GET
// 📘 문법 — axios.get, response.data
//
// 목표: 번호를 입력하고 [불러오기]를 누르면 JSONPlaceholder에서 그 번호의 할 일을 가져와 보여 준다
//   주소: BASE_URL + '/todos/번호'   (예: /todos/5)
//   응답 모양: { userId, id, title, completed }
//
// 순서
//   1. handleLoad 를 async 함수로 만든다
//   2. axios.get 으로 요청하고 await 로 기다린다 (주소에 todoId를 넣는다 — 템플릿 문자열)
//   3. 응답에서 데이터를 꺼내 todo state에 넣는다
//   4. 아래 <article> 안을 바꾼다
//      todo가 있으면 → 제목과 완료 여부 (completed가 true면 '✅ 완료', 아니면 '⬜ 미완료')
//      todo가 없으면 → 지금 있는 안내 문구 그대로
//   5. (도전) try / catch 로 감싸고, 실패하면 "불러오지 못했어요" 를 보여 준다 → 300번을 넣어 보자 (404)
//
// ✅ 확인: 5를 넣고 불러오면 5번 할 일 제목이 나온다. F12 Network 탭에 /todos/5 요청이 보인다
// 📖 막히면: 10-3 예제
import { useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export default function Mission() {
  const [todoId, setTodoId] = useState('1')
  const [todo, setTodo] = useState(null)
  const [error, setError] = useState('')

  async function handleLoad() {
    setError('')
    try {
      const response = await axios.get(`${BASE_URL}/todos/${todoId}`)
      setTodo(response.data)
    } catch (error) {
      console.error('할 일을 불러오지 못했습니다.', error)
      setError('불러오지 못했어요')
    }
  }

  return (
    <div>
      <h3>✅ 할 일 조회</h3>
      <input type="number" min={1} max={200} value={todoId} onChange={(e) => setTodoId(e.target.value)} />{' '}
      <button onClick={handleLoad}>불러오기</button>

      {/* TODO 4 */}
      <article>
        {error ? (
          <p role="alert">{error}</p>
        ) : todo !== null ? (
          <>
            <h4>{todo.title}</h4>
            <p>{todo.completed ? '✅ 완료' : '⬜ 미완료'}</p>
          </>
        ) : (
          <small>할 일을 불러오면 여기에 보입니다</small>
        )}
      </article>
    </div>
  )
}
