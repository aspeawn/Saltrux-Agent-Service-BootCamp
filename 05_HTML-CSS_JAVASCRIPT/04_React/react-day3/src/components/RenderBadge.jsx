import { useEffect, useRef } from 'react'

export default function RenderBadge() {
  const spanRef = useRef(null)
  const countRef = useRef(0)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      countRef.current += 1
      const span = spanRef.current
      if (!span) return
      span.textContent = `렌더링 ${countRef.current}회`
      span.animate([{ background: '#ffe58f' }, { background: 'transparent' }], { duration: 700 })
    })
    return () => cancelAnimationFrame(frameId)
  })

  return (
    <span ref={spanRef} className="badge" style={{ fontVariantNumeric: 'tabular-nums', alignSelf: 'flex-start' }}>
      렌더링 0회
    </span>
  )
}
