const commands = [
  ['node -v', 'Node.js 설치 및 버전 확인 (LTS 버전 권장)'],
  ['npm -v', 'npm 버전 확인'],
  ['npm install', 'package.json에 적힌 패키지를 모두 설치 → node_modules 폴더 생성'],
  ['npm install axios', '패키지 추가 설치 → dependencies에 기록 (3일차에 사용)'],
  ['npm install -D 패키지명', '개발할 때만 필요한 패키지 → devDependencies에 기록'],
  ['npm run dev', 'package.json의 "scripts" 중 dev 실행 → 개발 서버 시작'],
  ['npm run build', '배포용 파일 만들기 → dist 폴더 생성 (4일차)'],
]

export default function NodeNpm() {
  return (
    <div className="stack">
      <div className="note">
        <h3>왜 Node.js가 필요할까?</h3>
        <ul>
          <li>JSX는 브라우저가 바로 이해하지 못한다 → 변환(빌드) 도구가 필요하다</li>
          <li>그 도구(Vite)가 Node.js 위에서 실행된다</li>
          <li>React, React Router, Zustand, Axios 같은 라이브러리를 npm으로 설치한다</li>
        </ul>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 220 }}>명령어</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {commands.map(([cmd, desc]) => (
            <tr key={cmd}>
              <td>
                <code>{cmd}</code>
              </td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="note">
        <h3>package.json 과 node_modules</h3>
        <ul>
          <li>
            <b>package.json</b>: 프로젝트 이름, 실행 스크립트, 필요한 패키지 목록이 적힌
            "명세서"
          </li>
          <li>
            <b>package-lock.json</b>: 실제 설치된 정확한 버전 기록 (모두 같은 버전을 쓰게
            해 준다)
          </li>
          <li>
            <b>node_modules</b>: 실제 패키지 파일. 용량이 커서 공유·제출할 때는 빼고,
            받은 사람이 <code>npm install</code>로 다시 만든다
          </li>
        </ul>
      </div>
    </div>
  )
}
