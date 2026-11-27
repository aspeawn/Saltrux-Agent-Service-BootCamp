// 🎯 미션 10-5. 🐞 멈추지 않는 요청 — useEffect 의존성 배열
// 🧩 패턴 — 화면이 열릴 때 한 번 데이터 가져오기
//
// 상황: AI가 만든 사용자 목록. 화면은 잘 나오는데 Network 탭을 열어 보면 요청이 끝없이 나간다!
//       (수업용 안전장치가 15번에서 멈춰 준다)
//
// 순서
//   1. F12 → Network 탭을 열고 새로고침한다. users 요청이 몇 번 나가는지 본다
//   2. 원인을 찾는다: 요청 → setUsers → 다시 렌더링 → effect 다시 실행 → 또 요청 → …
//      🐞 표시가 있는 useEffect는 "언제" 다시 실행되게 되어 있나? (2일차 08-5의 의존성 배열 표)
//   3. 화면이 처음 열릴 때 한 번만 요청하도록 고친다
//   4. 고친 뒤 새로고침(F5)해서 요청 횟수를 다시 확인한다
//   5. (도전) cleanup에서 아직 안 끝난 요청을 취소하게 만든다 (AbortController — 10-5 예제)
//      getUsers에 axios 옵션 객체를 넘기면 그대로 axios.get에 전달된다
//
// ✅ 확인: 새로고침하면 요청이 2번만 나가고 멈춘다 (개발 모드의 StrictMode라서 2번이 정상)
// 💡 의존성 배열을 아예 안 쓰면 "렌더링될 때마다" 실행된다. 그 안에서 state를 바꾸면 무한 반복
// 📖 막히면: 10-5 예제, 2일차 08-5
// 🤖 AI에게 물어볼 때: "Network 탭에 요청이 계속 나가. useEffect가 왜 계속 실행되는지 확인해 줘"
import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

// 🛟 수업용 안전장치 (건드리지 마세요)
//    요청이 15번을 넘으면 더 보내지 않는다. 고친 뒤 새로고침하면 0부터 다시 센다
let requestCount = 0
function getUsers(options) {
  requestCount += 1
  if (requestCount > 15) {
    return Promise.reject(new Error('🛑 요청이 15번을 넘어서 안전장치가 멈췄습니다. Network 탭을 확인하세요'))
  }
  return axios.get(`${BASE_URL}/users`, options)
}

export default function Mission() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
  }) // 🐞

  return (
    <div>
      <h3>👥 사용자 목록</h3>
      <p>
        <small>지금까지 보낸 요청: {requestCount}번</small>
      </p>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
