/* 문제 09. [종합] 상태 변경 함수 만들기
   유형 : 코드 작성 | 난이도 : ★★★

   현재 상태(state)와 동작(action)을 받아 새 상태를 돌려주는 counter(state, action) 함수를 완성한다.
   (React 의 useReducer 에서 쓰는 형태와 같다)

     action.type 에 따라
       'increase' : state 에 action.amount 를 더한다. amount 가 없으면 1 을 더한다.
       'decrease' : state 에서 action.amount 를 뺀다. amount 가 없으면 1 을 뺀다.
                    단, 결과가 0 보다 작아지면 0 을 반환한다. (삼항 연산자 사용)
       'reset'    : 0 을 반환한다.
       그 외      : state 를 그대로 반환한다.

     action 자체가 없을 수도 있다. (옵셔널 체이닝 사용)
     amount 에 0 이 들어오면 0 을 더하거나 뺀다. (|| 와 ?? 중 무엇을 써야 할까?)
*/

function counter(state, action) {
  // TODO
  switch (action?.type) {
    case "increase":
      return state + (action?.amount ?? 1);

    case "decrease": {
      const result = state - (action?.amount ?? 1);
      return result < 0 ? 0 : result;
    }

    case "reset":
      return 0;

    default:
      return state;
  }
}

console.log(counter(10, { type: "increase", amount: 5 })); // 기대 : 15
console.log(counter(10, { type: "increase" })); // 기대 : 11
console.log(counter(10, { type: "increase", amount: 0 })); // 기대 : 10
console.log(counter(10, { type: "decrease", amount: 3 })); // 기대 : 7
console.log(counter(2, { type: "decrease", amount: 5 })); // 기대 : 0
console.log(counter(10, { type: "reset" })); // 기대 : 0
console.log(counter(10, { type: "unknown" })); // 기대 : 10
console.log(counter(10)); // 기대 : 10
