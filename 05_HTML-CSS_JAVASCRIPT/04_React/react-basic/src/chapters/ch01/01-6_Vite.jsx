const createSteps = `# 1. 새 React 프로젝트 만들기 (질문이 나오면 React → JavaScript 선택)
npm create vite@latest my-react-app -- --template react

# 2. 프로젝트 폴더로 이동
cd my-react-app

# 3. 패키지 설치
npm install

# 4. 개발 서버 실행 → 브라우저에서 http://localhost:5173 접속
npm run dev`

export default function Vite() {
  return (
    <div className="stack">
      <div className="box">
        <h3>프로젝트 생성 순서</h3>
        <div className="cmd">{createSteps}</div>
      </div>

      <div className="note">
        <h3>HMR 체험하기</h3>
        <ul>
          <li>
            에디터에서 이 파일(<code>src/chapters/ch01/01-6_Vite.jsx</code>)을 연다
          </li>
          <li>아래 문장을 아무렇게나 고치고 저장(Ctrl/Cmd + S)한다</li>
          <li>새로고침하지 않아도 화면이 바로 바뀐다</li>
        </ul>
      </div>

      <div className="box">
        <p style={{ fontSize: 20 }}>✏️ 이 문장을 고쳐 보세요!</p>
      </div>

      <div className="note">
        <h3>자주 만나는 문제</h3>
        <ul>
          <li>
            <code>npm: command not found</code> → Node.js 설치 후 터미널(VS Code)을 다시
            연다
          </li>
          <li>
            포트 5173이 사용 중이면 Vite가 5174 등 다른 포트를 알려 준다 → 터미널 주소
            확인
          </li>
          <li>
            개발 서버 종료: 터미널에서 <code>Ctrl + C</code>
          </li>
        </ul>
      </div>
    </div>
  )
}
