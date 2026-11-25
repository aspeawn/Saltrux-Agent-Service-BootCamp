const tree = `my-react-app/
├── node_modules/     설치된 패키지 (직접 수정하지 않는다)
├── public/           그대로 복사되는 정적 파일 (favicon 등)
├── src/              ★ 우리가 코드를 작성하는 곳
│   ├── assets/       import해서 쓰는 이미지 등
│   ├── App.jsx       최상위 컴포넌트
│   ├── App.css
│   ├── index.css     전역 스타일
│   └── main.jsx      시작점: App을 #root에 그린다
├── index.html        SPA의 단 하나뿐인 HTML
├── package.json      프로젝트 정보·스크립트·의존성
└── vite.config.js    Vite 설정`

const flow = `index.html
  └─ <div id="root"></div>
  └─ <script type="module" src="/src/main.jsx">
        main.jsx
          └─ createRoot(document.getElementById('root'))
               .render(<App />)
                  App.jsx
                    └─ return ( ...화면... )`

export default function ProjectStructure() {
  return (
    <div className="stack">
      <div className="box">
        <h3>폴더 구조</h3>
        <div className="cmd">{tree}</div>
      </div>

      <div className="box">
        <h3>실행 흐름: index.html → main.jsx → App.jsx</h3>
        <div className="cmd">{flow}</div>
      </div>

      <div className="note">
        <h3>함께 열어 볼 파일 (이 프로젝트 기준)</h3>
        <ul>
          <li>
            <code>index.html</code> — body 안에 <code>div#root</code> 하나뿐이다
          </li>
          <li>
            <code>src/main.jsx</code> — <code>StrictMode</code>와{' '}
            <code>createRoot</code>
          </li>
          <li>
            <code>src/App.jsx</code> — 이 예제 뷰어 화면 (컴포넌트가 컴포넌트를 품고
            있다)
          </li>
        </ul>
      </div>
    </div>
  )
}
