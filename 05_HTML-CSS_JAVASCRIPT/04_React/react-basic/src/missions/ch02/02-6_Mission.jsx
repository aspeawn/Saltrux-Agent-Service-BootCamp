// 미션 02-6. 블로그 화면 조립하기 — 컴포넌트 합성
//
// 목표: 아래 컴포넌트 트리대로 작은 컴포넌트를 만들어 조립한다.
//
//   Mission (블로그 페이지)
//   ├── Header
//   │   ├── Logo       <h2>리액트 블로그</h2>
//   │   └── Menu       <nav> 버튼 3개: 홈 / 글 목록 / 소개 </nav>
//   ├── PostList
//   │   ├── Post       <article> <h4>제목</h4> <p>내용 한 줄</p> </article>
//   │   ├── Post
//   │   └── Post
//   └── Footer         <footer><small>© 2026 리액트 블로그</small></footer>
//
// 순서
//   1. Menu 를 만들고 Header 안에서 <Logo /> 아래에 쓴다. (Header, Logo는 만들어 두었다)
//   2. Post 를 만들고, PostList 를 만들어 그 안에서 <Post /> 를 3번 쓴다.
//   3. Footer 를 만든다.
//   4. Mission 에서 <Header /> <PostList /> <Footer /> 를 조립한다.
//
// Post 3개의 내용이 전부 똑같다 → 글마다 다르게 하려면? 다음 단원 Props에서!

function Logo() {
  return <h2>리액트 블로그</h2>
}

function Header() {
  return (
    <header>
      <Logo />
      {/* TODO 1. <Menu /> 를 여기에 */}
      <Menu />
    </header>
  )
}

// TODO 1. Menu 컴포넌트
function Menu() {
  return (
    <nav> 버튼 3개: 홈 / 글 목록 / 소개 </nav>
  )
}

// TODO 2. Post 컴포넌트, PostList 컴포넌트
function Post() {
  return (
    <article> 
    <h4>제목</h4> 
    <p>내용 한 줄</p>
    </article>
  )
}

function PostList() {
  return (
    <post/>
)

}

// TODO 3. Footer 컴포넌트

export default function Mission() {
  return (
    <div>
      <Header />
      {/* TODO 4. <PostList /> 와 <Footer /> 를 조립하세요 */}
    </div>
  )
}
