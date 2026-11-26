import { useState } from 'react'
/**
 * 비제어 컴포넌트
 * - 입력값을 state에 넣지 않고 브라우저가 기억하게 두는 방식
 * - 제출할 때 한 번에 읽음
 */

/**
 * 제어 컴포넌트    -> 값을 React에 저장 -> 입력 때마다 읽기 -> 실시간 검사, 자동 가공, 연동 ...
 * 비제어 컴포넌트  -> 값을 DOM에 저장 -> 필요할 때 (submit) 읽기 -> 단순한 폼, 파일 업로드 
 */
export default function Uncontrolled() {
  const [result, setResult] = useState(null)

  function handleSubmit(e) {
    // 기본 동작 막기 (새로고침)
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // name 속성의 값들을 한번에 읽는다.
    setResult({
      title: formData.get('title'),
      category: formData.get('category'),
      isPublic: formData.get('isPublic') === 'on',
    })
  }

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      <form className="box stack" style={{ flex: 1 }} onSubmit={handleSubmit}>
        <h3>게시글 작성 (state 없이)</h3>
        <input className="input" name="title" defaultValue="첫 번째 글" />
        <select className="input" name="category" defaultValue="study">
          <option value="free">자유</option>
          <option value="study">스터디</option>
          <option value="qna">질문</option>
        </select>
        <label className="row">
          <input type="checkbox" name="isPublic" defaultChecked /> 공개
        </label>
        <button className="btn primary">제출</button>
        <p className="hint">입력하는 동안에는 리렌더링이 일어나지 않는다.</p>
      </form>

      <div className="box" style={{ flex: 1 }}>
        <h3>제출할 때 읽은 값</h3>
        <div className="cmd">{result ? JSON.stringify(result, null, 2) : '아직 제출 전'}</div>
      </div>
    </div>
  )
}
