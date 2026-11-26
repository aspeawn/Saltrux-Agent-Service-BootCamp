import { useReducer } from 'react'

const products = [
  { id: 1, name: '키보드', price: 50000 },
  { id: 2, name: '마우스', price: 30000 },
  { id: 3, name: '모니터', price: 250000 },
]

const initialState = {
  items: [],
  lastAction: null,
}

/**
 * useReducer : state를 바꾸는 방법이 여러가지일 때 로직이 복잡해지면 이걸 한곳에 모으는 역할
 * 
 * reducer 규칙
 * - 순수함수 : 같은 입력이면 같은 결과
 * - state를 고치지말고 새배열/새객체를 반환
 * - 컴포넌트 밖에서 reducer를 작성한다.
 * 
 * action
 * - 무슨일이 일어났는지를 적은 객체
 *    action안의 필드
 *    - type : 일의 이름(문자열). reducer가 switch로 나누는 기준
 *    - 그외 필드 : 처리를 하기위해 필요한 데이터(payload) -> 사용자가 넣음
 * 
 * dispatch
 * - useReducer가 돌려주는 함수. action을 reducer에게 전달하는 역할
 * - 컴포넌트가 state를 직접안바꾸고 dispath를 부름
 * 
 * dispatch(action) => reducer(현재 state, action) 호출 -> action에서 반환되는 값으로 state 변경 -> 리렌더링
 */
function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const exists = state.items.find((item) => item.id === action.product.id)
      const items = exists
        ? state.items.map((item) =>
            item.id === action.product.id ? { ...item, qty: item.qty + 1 } : item,
          )
        : [...state.items, { ...action.product, qty: 1 }]
      return { items, lastAction: action }
    }
    case 'decrease': {
      const items = state.items
        .map((item) => (item.id === action.id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
      return { items, lastAction: action }
    }
    case 'remove':
      return { items: state.items.filter((item) => item.id !== action.id), lastAction: action }
    case 'clear':
      return { items: [], lastAction: action }
    default:
      throw new Error(`알 수 없는 action: ${action.type}`)
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const total = state.items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="stack">
      <div className="row" style={{ alignItems: 'flex-start' }}>
        <div className="box" style={{ flex: 1 }}>
          <h3>상품</h3>
          {products.map((product) => (
            <div key={product.id} className="row" style={{ justifyContent: 'space-between', marginBottom: 6 }}>
              <span>
                {product.name} · {product.price.toLocaleString()}원
              </span>
              <button className="btn" onClick={() => dispatch({ type: 'add', product })}>
                담기
              </button>
            </div>
          ))}
        </div>

        <div className="box" style={{ flex: 1 }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3 style={{ margin: 0 }}>장바구니</h3>
            <button className="btn" onClick={() => dispatch({ type: 'clear' })} disabled={state.items.length === 0}>
              비우기
            </button>
          </div>
          {state.items.length === 0 && <p className="hint">비어 있습니다.</p>}
          {state.items.map((item) => (
            <div key={item.id} className="row" style={{ justifyContent: 'space-between', margin: '6px 0' }}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span className="row">
                <button className="btn" onClick={() => dispatch({ type: 'decrease', id: item.id })}>
                  -
                </button>
                <button className="btn" onClick={() => dispatch({ type: 'add', product: item })}>
                  +
                </button>
                <button className="btn" onClick={() => dispatch({ type: 'remove', id: item.id })}>
                  삭제
                </button>
              </span>
            </div>
          ))}
          <p style={{ marginTop: 8 }}>
            합계 <b>{total.toLocaleString()}원</b>
          </p>
        </div>
      </div>

      <div className="box">
        <h3>마지막으로 dispatch된 action</h3>
        <div className="cmd">{state.lastAction ? JSON.stringify(state.lastAction) : '아직 없음'}</div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>useState</th>
            <th>useReducer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>어울리는 state</td>
            <td>단순한 값 (숫자, 문자열, 토글)</td>
            <td>여러 방식으로 바뀌는 객체·배열</td>
          </tr>
          <tr>
            <td>변경 로직 위치</td>
            <td>이벤트 핸들러 곳곳</td>
            <td>reducer 한곳</td>
          </tr>
          <tr>
            <td>디버깅</td>
            <td>어디서 바꿨는지 찾아야 함</td>
            <td>action을 보면 무슨 일이 있었는지 보인다</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
