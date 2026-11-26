// 🎯 미션 08-11. 🐞 에러 사다리 — 에러를 하나 고치면 다음 에러가 나온다
// 🛠️ 도구 — 에러 메시지 읽기
//
// 상황: AI가 만든 "내 프로필" 화면. 에러가 5개 숨어 있다.
//       화면에 뜬 에러 메시지를 읽고 → 원인을 찾고 → 고치고 → 저장하면 다음 에러가 나온다.
//
// 읽는 법: 에러 메시지 + F12 콘솔의 "at 컴포넌트이름 (파일:줄번호)" → 어느 컴포넌트인지부터 찾는다
//
//   🔴 1단계  formatDate is not defined
//            → 쓰기만 하고 만든 적은 없는 함수다. 날짜 문자열을 받아 보기 좋은 날짜로 돌려주는 함수를 만들자
//              힌트: new Date(문자열) 로 만든 날짜에는 toLocaleDateString() 이 있다
//   🔴 2단계  Cannot read properties of undefined (reading 'map')
//            → undefined 에 .map 을 했다. 무엇이 undefined 인지 위의 user 객체와 비교해 보자
//              힌트: 값이 없을 때는 빈 배열로 대신 쓰면 된다 (?? 또는 ?.)
//   🔴 3단계  Objects are not valid as a React child
//            → JSX의 { } 안에 객체를 통째로 넣었다. 객체 안에서 화면에 보여 줄 값만 꺼내자
//   🔴 4단계  Too many re-renders
//            → onClick 에 "함수"가 아니라 "함수를 실행한 결과"를 넣었다. 그래서 렌더링할 때마다 set이 실행된다
//              힌트: 클릭했을 때 실행될 "함수"를 넘겨야 한다
//   🟡 5단계  (화면은 나오는데) 콘솔에 Each child in a list should have a unique "key" prop
//            → map으로 만든 목록 요소에 key가 없다. 이 목록에서는 어떤 값을 key로 쓸 수 있을까?
//
// ✅ 확인: 화면이 모두 나오고, 콘솔에 빨간 · 노란 메시지가 하나도 없다
// 🤖 막히면 AI에게: 에러 메시지 통째로 + "어떤 컴포넌트에서 났는지" + "원인부터 설명해 줘"
import { useState } from 'react'

const user = {
  name: '김리액트',
  joined: '2026-11-24',
  level: { name: '새싹', icon: '🌱' },
  tags: ['React', 'Hooks', 'Vite'],
}

function ProfileHeader() {
  return (
    <article>
      <h3>👤 {user.name}</h3>
      <small>가입일: {formatDate(user.joined)}</small>
    </article>
  )
}

function PostList() {
  return (
    <article>
      <b>최근 글</b>
      <ul>
        {user.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </article>
  )
}

function LevelBadge() {
  return <p>등급: {user.level}</p>
}

function LikeButton() {
  const [liked, setLiked] = useState(false)
  return <button onClick={setLiked(!liked)}>{liked ? '❤️ 좋아요 취소' : '🤍 좋아요'}</button>
}

function TagList() {
  const items = user.tags.map((tag) => <li>#{tag}</li>)
  return <ul>{items}</ul>
}

export default function Mission() {
  return (
    <div>
      <ProfileHeader />
      <PostList />
      <LevelBadge />
      <LikeButton />
      <TagList />
    </div>
  )
}
