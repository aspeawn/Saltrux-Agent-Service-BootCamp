import { useState } from 'react'

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.target.value)
  }

  function reset() {
    setValue(initialValue)
  }

  return {
    value,
    setValue,
    reset,
    bind: { value, onChange: handleChange },
  }
}
