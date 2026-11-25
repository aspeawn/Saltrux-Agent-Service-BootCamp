// 미션 02-7. 준비된 CSS Modules 연결하기
//
// 목표: CSS는 이미 다 만들어 두었다. "연결하는 방법"만 연습한다.
//   스타일 파일: src/missions/ch02/02-7_Mission.module.css (열어서 클래스 이름만 확인)
//
// 순서
//   1. 맨 위에 import styles from './02-7_Mission.module.css' 를 추가한다.
//   2. <article> 에 className={styles.ticket} 를 붙인다.
//   3. <h3> 에 className={styles.title} 를 붙인다.
//   4. 좌석 <span> 에 className={styles.seat} 를 붙인다.
//   5. 가격 <p> 에는 인라인 스타일로 글자 색을 바꾼다 → style={{ color: 'crimson' }}
//      (바깥 { } = JavaScript 시작, 안쪽 { } = 객체)
//
// 확인: F12 → Elements 에서 클래스 이름이 _ticket_ab12c 처럼 바뀌어 있다.
//    → 다른 파일의 .ticket 과 절대 겹치지 않는다 = CSS Modules

// TODO 1. styles 를 import 하세요

export default function Mission() {
  return (
    // TODO 2~5. className, style 을 붙이세요
    <article>
      <h3>React 콘서트</h3>
      <p>
        좌석 <span>A-12</span>
      </p>
      <p>₩ 55,000</p>
    </article>
  )
}
