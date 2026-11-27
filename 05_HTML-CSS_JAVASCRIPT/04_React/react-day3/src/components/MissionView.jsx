import { useState } from 'react'
import { getSource } from '../sources'
import SourceView from './SourceView'
import ErrorBoundary from './ErrorBoundary'

function getBrief(source) {
  const lines = []
  for (const line of source.split('\n')) {
    if (!line.startsWith('//')) break
    lines.push(line.replace(/^\/\/ ?/, ''))
  }
  return lines.join('\n')
}

export default function MissionView({ mission }) {
  const [view, setView] = useState('mine')

  const Mine = mission.component
  const Answer = mission.answer

  return (
    <div className="mission">
      <div className="mission-brief">
        <p className="mission-file">
          ✏️ VS Code에서 <code>src/{mission.file}</code> 를 열고 TODO를 채우세요. 저장하면
          아래 화면이 바로 바뀝니다. <b>CSS는 신경 쓰지 마세요</b> — className 없이 태그만
          써도 됩니다.
        </p>
        <pre>{getBrief(getSource(mission.file))}</pre>
      </div>

      <div className="source-tabs">
        <button className={view === 'mine' ? 'active' : ''} onClick={() => setView('mine')}>
          내 코드 실행 결과
        </button>
        {Answer && (
          <>
            <button
              className={view === 'answer' ? 'active' : ''}
              onClick={() => setView('answer')}
            >
              정답 실행 결과
            </button>
            <button
              className={view === 'answer-code' ? 'active' : ''}
              onClick={() => setView('answer-code')}
            >
              정답 코드
            </button>
          </>
        )}
      </div>

      {view === 'mine' && (
        <section className="demo bare">
          <ErrorBoundary>
            <Mine />
          </ErrorBoundary>
        </section>
      )}
      {view === 'answer' && (
        <section className="demo bare">
          <ErrorBoundary>
            <Answer />
          </ErrorBoundary>
        </section>
      )}
      {view === 'answer-code' && <SourceView files={mission.answerFiles} />}
    </div>
  )
}
