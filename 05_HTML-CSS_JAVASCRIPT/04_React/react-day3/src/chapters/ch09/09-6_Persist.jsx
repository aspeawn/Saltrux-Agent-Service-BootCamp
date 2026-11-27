import useSettingsStore from './stores/useSettingsStore'

function SettingsPanel() {
  const theme = useSettingsStore((state) => state.theme)
  const fontSize = useSettingsStore((state) => state.fontSize)
  const nickname = useSettingsStore((state) => state.nickname)
  const toggleTheme = useSettingsStore((state) => state.toggleTheme)
  const setFontSize = useSettingsStore((state) => state.setFontSize)
  const setNickname = useSettingsStore((state) => state.setNickname)
  const reset = useSettingsStore((state) => state.reset)

  return (
    <div className="box stack">
      <h3>⚙️ 설정</h3>
      <div className="row">
        <button className="btn" onClick={toggleTheme}>
          테마: {theme === 'light' ? '☀️ 라이트' : '🌙 다크'}
        </button>
        <label className="row">
          글자 크기
          <input
            type="range"
            min={12}
            max={28}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
          {fontSize}px
        </label>
      </div>
      <input
        className="input"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <div>
        <button className="btn" onClick={reset}>
          초기화
        </button>
      </div>
    </div>
  )
}

function Preview() {
  const theme = useSettingsStore((state) => state.theme)
  const fontSize = useSettingsStore((state) => state.fontSize)
  const nickname = useSettingsStore((state) => state.nickname)
  const dark = theme === 'dark'

  return (
    <div
      className="box"
      style={{ background: dark ? '#23272f' : '#fff', color: dark ? '#fff' : undefined, fontSize }}
    >
      안녕하세요, {nickname || '손님'}님! 👋
    </div>
  )
}

function StorageView() {
  useSettingsStore()
  const saved = localStorage.getItem('day3-settings')

  return (
    <div className="box">
      <h3>localStorage에 실제로 저장된 값 (key: day3-settings)</h3>
      <div className="cmd" style={{ whiteSpace: 'pre-wrap' }}>
        {saved ?? '(아직 없음)'}
      </div>
      <p className="hint">F12 → Application → Local Storage 에서도 볼 수 있다. version은 persist가 붙이는 값</p>
    </div>
  )
}

export default function Persist() {
  return (
    <div className="stack">
      <div className="note">
        <h3>👉 설정을 바꾼 다음 새로고침(F5)해 보세요</h3>
        <ul>
          <li>09-3의 로그인 · 테마는 새로고침하면 처음으로 돌아갔지만, 여기 설정은 그대로 남는다</li>
          <li>컴포넌트 코드는 09-4과 똑같다. 차이는 stores/useSettingsStore.js 의 persist 한 겹뿐</li>
        </ul>
      </div>
      <SettingsPanel />
      <Preview />
      <StorageView />
    </div>
  )
}
