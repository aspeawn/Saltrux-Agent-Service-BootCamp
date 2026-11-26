// 미션 03-2. 상품 카드 — 여러 타입의 Props 넘기기
//
// 목표: 문자열 · 숫자 · 불리언 · 배열 · 함수를 props로 넘겨 본다.
//
//   <Product
//     name="무선 키보드"            문자열 → 따옴표 " "
//     price={39000}               숫자   → 중괄호 { }
//     isNew                       불리언 → true는 이름만 써도 된다
//     colors={['블랙', '화이트']}   배열
//     onBuy={handleBuy}            함수
//   />
//
// 순서
//   1. Mission 의 <Product /> 에 위 props 5개를 넘긴다.
//   2. Product 안에서 이름과 가격을 보여 준다.
//        가격: {props.price.toLocaleString()}원   → 39,000원
//   3. props.isNew 가 true 이면 이름 앞에 '[NEW] ' 을 붙인다 (삼항 연산자)
//   4. 색상: {props.colors.join(' / ')}
//   5. [구매] 버튼에 onClick={props.onBuy} 를 연결한다.
//   6. 다른 상품으로 <Product /> 를 하나 더 만든다 (이번엔 isNew 없이)
//
// 확인: [구매] 를 누르면 F12 콘솔에 "구매 버튼 클릭!" 이 찍힌다.

// TODO 2~5
function Product(props) {
  return (
    <article>
      <h3 className="box">
        상품 이름 : {props.isNew ? `[NEW] ${props.name}` : props.name}
      </h3>
      <p>가격: {props.price}원</p>
      <p>색상: {props.colors.join(" / ")} </p>
      <button onClick={props.onBuy}>구매</button>
    </article>
  );
}

export default function Mission() {
  function handleBuy() {
    console.log("구매 버튼 클릭!");
  }

  return (
    <div>
      {/* TODO 1. props 5개를 넘기세요 */}
      {/* <Product /> */}
      <Product
        name="무선 키보드"
        price={39000}
        isNew
        colors={["블랙", "화이트"]}
        onBuy={handleBuy}
      />

      {/* TODO 6. 상품 하나 더 */}
      <Product
        name="무선 키보드"
        price={39000}
        isNew={false}
        colors={["블랙", "화이트"]}
        onBuy={handleBuy}
      />
    </div>
  );
}
