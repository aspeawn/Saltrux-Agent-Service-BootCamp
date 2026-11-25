// [실습용 시작 파일] 1일차 실습 ① 프로필 카드
// 이 파일을 열고 TODO를 차례대로 채워 보세요. 저장하면 화면이 바로 바뀝니다.
//
// 목표 화면: 사람마다 카드 한 장 (아바타 · 이름 · 직무 · 소개 · 기술 태그)
//
// 스타일은 이미 준비되어 있다 → ../ProfileCard.module.css
//   사용할 클래스: grid, card, avatar, status, online, name, job, bio, skills, skill
import styles from "../ProfileCard.module.css";
import { profiles } from "../data";

// TODO 1. ProfileCard 컴포넌트를 만든다
//   - props로 name, job, bio, emoji, color, skills, isOnline 을 받는다 (구조 분해 할당)
//   - <article className={styles.card}> 로 감싼다
function ProfileCard({
  name,
  job,
  bio,
  emoji,
  color,
  skills = [],
  isOnline,
} = {}) {
  return (
    <article className={styles.card}>
      {/* TODO 2. 아바타: emoji를 보여 주고, 배경색은 style={{ background: color }} */}
      <div className={styles.avatar} style={{ background: color }}>
        {emoji}
        {isOnline && <span className={`${styles.status} ${styles.online}`} />}
      </div>

      {/* TODO 3. 이름(h3.name), 직무(p.job), 소개(p.bio)를 props로 바꾼다 */}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.job}>{job}</p>
      <p className={styles.bio}>{bio}</p>

      {/* TODO 4. skills 배열을 map으로 돌려 <li className={styles.skill}> 로 그린다 (key 잊지 말기!) */}
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      {/* TODO 5. isOnline이 true면 아바타 안에 초록 점을 보여 준다
            <span className={`${styles.status} ${isOnline ? styles.online : ''}`} /> */}
    </article>
  );
}

export default function ProfileCardStart() {
  console.log("사용할 데이터:", profiles);

  return (
    <div className={styles.grid}>
      {/* TODO 6. profiles를 map으로 돌며 ProfileCard를 여러 장 그린다
            <ProfileCard key={profile.id} name={profile.name} ... />
            힌트: {...profile} 로 한 번에 넘길 수도 있다 
            profiles는 위에서 import로 받아옴*/} 
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  );
}

// ⭐ 도전 과제
//   - 카드마다 [+ 팔로우] 버튼을 만들고, 누르면 [✓ 팔로잉]으로 바뀌게 하기 (useState)
//     스타일: styles.followButton, styles.following
//   - 온라인인 사람만 보기 체크박스 만들기 (filter)
