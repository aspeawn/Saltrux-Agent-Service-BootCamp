import { useState } from 'react'
import CopyBox from '../../components/CopyBox'

const VOCABULARY = [
  ['입력창 값을 내가 관리하고 싶다', '입력창을 제어 컴포넌트로 만들어 줘 (value + onChange)', '06-2'],
  ['목록 · 합계가 자꾸 안 맞는다', '이 값은 state로 두지 말고 렌더링 중에 계산해 줘 (파생 상태)', '05-6'],
  ['배열 추가 · 삭제 후 화면이 안 바뀐다', 'push 대신 새 배열을 만들어서 set 해 줘 (불변성)', '05-1'],
  ['두 컴포넌트가 같은 값을 써야 한다', '이 state를 공통 부모로 끌어올리고 props로 내려 줘', '07-2'],
  ['자식 버튼으로 부모 값을 바꾸고 싶다', '부모에서 onXxx 함수를 props로 내려 줘', '07-3'],
  ['컴포넌트를 껐는데 타이머가 계속 돈다', 'useEffect에 cleanup 함수를 추가해 줘', '08-6'],
  ['useEffect가 너무 많고 복잡하다', '외부 시스템과 상관없는 effect는 지우고 계산이나 이벤트 핸들러로 옮겨 줘', '08-7'],
  ['같은 로직이 여러 곳에 반복된다', '이 로직을 useXxx Custom Hook으로 분리해 줘', '08-9'],
  ['새로고침해도 남게 하고 싶다', 'localStorage에 저장해 줘. 초기값은 지연 초기화로 한 번만 읽어 줘', '08-10'],
  ['파일 하나가 너무 길다', '역할별로 컴포넌트를 나누고, 각 파일에 하나씩 둬', '1일차 02-5'],
]

const CHECKLIST = [
  ['불변성', '배열 · 객체 state를 push, splice, obj.x = … 로 직접 고치지 않았나?'],
  ['파생 상태', '다른 state로 계산할 수 있는 값을 useState로 또 만들지 않았나?'],
  ['useEffect', '꼭 필요한 effect인가? 의존성 배열이 맞나? 타이머 · 이벤트에 cleanup이 있나?'],
  ['key', '리스트 key가 index가 아니라 고유한 id인가?'],
  ['이벤트', 'onClick={fn()} 처럼 렌더링 중에 실행되는 코드가 없나?'],
  ['상태 위치', 'state가 그것을 쓰는 컴포넌트들의 가장 가까운 공통 부모에 있나?'],
  ['크기', '한 컴포넌트가 너무 길지 않나? (한 화면에 안 보이면 분리 요청)'],
  ['범위', '요청하지 않은 라이브러리 · 파일 · 기능이 추가되지 않았나? (package.json 확인)'],
  ['보안', '비밀번호 · API 키 같은 비밀 값이 코드에 들어 있지 않나? (3일차에 자세히)'],
  ['실행', '요구사항을 하나씩 직접 눌러 봤나? Console에 에러 · 경고가 0개인가?'],
]

const BAD_PROMPT = `할 일 앱 만들어 줘`

const GOOD_PROMPT = `React 19 + Vite + JavaScript 프로젝트야. (TypeScript, 외부 라이브러리 쓰지 마)
src/projects/todo/ai/MyTodo.jsx 에 할 일 목록 컴포넌트를 만들어 줘.

[기능] 등록(빈 값 막기), 완료 체크, 삭제, 전체/미완료/완료 필터
[조건]
- 입력창은 제어 컴포넌트, 등록은 form onSubmit
- todos는 useState, 배열은 불변성 지켜서 업데이트
- 필터된 목록은 state로 만들지 말고 렌더링 중에 계산
- 리스트 key는 id
[결과] 코드 전체와, 각 state가 왜 필요한지 한 줄씩 설명`

export default function AiCodeReview() {
  const [checked, setChecked] = useState([])

  function handleCheck(index) {
    setChecked(checked.includes(index) ? checked.filter((i) => i !== index) : [...checked, index])
  }

  return (
    <div className="stack">
      <div className="box">
        <h3>① 정확하게 시키기 — 하고 싶은 것을 React 용어로</h3>
        <table className="table">
          <thead>
            <tr>
              <th>이럴 때</th>
              <th>AI에게 이렇게</th>
              <th style={{ width: 80 }}>배운 곳</th>
            </tr>
          </thead>
          <tbody>
            {VOCABULARY.map(([situation, prompt, where]) => (
              <tr key={situation}>
                <td>{situation}</td>
                <td>&quot;{prompt}&quot;</td>
                <td>{where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row" style={{ alignItems: 'stretch' }}>
        <div className="box" style={{ flex: '1 1 220px' }}>
          <h3 className="bad">✕ 모호한 요청</h3>
          <div className="cmd">{BAD_PROMPT}</div>
          <p className="hint" style={{ marginTop: 8 }}>
            기술 스택 · 파일 위치 · 기능 범위가 없어서 매번 다른 결과가 나온다. TypeScript나 처음 보는 라이브러리가 섞여 나오기도 한다.
          </p>
        </div>
        <div style={{ flex: '2 1 380px' }}>
          <CopyBox title="○ 구체적인 요청: 스택 · 위치 · 기능 · 조건 · 결과" text={GOOD_PROMPT} />
        </div>
      </div>

      <div className="box">
        <h3>② 검증하기 — AI 코드 체크리스트 ({checked.length} / {CHECKLIST.length})</h3>
        {CHECKLIST.map(([tag, question], index) => (
          <label key={tag} className="row" style={{ marginBottom: 6, alignItems: 'flex-start' }}>
            <input type="checkbox" checked={checked.includes(index)} onChange={() => handleCheck(index)} />
            <span className="badge" style={{ minWidth: 70, textAlign: 'center' }}>
              {tag}
            </span>
            <span>{question}</span>
          </label>
        ))}
      </div>

      <div className="note">
        <h3>다시 시킬 때의 요령</h3>
        <ul>
          <li>&quot;안 돼, 고쳐 줘&quot; 대신 원인을 짚는다: &quot;total을 state로 두지 말고 cart로 계산해 줘&quot;</li>
          <li>한 번에 하나씩. 여러 가지를 한꺼번에 시키면 멀쩡한 곳까지 바뀐다</li>
          <li>
            AI가 고친 뒤에는 <b>바뀐 부분만</b> 다시 읽고, 체크리스트를 처음부터 다시 확인한다
          </li>
          <li>AI 설명이 이해 안 되면 &quot;이 줄이 왜 필요한지 1일차 수준으로 설명해 줘&quot;라고 묻는다</li>
        </ul>
      </div>
    </div>
  )
}
