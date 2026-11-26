import { useState } from 'react'
import CopyBox from '../../../components/CopyBox'

const PROMPT_1 = `React 19 + Vite + JavaScript 프로젝트야.
src/projects/todo/ai/MyTodo.jsx 파일 하나에 Todo List 컴포넌트를 만들어 줘. (export default function MyTodo)

[기능]
- 할 일 등록 (빈 값은 등록 안 됨, Enter로도 등록)
- 완료 체크 / 삭제
- 수정: [수정] 버튼 → 입력창으로 바뀜, Enter 저장, Esc 취소
- 전체 / 미완료 / 완료 필터
- "완료 개수 / 전체 개수" 표시

[조건]
- 외부 라이브러리 없이 useState만 사용
- 입력창은 제어 컴포넌트, 등록은 form onSubmit
- 배열 state는 불변성을 지켜서 (map, filter, spread) 업데이트
- 필터된 목록과 개수는 state로 만들지 말고 렌더링 중에 계산
- 리스트 key는 index가 아니라 id
- 스타일은 인라인 style로 최소한만`

const PROMPT_2 = `MyTodo.jsx를 컴포넌트로 분리해 줘.
- 같은 ai 폴더 안에 components 폴더를 만들고 TodoForm, TodoFilter, TodoList, TodoItem 으로 나눠 줘
- todos와 filter state는 MyTodo에 두고, 바꾸는 함수는 onAdd, onToggle, onUpdate, onDelete 같은 props로 내려 줘
- 입력 중인 글자는 TodoForm이, 수정 중인지 여부는 TodoItem이 각자 state로 가져
- 기능과 화면은 지금과 똑같이 유지해 줘`

const PROMPT_3 = `todos state와 변경 함수들을 Custom Hook으로 분리해 줘.
- 파일: src/projects/todo/ai/hooks/useTodos.js
- 반환값: { todos, addTodo, toggleTodo, updateTodo, deleteTodo }
- localStorage에 자동 저장 (키: 'my-ai-todos')
- 초기값은 useState 지연 초기화로 처음 한 번만 읽고, 저장은 useEffect로 todos가 바뀔 때만
- 저장된 값이 깨져 있어도 앱이 죽지 않게 try/catch`

const CHECKLIST = [
  '등록 · 체크 · 삭제 · 수정 · 필터가 모두 동작한다',
  '빈 값은 등록되지 않는다',
  'F12 콘솔에 빨간 에러 · 노란 경고가 없다 (key 경고 포함)',
  'push · splice 처럼 배열 state를 직접 고치는 코드가 없다 (05장)',
  '필터 결과 · 개수를 useState + useEffect로 만들지 않았다 (05-6, 08-7)',
  '리스트 key가 index가 아니라 id다 (1일차 04-5)',
  'onClick={handle()} 처럼 렌더링 중에 바로 실행되는 코드가 없다',
  '내가 요청하지 않은 라이브러리 · 파일이 추가되지 않았다 (package.json 확인)',
  '(3단계) 새로고침해도 목록이 남아 있다',
]

export default function TodoAiGuide() {
  const [checked, setChecked] = useState([])

  function handleCheck(index) {
    setChecked(checked.includes(index) ? checked.filter((i) => i !== index) : [...checked, index])
  }

  return (
    <div className="stack">
      <div className="note">
        <h3>진행 순서</h3>
        <ul>
          <li>1단계 프롬프트 복사 → 각자 쓰는 AI 도구에 붙여 넣기</li>
          <li>
            결과 코드를 <code>src/projects/todo/ai/MyTodo.jsx</code>에 넣기 → 메뉴{' '}
            <b>🤖 내 AI Todo</b>에서 실행
          </li>
          <li>아래 체크리스트로 검증 → 틀린 곳은 React 용어로 다시 지시 (08-12)</li>
          <li>2단계 · 3단계 프롬프트로 리팩토링 → 완성본 1·2·3단계와 비교</li>
        </ul>
      </div>

      <CopyBox title="1단계 프롬프트 — 한 파일로 만들기" text={PROMPT_1} />

      <div className="box">
        <h3>✅ 검증 체크리스트 ({checked.length} / {CHECKLIST.length})</h3>
        {CHECKLIST.map((item, index) => (
          <label key={item} className="row" style={{ marginBottom: 6, alignItems: 'flex-start' }}>
            <input type="checkbox" checked={checked.includes(index)} onChange={() => handleCheck(index)} />
            <span style={{ textDecoration: checked.includes(index) ? 'line-through' : 'none' }}>{item}</span>
          </label>
        ))}
      </div>

      <CopyBox title="2단계 프롬프트 — 컴포넌트 분리" text={PROMPT_2} />
      <CopyBox title="3단계 프롬프트 — Custom Hook + localStorage" text={PROMPT_3} />

      <div className="note">
        <h3>AI 결과가 이상할 때</h3>
        <ul>
          <li>에러 메시지를 통째로 복사해서 &quot;어떤 파일에서, 무엇을 했더니, 이 에러가 났다&quot;와 함께 보낸다 (08-11)</li>
          <li>&quot;고쳐 줘&quot; 대신 원인을 짚어 준다: &quot;필터 결과를 state로 두지 말고 렌더링 중에 계산해 줘&quot;</li>
          <li>한 번에 하나씩 시킨다. 여러 가지를 한꺼번에 요청하면 엉뚱한 곳까지 바뀐다</li>
        </ul>
      </div>
    </div>
  )
}
