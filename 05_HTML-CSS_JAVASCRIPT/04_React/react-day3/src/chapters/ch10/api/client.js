import axios from 'axios'
import useApiLogStore from './useApiLogStore'

/**
 * 하나의 파일에 모든 요청이 쓰는 설정 모으기
 */

// 나만의 axios 만들기
const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',  // 백엔드 도메인
  timeout: 10000,   // 10초 안에 응답이 없으면 실패
})  

// 요청 인터셉터 : 요청이 서버로 가기전에 거치는 코드
client.interceptors.request.use((config) => {
  
  // 컴포넌트 밖에서는 Hook을 못써서 Zustand store는 .getState()로 읽음
  const { token, addLog } = useApiLogStore.getState()

  // 나중에 JWT를 넣어줄 공간
  // 요청 HTTP Header에 자동으로 스토어에서 토큰을 가져와 넣어주는 역할
  if (token) config.headers.Authorization = `Bearer ${token}`
  // Bearer : 로그인 정보를 담는 토큰 형식

  config.startedAt = Date.now()
  addLog(`📤 ${config.method.toUpperCase()} ${config.url}${token ? '  🔑 토큰 붙임' : ''}`)

  return config
})

// 응답 인터셉터 : 모든 요청이 컴포넌트로 응답되기전에 지나가는 코드
client.interceptors.response.use(
  // 성공일떄
  (response) => {
    const ms = Date.now() - response.config.startedAt
    useApiLogStore.getState().addLog(`✅ ${response.status} ${response.config.url} (${ms}ms)`)
    return response
  },
  // 실패일 때
  // -> 사용자에게 보여줄 메시지를 정리함
  (error) => {
    const status = error.response?.status
    if (status === 404) error.userMessage = '요청한 데이터가 없어요 (404)'
    else if (status === 401) error.userMessage = '로그인이 필요해요 (401)'
    else if (status) error.userMessage = `서버 오류가 났어요 (${status})`
    else error.userMessage = '서버에 연결할 수 없어요. 인터넷 연결을 확인하세요'

    useApiLogStore.getState().addLog(`❌ ${status ?? '응답 없음'} ${error.config?.url} → ${error.userMessage}`)
    // 에러를 다시 던져야 catch로 처리 가능
    return Promise.reject(error)
  },
)

export default client
