/**
 * 다양한 데이터를 Props로 넘길 수 있다.
  title="React 입문"                  -> 문자열         ""
  --------------------------------------------------- 이 애라로는 {} 중괄호(표현식) 사용
  price={25000}                      -> 숫자
  isNew                              -> boolean       true는 생략 가능  isNew={false}
  tags={["React", "JSX", "Props"]}   -> 배열
  author={author}                    -> 객체
  onBuy={handleBuy}                  -> 함수
*/

function BookCard(props) {
  return (
    <div className="box" style={{ flex: "1 1 260px" }}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h3 style={{ margin: 0 }}>{props.title}</h3>
        {props.isNew && <span className="badge">NEW</span>}
      </div>
      <p>{props.price.toLocaleString()}원</p>
      <p className="hint">
        저자: {props.author.name} ({props.author.job})
      </p>
      <p className="hint">태그: {props.tags.join(", ")}</p>
      <button
        className="btn primary"
        style={{ marginTop: 8 }}
        onClick={props.onBuy}
      >
        구매하기
      </button>
    </div>
  );
}

export default function PassingProps() {
  function handleBuy() {
    alert("구매 버튼을 눌렀습니다!");
  }

  const author = { name: "김리액트", job: "강사" };

  return (
    <div className="row" style={{ alignItems: "stretch" }}>
      <BookCard
        title="React 입문"
        price={25000}
        isNew
        tags={["React", "JSX", "Props"]}
        author={author}
        onBuy={handleBuy}
      />
      <BookCard
        title="JavaScript 기초"
        price={18000}
        isNew={false}
        tags={["ES6", "함수"]}
        author={{ name: "이자바", job: "개발자" }}
        onBuy={handleBuy}
      />
    </div>
  );
}
