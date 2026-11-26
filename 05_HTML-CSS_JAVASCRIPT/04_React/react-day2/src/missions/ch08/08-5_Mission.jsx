// 🎯 미션 08-5. 🐞 언어를 바꿔도 안 바뀌는 인사말 — 의존성 배열
// 📘 문법 — useEffect 의존성 배열
//
// 상황: AI가 만든 "인사말 탭 제목" 기능. 이름을 바꾸면 탭 제목이 바뀌는데,
//       언어를 바꾸면 탭 제목이 그대로다!
//
// 순서
//   1. 이름 버튼, 언어 버튼을 번갈아 눌러 보며 브라우저 탭 제목과 콘솔을 확인한다
//      → 어떤 버튼을 눌렀을 때 콘솔에 'effect 실행'이 안 찍히는가?
//   2. 원인을 찾는다: effect 안에서 쓰는 state를 모두 적어 보고, 🐞 의존성 배열과 비교한다
//   3. 의존성 배열을 고친다
//
// ✅ 확인: 이름 · 언어 어느 쪽을 바꿔도 탭 제목이 바로 바뀐다
// 💡 규칙: effect 안에서 쓰는 state · props는 모두 의존성 배열에 넣는다
// ⚠️ 반대로 effect 안에서 "의존성에 있는 state를 set" 하면 무한 반복이 된다 → AI 코드에서 자주 보는 실수
// 📖 막히면: 08-5 예제
// 🤖 AI에게 물어볼 때: "이 useEffect의 의존성 배열에 빠진 값이 있는지 확인해 줘"
import { useEffect, useState } from 'react'

const GREETINGS = { ko: '안녕하세요', en: 'Hello', ja: 'こんにちは' }

export default function Mission() {
  const [name, setName] = useState('리액트')
  const [lang, setLang] = useState('ko')

  useEffect(() => {
    console.log('effect 실행:', name, lang)
    document.title = `${GREETINGS[lang]}, ${name}!`
  }, [name, lang]) // 🐞

  return (
    <div>
      <h3>
        {GREETINGS[lang]}, {name}!
      </h3>
      <p>
        이름:
        {['리액트', '뷰', '스벨트'].map((item) => (
          <button key={item} onClick={() => setName(item)}>
            {item}
          </button>
        ))}
      </p>
      <p>
        언어:
        {Object.keys(GREETINGS).map((item) => (
          <button key={item} onClick={() => setLang(item)}>
            {item}
          </button>
        ))}
      </p>
      <small>👆 화면의 인사말과 브라우저 탭 제목을 비교해 보세요</small>
    </div>
  )
}
