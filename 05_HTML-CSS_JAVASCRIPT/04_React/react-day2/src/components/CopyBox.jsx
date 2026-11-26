import { useState } from 'react'

export default function CopyBox({ title, text }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
    }
  }

  return (
    <div className="box">
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <button className="btn" onClick={handleCopy}>
          {copied ? '✓ 복사됨' : '📋 복사'}
        </button>
      </div>
      <div className="cmd" style={{ whiteSpace: 'pre-wrap' }}>
        {text}
      </div>
    </div>
  )
}
