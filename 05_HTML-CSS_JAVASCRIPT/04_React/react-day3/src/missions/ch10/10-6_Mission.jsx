// 🎯 미션 10-6. 🐞 끝나지 않는 로딩 — 로딩 · 오류 상태
// 🧩 패턴 — 데이터 · 로딩 · 오류 3가지 state
//
// 상황: AI가 만든 사용자 정보 화면. 1번 · 2번은 잘 나오는데,
//       999(없는 사용자)를 누르면 "불러오는 중…"에서 영원히 멈춘다. 무엇이 잘못됐는지도 알려 주지 않는다!
//
// 순서
//   1. 999를 누르고 F12 콘솔과 Network 탭을 본다 → 요청은 404로 실패했는데 화면은 계속 로딩 중
//   2. 원인을 찾는다: 실패하면 try 안의 남은 줄은 실행되지 않고 catch로 간다. 🐞 표시가 있는 두 줄을 보자
//      - 로딩을 끄는 줄이 실패했을 때도 실행되나?
//      - 실패했을 때 사용자에게 알려 주는 코드가 있나?
//   3. 오류 메시지를 담을 state를 하나 만든다
//   4. 실패하면 오류 메시지를 저장하고, 성공 · 실패와 상관없이 로딩은 반드시 끈다 (try / catch / finally)
//      새로 요청을 시작할 때는 이전 오류를 지운다
//   5. 화면은 "로딩 중 → 오류가 있으면 오류 메시지 → 아니면 사용자 정보" 순서로 보여 준다
//   6. (도전) 404일 때만 "없는 사용자예요"라고 따로 보여 준다 → 오류 객체 안의 response.status
//
// ✅ 확인: 999를 누르면 오류 메시지가 나오고, 다시 1번을 누르면 정상으로 돌아온다
// 📖 막히면: 10-6 예제
// 🤖 AI에게 물어볼 때: "요청이 실패하면 로딩이 안 끝나. 실패했을 때 로딩 · 오류 state를 어떻게 처리하는지 확인해 줘"
import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export default function Mission() {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true)
        const response = await axios.get(`${BASE_URL}/users/${userId}`)
        setUser(response.data)
        setLoading(false) // 🐞
      } catch (err) {
        console.log(err) // 🐞
      }
    }
    loadUser()
  }, [userId])

  return (
    <div>
      <h3>👤 사용자 정보</h3>
      <p>
        {[1, 2, 999].map((id) => (
          <button key={id} onClick={() => setUserId(id)}>
            {id === 999 ? '999 (없는 사용자)' : `${id}번`}
          </button>
        ))}
      </p>
      {loading ? (
        <p>⏳ 불러오는 중…</p>
      ) : (
        <article>
          <b>{user.name}</b>
          <br />
          <small>{user.email}</small>
        </article>
      )}
    </div>
  )
}
