/**
 *  콜백 함수
 * - 다른 함수에 인자로 전달되어, 그 함수가 대신 호출해주는 함수
 */

const sayHello = () => "안녕하세요";
console.log(typeof sayHello); // function
console.log(typeof sayHello()); // string

// 함수를 매개변수로 받음
function runTwice(str, callback) {
  console.log(callback(str));
  console.log(callback(str));
}

runTwice("굿모닝", sayHello);

runTwice("굿모닝", (str) => `안녕하세요 + ${str}`);

/**
 *  고차함수 : 함수를 인자로 받거나, 함수를 반환하는 함수
 */

// 반환된 함수 -> 자신이 생성될 때의 변수를 기억한다. (클로저)
function makeMultiplier(factor) {
  return function (n) {
    return n * factor; // factor -> Closure
  };
}

const double = makeMultiplier(2);

console.log(double(5));

const makeAdder = (x) => {
  return (y) => {
    return x + y;
  };
};

const makeAdd = (x) => (y) => x+y;
