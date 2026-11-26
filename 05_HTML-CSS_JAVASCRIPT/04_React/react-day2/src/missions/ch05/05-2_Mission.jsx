// 🎯 미션 05-2. 프로필 수정하기 — 객체 state
// 🧩 패턴 — 객체 업데이트 (문법: 객체 spread)
//
// 목표: 객체 state의 "일부만" 바꾼다. 나머지 속성은 그대로 남아 있어야 한다.
//
// 순서
//   1. handleNameChange   : 이름 입력창에 입력하면 name만 바뀌게
//   2. handleJob          : 직업 버튼을 누르면 job만 그 값으로 바뀌게
//   3. handleGithubChange : sns 안의 github만 바뀌게 (객체 안의 객체!)
//
// 힌트
//   - 객체 spread { ...객체 } 로 기존 속성을 모두 복사한 뒤, 바꿀 속성만 덮어쓴다
//   - 3번은 바깥 객체(profile)와 안쪽 객체(sns)를 "둘 다" 복사해야 한다
//
// ✅ 확인: 아래 state 미리보기에서 바꾼 속성만 바뀌고, 나머지는 그대로 남아 있다
// ⚠️ 일부러 setProfile({ name: e.target.value }) 로 써 보자 → job, sns가 사라진다!
// 📖 막히면: 05-2 예제
import { useState } from "react";

export default function Mission() {
  const [profile, setProfile] = useState({
    name: "김리액트",
    job: "학생",
    sns: { github: "react-kim", blog: "react.blog" },
  });

  function handleNameChange(e) {
    // TODO 1
    setProfile({ ...profile, name: e.target.value });
    console.log("입력값:", e.target.value);
  }

  function handleJob(job) {
    // TODO 2
    setProfile({ ...profile, job: job });
    console.log("고른 직업:", job);
  }

  function handleGithubChange(e) {
    // TODO 3
    setProfile({ ...profile, sns: {...profile.sns, github:e.target.value} });
    console.log("입력값:", e.target.value);
  }

  return (
    <div>
      <h3>👤 프로필 수정</h3>
      <label>
        이름 <input value={profile.name} onChange={handleNameChange} />
      </label>
      <p>
        직업:
        {["학생", "개발자", "디자이너"].map((job) => (
          <button key={job} onClick={() => handleJob(job)}>
            {job}
          </button>
        ))}
      </p>
      <label>
        GitHub{" "}
        <input value={profile.sns.github} onChange={handleGithubChange} />
      </label>

      <article>
        <small>state 미리보기</small>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </article>
    </div>
  );
}
