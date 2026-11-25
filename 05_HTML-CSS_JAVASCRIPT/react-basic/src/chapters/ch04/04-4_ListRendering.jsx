import { useState } from 'react'
/**
 * 배열 데이터 -> map() -> JSX 배열 -> 화면에 그려지게
 */

const students = [
  { id: 1, name: '김철수', major: '컴퓨터공학', score: 92 },
  { id: 2, name: '이영희', major: '디자인', score: 78 },
  { id: 3, name: '박민수', major: '컴퓨터공학', score: 85 },
  { id: 4, name: '최지우', major: '경영학', score: 64 },
  { id: 5, name: '정하늘', major: '디자인', score: 97 },
]

function StudentRow({ student }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.major}</td>
      <td className={student.score >= 80 ? 'good' : ''}>{student.score}</td>
    </tr>
  )
}

export default function ListRendering() {
  const [onlyHigh, setOnlyHigh] = useState(false)

  const skills = ['HTML', 'CSS', 'JavaScript', 'React']

  const visibleStudents = onlyHigh
    ? students.filter((student) => student.score >= 80)
    : students

  return (
    <div className="stack">
      <div className="box">
        <h3>문자열 배열</h3>
        <ul style={{ margin: 0 }}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="box">
        <h3>객체 배열 + filter</h3>
        <label className="row" style={{ marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={onlyHigh}
            onChange={(e) => setOnlyHigh(e.target.checked)}
          />
          80점 이상만 보기
        </label>
        <table className="table">
          <thead>
            <tr>
              <th>이름</th>
              <th>전공</th>
              <th>점수</th>
            </tr>
          </thead>
          <tbody>
            {/* student를 하나씩 꺼내서 StudentRow 객체를 만든다. 
                key를 하나씩 꺼내서 만듬*/}
            {visibleStudents.map((student) => (
              <StudentRow key={student.id} student={student} />
            ))}
          </tbody>
        </table>
        <p className="hint" style={{ marginTop: 8 }}>
          {visibleStudents.length}명 표시 중 / 평균{' '}
          {Math.round(
            visibleStudents.reduce((sum, s) => sum + s.score, 0) / visibleStudents.length,
          )}
          점
        </p>
      </div>
    </div>
  )
}
