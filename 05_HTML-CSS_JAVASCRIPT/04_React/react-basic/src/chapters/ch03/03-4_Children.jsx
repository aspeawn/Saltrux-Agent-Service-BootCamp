/**
 * 컴포넌트 태그 사이에 넣은 내용은 props.children으로 전달됨 
 * 
 * 모양은 같고, 내용은 다른 컴포넌트들을 사용할 때 많이 사용
 * (카드, 모달, 레이아웃, 버튼 등)
 */
function Card({ title, children }) {
  return (
    <div className="box" style={{ flex: '1 1 240px' }}>
      {/* 공지사항 */}
      <h3>{title}</h3>
      {/* 오늘배운것, 알림 */}
      {children}
    </div>
  )
}

function Alert({ type = 'info', children }) {
  const colors = {
    info: { background: '#e6f7ff', color: '#087ea4' },
    warning: { background: '#fff7e6', color: '#ad6800' },
    error: { background: '#fff1f0', color: '#d9363e' },
  }

  return (
    <div style={{ ...colors[type], padding: '10px 14px', borderRadius: 8 }}>
      {children}
    </div>
  )
}

export default function Children() {
  return (
    <div className="stack">
      <div className="row" style={{ alignItems: 'stretch' }}>
        {/* 텍스트를 children */}
        <Card title="공지사항">내일은 Hooks를 배웁니다.</Card>

        <Card title="오늘 배운 것">
          {/* 여러 요소를 children */}
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>JSX</li>
            <li>Component</li>
            <li>Props</li>
          </ul>
        </Card>

        <Card title="알림">
          <Alert type="warning">과제 제출은 오늘 18시까지!</Alert>
        </Card>
      </div>

      <div className="stack">
        <Alert>정보: 저장되었습니다.</Alert>
        <Alert type="error">
          <b>오류:</b> 네트워크 연결을 확인하세요.
        </Alert>
      </div>
    </div>
  )
}
