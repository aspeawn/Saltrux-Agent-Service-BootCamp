import useLocalStorage from './hooks/useLocalStorage'

const MEMO_KEY = 'day2-memo'
const SETTINGS_KEY = 'day2-settings'

export default function LocalStorage() {
  const [memo, setMemo] = useLocalStorage(MEMO_KEY, '')
  const [settings, setSettings] = useLocalStorage(SETTINGS_KEY, { fontSize: 16, dark: false })

  function handleClear() {
    setMemo('')
    setSettings({ fontSize: 16, dark: false })
  }

  return (
    <div className="stack">
      <div className="note">
        <h3>👉 메모를 쓰고 설정을 바꾼 다음, 새로고침(F5)해 보세요</h3>
        <ul>
          <li>일반 useState였다면 새로고침하면 모두 사라진다</li>
          <li>useLocalStorage는 값을 저장해 두었다가 다시 불러온다</li>
        </ul>
      </div>

      <div
        className="box stack"
        style={{
          background: settings.dark ? '#23272f' : '#fff',
          color: settings.dark ? '#fff' : undefined,
        }}
      >
        <div className="row">
          <label className="row">
            글자 크기
            <input
              type="range"
              min={12}
              max={28}
              value={settings.fontSize}
              onChange={(e) => setSettings({ ...settings, fontSize: Number(e.target.value) })}
            />
            {settings.fontSize}px
          </label>
          <label className="row">
            <input
              type="checkbox"
              checked={settings.dark}
              onChange={(e) => setSettings({ ...settings, dark: e.target.checked })}
            />
            다크 모드
          </label>
        </div>
        <textarea
          className="input"
          rows={5}
          placeholder="메모를 입력하세요. 자동 저장됩니다."
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          style={{ fontSize: settings.fontSize }}
        />
        <div>
          <button className="btn" onClick={handleClear}>
            초기화
          </button>
        </div>
      </div>

      <div className="box">
        <h3>localStorage에 실제로 저장된 문자열</h3>
        <div className="cmd">{`${MEMO_KEY}     = ${JSON.stringify(memo)}
${SETTINGS_KEY} = ${JSON.stringify(settings)}`}</div>
      </div>
    </div>
  )
}
