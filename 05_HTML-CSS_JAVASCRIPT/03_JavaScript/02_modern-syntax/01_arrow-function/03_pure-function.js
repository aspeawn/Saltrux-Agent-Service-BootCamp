/**
 * 순수함수(pure function) -> 콜백함수같이 넘겨지는 함수가 갖춰야할 성질
 * 1. 같은 인자를 넣으면 언제나 같은 값을 반환한다. (외부 상태에 의존하지 않는다.)
 * 2. 함수바깥의 어떤것도 바꾸지 않는다. (부수 효과가 없다.)
 *
 * - 부수효과 (side effiect)
 * : 함수가 반환값을 만드는 것 이외에 다른 영향을 주는 흔적
 * (외부 변수 변경, 인수로 받은 객체, 배열의 변경, console.log, 화면변경, 서버요청)
 */

const add = (a, b) => a + b; // 순수함수

// 비순수 함수 : 외부 변수에 의존함 -> rate가 바뀌면 반환값도 바뀌기 때문
let rate = 0.1;
const multipleRate = (price) => price + price * rate;

console.log(multipleRate(5));

rate = 0.2;
console.log(multipleRate(5));

// 해당 비순수 함수를 순수함수로 바꾸기
// const multipleRate2 = (price, rate) => price + price*rate;

// 비순수함수 : 외부변수를 바꿈
let visitCount = 0;
const visit = () => {
  visitCount++;
  return visitCount;
};

// 비순수 : 인자로 받은 배열을 변경 
const addItem = (list, item) => {
  list.push(item);
  return list;
};

// 순수 : 1. 예측이 가능함 -> 순수함수만 읽어도 결과를 앎  2. 안전하게 재사용, 조립이 가능해짐
// 콜백함수를 쓸 때는 순수함수를 쓰자!  
// 그럼 비순수함수는 쓰면 안되나? 
// => 비순수 함수는 다른 곳에서 쓸 수 밖에 없음 (상태를 만들고 그걸 컨트롤할 때 외부 변수를 사용하기마련)
//  즉 함수를 넘기는 콜백에서는 비순수 쓰기
const addItemPure = (list, item) => {
  // concat : 새로운 리스트를 만들어 내용들을 합쳐줌.
  list.concat(item);
};
