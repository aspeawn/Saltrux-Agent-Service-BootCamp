import { useState } from 'react'
import { chapters, findLesson, firstLessonId } from './lessons'
import SourceView from './components/SourceView'
import MissionView from './components/MissionView'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function readHash() {
  const [id, tab] = decodeURIComponent(window.location.hash.slice(1)).split('/')
  const lesson = findLesson(id)
  if (!lesson) return { id: firstLessonId, tab: 'demo' }
  return { id, tab: tab === 'mission' && lesson.mission ? 'mission' : 'demo' }
}

export default function App() {
  const [currentId, setCurrentId] = useState(() => readHash().id)
  const [tab, setTab] = useState(() => readHash().tab)

  const lesson = findLesson(currentId)
  const Demo = lesson.component

  function handleSelect(id) {
    setCurrentId(id)
    setTab('demo')
    window.location.hash = id
  }

  function handleTab(nextTab) {
    setTab(nextTab)
    window.location.hash = nextTab === 'mission' ? `${currentId}/mission` : currentId
  }

  return (
    <div className="viewer">
      <aside className="sidebar">
        <h1 className="logo">
          React <span>DAY 2</span>
        </h1>
        {chapters.map((chapter) => (
          <nav key={chapter.title} className="chapter">
            <h2>{chapter.title}</h2>
            <ul>
              {chapter.lessons.map((item) => (
                <li key={item.id}>
                  <button
                    className={item.id === currentId ? 'active' : ''}
                    onClick={() => handleSelect(item.id)}
                  >
                    <span className="lesson-id">{item.label ?? item.id}</span>
                    <span className="lesson-title">{item.title}</span>
                    {item.mission && <span className="lesson-mission" title="미션 있음">🎯</span>}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </aside>

      <main className="content" key={lesson.id}>
        <header className="content-header">
          <div>
            <p className="eyebrow">{lesson.chapterTitle}</p>
            <h2>
              {lesson.label ? `${lesson.label} ` : `${lesson.id}. `}
              {lesson.title}
            </h2>
            <p className="file-path">
              src/{tab === 'mission' ? lesson.mission.file : lesson.files[0]}
            </p>
          </div>
          <div className="tabs">
            <button className={tab === 'demo' ? 'active' : ''} onClick={() => handleTab('demo')}>
              실행 결과
            </button>
            <button className={tab === 'code' ? 'active' : ''} onClick={() => handleTab('code')}>
              코드 보기
            </button>
            {lesson.mission && (
              <button
                className={tab === 'mission' ? 'active' : ''}
                onClick={() => handleTab('mission')}
              >
                🎯 미션
              </button>
            )}
          </div>
        </header>

        {tab === 'demo' && (
          <section className={lesson.bare ? 'demo bare' : 'demo'}>
            <ErrorBoundary>
              <Demo />
            </ErrorBoundary>
          </section>
        )}
        {tab === 'code' && <SourceView files={lesson.files} />}
        {tab === 'mission' && <MissionView mission={lesson.mission} />}
      </main>
    </div>
  )
}
