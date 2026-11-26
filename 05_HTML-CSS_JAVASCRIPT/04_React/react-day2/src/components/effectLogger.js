let counter = 0

export function logEffect(message) {
  console.log(message)
  const el = document.getElementById('effect-log')
  if (!el) return
  counter += 1
  const time = new Date().toLocaleTimeString()
  el.textContent = `${String(counter).padStart(2, '0')}  ${time}  ${message}\n` + el.textContent
}

export function clearEffectLog() {
  counter = 0
  const el = document.getElementById('effect-log')
  if (el) el.textContent = ''
}
