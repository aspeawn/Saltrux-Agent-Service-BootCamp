import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    const { error } = this.state
    if (error) {
      return (
        <div className="error-box">
          <strong>⚠️ 코드를 실행하다가 에러가 났어요</strong>
          <pre>{String(error?.message ?? error)}</pre>
          <p>코드를 고치고 저장하면 다시 실행됩니다. 자세한 내용은 F12 콘솔에서 확인하세요.</p>
        </div>
      )
    }
    return this.props.children
  }
}
