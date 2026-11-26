import { clearEffectLog } from './effectLogger'

export default function EffectLog() {
  return (
    <div className="box">
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>📜 실행 기록 (최신이 위)</h3>
        <button className="btn" onClick={clearEffectLog}>
          기록 지우기
        </button>
      </div>
      <pre id="effect-log" className="cmd" style={{ minHeight: 120, maxHeight: 220, overflowY: 'auto', margin: 0 }} />
    </div>
  )
}
