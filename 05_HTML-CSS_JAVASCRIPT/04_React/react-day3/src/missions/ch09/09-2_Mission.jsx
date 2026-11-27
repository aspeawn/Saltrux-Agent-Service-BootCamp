// 🎯 미션 09-2. 언어 설정을 Props 없이 — Context API
// 📘 문법 — createContext, <Context value>, useContext
//
// 상황: lang 하나를 쓰려고 Page → Card → Greeting · Footer 까지 props로 계속 내려보내고 있다 (Props Drilling)
// 목표: Context로 바꿔서 중간 컴포넌트(Page, Card)가 lang을 몰라도 되게 한다
//
// 순서
//   1. 파일 위쪽에 Context를 하나 만든다 (import에 createContext 추가, 기본값은 'ko')
//   2. Mission의 return 안에서 <Page /> 를 그 Context로 감싸고, value로 lang을 보낸다
//   3. Greeting과 Footer는 props 대신 useContext로 lang을 꺼낸다 (import에 useContext 추가)
//   4. Page, Card에서 lang props를 모두 지운다 (받는 쪽 · 넘기는 쪽 둘 다)
//   5. (도전) 언어 버튼을 Card 안으로 옮겨 본다
//      힌트: value로 lang 하나가 아니라 lang과 setLang을 담은 객체를 보내면 된다
//
// ✅ 확인: [언어] 버튼을 누르면 인사말이 바뀌고, Page · Card 코드에는 lang이 한 글자도 없다
// 📖 막히면: 09-2 예제
import { useState, createContext, useContext } from 'react'

const TEXT = {
  ko: { hello: '안녕하세요', bye: '안녕히 가세요' },
  en: { hello: 'Hello', bye: 'Goodbye' },
}

// TODO 1. Context 만들기
// const LanguageContext = createContext('ko')  언어버튼을 추가하기 위해 context 기본값을 
// lang 변수 하나만 전달하는 것이 아닌 함수 setLang도 내보낼 수 있는 객체로 만들기 (객체는 {} 감싸기 잊지말기)
const LanguageContext = createContext({lang: 'ko', setLang: () => {}})


function Greeting() {
  // TODO 3
  const {lang} = useContext(LanguageContext)
  return <h3>👋 {TEXT[lang].hello}, 리액트님!</h3>
}

function Footer() {
  // TODO 3
  const {lang} = useContext(LanguageContext)
  return <small>{TEXT[lang].bye}</small>
}

// TODO 4. 아래 두 컴포넌트에서 lang 지우기
      {/* Card의 버튼 클릭
→ Mission의 setLang 실행
→ Mission의 lang 변경
→ Provider의 value 갱신
→ Context를 사용하는 자식들이 새 lang으로 다시 렌더링 */}

function Card() {
  const { lang, setLang } = useContext(LanguageContext)
  return (
    <article>
      <button onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}>언어: {lang}</button>
      <Greeting />
      <Footer />
    </article>
  )
}

function Page() {
  return (
    <section>
      <small>Page</small>
      <Card />
    </section>
  )
}

export default function Mission() {
  const [lang, setLang] = useState('ko')

  return (
    <div>
      
      {/* TODO 2. Context로 감싸기 */}
      {/* <button onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}>언어: {lang}</button> */}
      <LanguageContext value = {{lang, setLang}}>
        <Page />
      </LanguageContext>
    </div>
  )
}
