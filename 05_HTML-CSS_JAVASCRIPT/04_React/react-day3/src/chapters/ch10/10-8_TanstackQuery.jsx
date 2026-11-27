import { useEffect, useState } from 'react'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

/**
 * Tanstack Query (React Query)
 * - 서버 데이터를 가지고올 때 (데이터, 로딩, 오류) + try/catch/finally/ AbortController + useEffect
 * - useQuery 한번으로 줄여줌
 * 
 * 설치 : npm install @tanstack/reqc-query
 */
const BASE_URL = 'https://jsonplaceholder.typicode.com'

// 요청보내는 함수를 return
async function fetchUsers(signal) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await axios.get(`${BASE_URL}/users`, { signal })
  return response.data
}

function UsersWithEffect() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const data = await fetchUsers(controller.signal)
        setUsers(data)
      } catch (err) {
        if (axios.isCancel(err)) return
        setError(err.message)
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }
    load()

    return () => controller.abort()
  }, [])

  if (isLoading) return <p className="hint">⏳ 불러오는 중…</p>
  if (error) return <p className="bad">❌ {error}</p>
  return <UserList users={users} />
}

// userEffect 사용버전이랑 같은 내용
/**
 * 1. 캐시 : 같은 Querykey는 한번 닫아두고 다시보여줄 때 바로 꺼낸다. (안쓰는 데이터 5분뒤에 삭제 gctime)
 * 2. 새로확인 : 캐시를 먼저 보여주고 뒤에서 다시 요청 (시간을 설정해서 몇분동안은 다시 요청보내지마 설정 가능)
 * 3. 재시도 : 실패하면 3번까지 다시 시도하고 error가 됨
 * 4. 취소 : 화면이 사라지면 요청을 취소한다. {signal 넘겨주면}
 */

function postPutDelete() {
  const mutation = useMutation({
    mutationFn: (newPost) => axios.post('/post', newPost),
    // 새로운 post를 서버에 등록 => 데이터베이스 업데이트 -> 화면에 state로 관리되는 posts는 업데이트가 필요한것
    // queryKey: ['posts] 데이터가 낡았으니 새로 가져와 (데이터 재호출)
    onSuccess : () => queryClient.invalidateQueries({queryKey: ['posts']})
  })

  // mutation.mutation({title : '새글'}) // post 요청보내기
  // mutation.isPending // 보내는 중인지 확인
}

function UsersWithQuery() {
  /**
   * data : 서버 데이터, 처음에는 undefined
   * isPending : 아직 데이터가 한번도 없다 (첫로딩)
   * error : 실패했을 때의 오류 객체
   * isFetching : 지금 서버에 요청중인가? (캐시를 보여주면서 새로 확인하고 있을 때도 true)
   * refetch : 요청을 다시 보내기 -> 다시시도 버튼에 연결 가능
   */
  // useQuery 훅
  const { data, isPending, error, isFetching } = useQuery({
    queryKey: ['users'],  // 해당 요청의 데이터의 이름표 ['users'] 받아둔 데이터가 있으면 이걸 먼저보여줌
    
    // 데이터를 넣어줌
    queryFn: ({ signal }) => fetchUsers(signal), // signal을 넘겨두면 화면이 사라질때 요청을 취소함.
  })

  if (isPending) return <p className="hint">⏳ 불러오는 중…</p>
  if (error) return <p className="bad">❌ {error.message}</p>
  return (
    <>
      {isFetching && <p className="hint">🔄 캐시를 먼저 보여 주고, 뒤에서 새로 확인하는 중</p>}
      <UserList users={data} />
    </>
  )
}

function UserList({ users }) {
  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  )
}


// 1. queryClient 적용하기
// 데이터를 보관하는 공간
// main.jsx에서 한번 만들어놓음
const queryClient = new QueryClient()

export default function TanstackQuery() {
  const [show, setShow] = useState(true)

  return (
    // QueryClientProvider : 원래 <App> 컴포넌트를 감싸게 해놓는게 정석 ->  예제라서 이렇게 해둠
    <QueryClientProvider client={queryClient}>
      <div className="stack">
        <div className="row">
          <button className="btn primary" onClick={() => setShow(!show)}>
            {show ? '숨기기' : '보이기'}
          </button>
          <span className="hint">← 숨겼다가 다시 보이게 해 보세요</span>
        </div>

        <div className="row" style={{ alignItems: 'flex-start' }}>
          <div className="box" style={{ flex: 1, minWidth: 260 }}>
            <h3>① useEffect 버전</h3>
            <p className="hint">state 3개 + useEffect + AbortController</p>
            {show && <UsersWithEffect />}
          </div>
          <div className="box" style={{ flex: 1, minWidth: 260 }}>
            <h3>② useQuery 버전</h3>
            <p className="hint">useQuery 한 번</p>
            {show && <UsersWithQuery />}
          </div>
        </div>

        <div className="note">
          <h3>👉 확인해 보세요</h3>
          <ul>
            <li>다시 보이게 하면 ①은 또 1초 기다리지만, ②는 캐시에 있던 목록이 바로 나온다</li>
            <li>코드 보기 탭에서 두 컴포넌트의 길이를 비교해 보세요. 하는 일은 같다</li>
            <li>오후 react-blog은 useEffect + Custom Hook으로 만든다 → 도전 과제: AI에게 TanStack Query로 바꿔 달라고 하고 검증하기</li>
          </ul>
        </div>
      </div>
    </QueryClientProvider>
  )
}
