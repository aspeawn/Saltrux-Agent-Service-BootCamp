import { useState } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary'
import CopyBox from '../../components/CopyBox'

function NotDefined() {
  const [count] = useStat(0)
  return <p>{count}</p>
}

function UndefinedMap() {
  const user = { name: '김리액트' }
  return (
    <ul>
      {user.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

function ObjectChild() {
  const user = { name: '김리액트', age: 27 }
  return <p>사용자: {user}</p>
}

function TooManyRenders() {
  const [open, setOpen] = useState(false)
  return <button onClick={setOpen(!open)}>열기</button>
}

function MissingKey() {
  const fruits = ['사과', '바나나', '포도']
  const items = fruits.map((fruit) => <li>{fruit}</li>)
  return <ul>{items}</ul>
}

function UncontrolledToControlled() {
  const [name, setName] = useState()
  return (
    <input
      className="input"
      placeholder="한 글자 입력해 보세요"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}

const ERRORS = [
  {
    id: 'not-defined',
    label: 'X is not defined',
    component: NotDefined,
    level: 'error',
    cause: '선언하거나 import하지 않은 이름을 썼다 (import 누락, 오타)',
    fix: '맨 위 import 줄 확인. 이름 철자 확인',
  },
  {
    id: 'undefined-map',
    label: "Cannot read properties of undefined (reading 'map')",
    component: UndefinedMap,
    level: 'error',
    cause: '배열이어야 할 값이 아직 undefined다 (서버 데이터가 오기 전, 속성 이름 틀림)',
    fix: '초기값을 []로, 또는 user.posts?.map / (user.posts ?? []).map, 로딩 처리',
  },
  {
    id: 'object-child',
    label: 'Objects are not valid as a React child',
    component: ObjectChild,
    level: 'error',
    cause: '객체를 JSX에 통째로 넣었다',
    fix: 'user.name 처럼 필요한 값만 꺼내서 렌더링',
  },
  {
    id: 'too-many',
    label: 'Too many re-renders',
    component: TooManyRenders,
    level: 'error',
    cause: '렌더링 중에 setState가 실행된다 (onClick={fn()} 실수가 대표적)',
    fix: 'onClick={() => fn()} 처럼 함수로 감싸기',
  },
  {
    id: 'missing-key',
    label: 'Each child in a list should have a unique "key" prop',
    component: MissingKey,
    level: 'warning',
    cause: 'map으로 만든 목록에 key가 없다',
    fix: '<li key={item.id}> — index 말고 고유한 id',
  },
  {
    id: 'uncontrolled',
    label: 'A component is changing an uncontrolled input to be controlled',
    component: UncontrolledToControlled,
    level: 'warning',
    cause: 'value의 초기값이 undefined였다가 문자열이 됐다',
    fix: "useState('') 처럼 빈 문자열로 시작",
  },
]

const REPORT_TEMPLATE = `[상황] TodoList 화면에서 [추가] 버튼을 누르면 화면이 하얗게 된다.
[에러 메시지] (F12 Console의 빨간 메시지를 통째로 복사)
TypeError: Cannot read properties of undefined (reading 'map')
    at TodoList (TodoList.jsx:12:20)
[기대 동작] 할 일이 목록 맨 아래에 추가되어야 한다.
[관련 파일] src/projects/todo/ai/MyTodo.jsx
원인을 먼저 설명하고, 고친 코드를 보여 줘.`

export default function Debugging() {
  const [selected, setSelected] = useState(null)
  const [runCount, setRunCount] = useState(0)
  const current = ERRORS.find((item) => item.id === selected)
  const Broken = current?.component

  function handleRun(id) {
    setSelected(id)
    setRunCount(runCount + 1)
  }

  return (
    <div className="stack">
      <div className="box">
        <h3>자주 보는 에러 실행해 보기 — 누르고 F12 Console도 함께 보세요</h3>
        <div className="row">
          {ERRORS.map((item) => (
            <button
              key={item.id}
              className={`btn ${item.id === selected ? 'primary' : ''}`}
              onClick={() => handleRun(item.id)}
            >
              {item.level === 'error' ? '🔴' : '🟡'} {item.label.length > 34 ? item.label.slice(0, 34) + '…' : item.label}
            </button>
          ))}
        </div>

        {current && (
          <div className="stack" style={{ marginTop: 16 }}>
            <ErrorBoundary key={runCount}>
              <div className="box">
                <Broken />
                {current.level === 'warning' && (
                  <p className="hint">화면은 정상처럼 보인다 → 노란 경고는 Console에서만 보인다</p>
                )}
              </div>
            </ErrorBoundary>
            <table className="table">
              <tbody>
                <tr>
                  <th style={{ width: 90 }}>메시지</th>
                  <td>
                    <code>{current.label}</code>
                  </td>
                </tr>
                <tr>
                  <th>원인</th>
                  <td>{current.cause}</td>
                </tr>
                <tr>
                  <th>고치기</th>
                  <td>{current.fix}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="box">
        <h3>화면에 안 뜨는 에러 — 터미널 · 브라우저 전체 화면</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <code>Failed to resolve import &quot;./EffectLog&quot;</code>
              </td>
              <td>파일 경로 · 이름이 틀렸다. Windows · macOS는 대소문자를 구분하지 않아 같은 폴더에 대소문자만 다른 파일이 있으면 엉뚱한 파일을 불러온다</td>
            </tr>
            <tr>
              <td>
                <code>does not provide an export named &apos;default&apos;</code>
              </td>
              <td>export default 가 없는 파일을 import X from 으로 불러왔다 → import {'{ X }'} 인지 확인</td>
            </tr>
            <tr>
              <td>
                <code>npm ERR! / command not found</code>
              </td>
              <td>프로젝트 폴더가 아닌 곳에서 실행했거나 npm install을 안 했다</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="note">
        <h3>React DevTools (Chrome 확장 프로그램 &quot;React Developer Tools&quot;)</h3>
        <ul>
          <li>F12 → ⚛️ Components 탭 → 컴포넌트를 클릭하면 props · state · hooks가 보인다</li>
          <li>state 값을 직접 고쳐 보면 화면이 바로 바뀐다 → &quot;값 문제인지 화면 문제인지&quot; 구분</li>
          <li>⚙️ 설정 → Highlight updates when components render → 다시 그려지는 컴포넌트가 깜빡인다</li>
        </ul>
      </div>

      <CopyBox title="AI에게 에러를 전달하는 템플릿" text={REPORT_TEMPLATE} />
    </div>
  )
}
