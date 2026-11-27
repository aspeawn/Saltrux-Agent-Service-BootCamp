import useUserStore from './stores/useUserStore'
import useThemeStore from './stores/useThemeStore'

/**
 * Zustand = state와 그걸 바꾸는 함수를 컴포넌트 밖 "store"에 모아두는 라이브러리
 * 설치 : npm install zustand
 * 
 * - Provider로 감쌀 필요가 없음 (ContextAPI와의 차이)
 * - 컴포넌트 밖에 위치해서, 컴포넌트가 지워져도 상태를 유지함
 */
function Tag({ children }) {
  return (
    <span className="badge" style={{ marginLeft: 6 }}>
      {children}
    </span>
  )
}


// Props 없음
function Layout() {
  return (
    <div className="box" style={{ borderStyle: 'dashed' }}>
      <b>Layout</b>
      <Tag>props 없음 ✨</Tag>
      <div style={{ marginTop: 12 }}>
        <Sidebar />
      </div>
    </div>
  )
}

// Props 없음
function Sidebar() {
  return (
    <div className="box" style={{ borderStyle: 'dashed' }}>
      <b>Sidebar</b>
      <Tag>props 없음 ✨</Tag>
      <div style={{ marginTop: 12 }}>
        <UserMenu />
      </div>
    </div>
  )
}

// 
function UserMenu() {
  const user = useUserStore((state) => state.user)      // state 꺼냄
  const logout = useUserStore((state) => state.logout)  // action 꺼냄
  const theme = useThemeStore((state) => state.theme)
  const dark = theme === 'dark'

  return (
    <div
      className="box row"
      style={{
        justifyContent: 'space-between',
        background: dark ? '#23272f' : '#fff',
        color: dark ? '#fff' : undefined,
      }}
    >
      <span>
        <b>UserMenu</b> <span className="badge">store에서 꺼냄</span> &nbsp; 👤 {user ? user.name : '로그인 필요'}
      </span>
      {user && (
        <button className="btn" onClick={logout}>
          로그아웃
        </button>
      )}
    </div>
  )
}

/**
 * 컴포넌트에서 필요한 state를 Store에서 꺼내서 쓴다.
 */
export default function ZustandStore() {
  const user = useUserStore((state) => state.user)
  const login = useUserStore((state) => state.login)
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <div className="stack">
      <div className="box row">
        <b>App</b>
        <Tag>state 없음 ✨</Tag>
        <button className="btn" onClick={toggleTheme}>
          테마: {theme}
        </button>
        {!user && (
          <button className="btn primary" onClick={login}>
            로그인
          </button>
        )}
      </div>
      
      {/* Provider로 감싸지 않음 */}
      <Layout />

      <div className="note">
        <h3>09-2와 비교해 보세요</h3>
        <ul>
          <li>09-2: App이 state를 갖고 Provider로 감싸서 내려보냈다</li>
          <li>09-3: state와 바꾸는 함수가 store 파일에 있다. App도 UserMenu도 store에서 꺼내 쓰기만 한다. 감싸는 코드가 없다</li>
          <li>
            다른 절로 갔다가 돌아와 보세요 → 로그아웃 · 테마가 그대로다. store는 컴포넌트 <b>밖</b>에 있어서 화면이 사라져도 값이 남는다
          </li>
          <li>새로고침(F5)하면 처음으로 돌아간다 → 새로고침해도 남게 하려면 09-6 persist</li>
        </ul>
      </div>
    </div>
  )
}
