/* 문제 02. 배열 구조 분해 활용
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] splitName(fullName) : '홍 길동' 처럼 공백으로 구분된 이름을 받아 '성 : 홍, 이름 : 길동' 을 반환한다.
         split 의 결과를 구조 분해로 받는다.
   [2] left 와 right 의 값을 임시 변수 없이 한 줄로 맞바꾼다.
   [3] getHeadAndTail(list) : 첫 요소와 나머지 배열을 { head, tail } 객체로 반환한다. (rest 요소)
   [4] createState(initial) : React 의 useState 처럼 [현재 값을 돌려주는 함수, 값을 바꾸는 함수] 배열을 반환한다.
         반환값을 구조 분해로 받아서 사용한다. (힌트 : 클로저)
*/

// [1]
function splitName(fullName) {
  // TODO
  const [firstName, lastName] = fullName.split(" ");
  return `성 : ${firstName}, 이름 : ${lastName}`;
}
console.log(splitName("홍 길동")); // 기대 : 성 : 홍, 이름 : 길동

// [2]
let left = "왼쪽";
let right = "오른쪽";
// TODO : 구조분해로 한 줄로 맞바꾸기
[left, right] = [right, left];
console.log(left, right); // 기대 : 오른쪽 왼쪽
console.log(right, left);

// [3] 출력이 {} 라고해서 객체라고 판별하지말기
function getHeadAndTail(list) {
  // TODO
  const [head, ...tail] = list;
  return { head, tail };
}
console.log(getHeadAndTail([1, 2, 3, 4])); // 기대 : { head: 1, tail: [ 2, 3, 4 ] }

// [4]
function createState(initial) {
  // TODO
    let value = initial;
    const getState = () => value;
    const setState = (newValue) => { value = newValue; };
    return [getState, setState];
}

const [getCount, setCount] = createState(0);
console.log(getCount());   // 기대 : 0
setCount(5);
console.log(getCount());   // 기대 : 5
