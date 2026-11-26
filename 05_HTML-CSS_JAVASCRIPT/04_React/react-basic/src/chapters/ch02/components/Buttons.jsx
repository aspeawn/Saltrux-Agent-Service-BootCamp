// 재사용하기 위한 컴포넌트들
// -> 특정 화면에 보여지는 컴포넌트 중에서 반복돼서 사용되는 것들
export function LikeButton() {
  return <button className="btn">❤️ 좋아요</button>
}

export function ShareButton() {
  return <button className="btn">🔗 공유</button>
}
