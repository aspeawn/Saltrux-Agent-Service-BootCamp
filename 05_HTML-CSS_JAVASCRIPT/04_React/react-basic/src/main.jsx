import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './bare.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrickMode :  개발 모드에서만 동작하는 코드 검사 도구
  // 잠재적인 문제를 찾기위해 컴포넌트를 '두 번'렌더링함
  <StrictMode>
    <App />
  </StrictMode>,
)
