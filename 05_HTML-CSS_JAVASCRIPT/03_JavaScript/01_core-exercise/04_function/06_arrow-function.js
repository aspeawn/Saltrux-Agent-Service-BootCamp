/* 문제 06. 화살표 함수로 바꾸기
   유형 : 코드 수정 | 난이도 : ★★☆

   아래 함수 표현식들을 화살표 함수로 바꾼다. 생략할 수 있는 것은 최대한 생략한다.
     - 몸체가 표현식 하나면 중괄호와 return 을 생략한다.
     - 매개변수가 하나면 소괄호를 생략한다.
     - 객체를 반환할 때는 소괄호로 감싼다.
*/

// TODO : 아래 다섯 함수를 화살표 함수로 바꾼다.

const sayHi = function () {
    return '안녕하세요!';
};

const square = function (n) {
    return n * n;
};

const add = function (a, b) {
    return a + b;
};

const isAdult = function (age) {
    return age >= 19;
};

const makePoint = function (x, y) {
    return { x: x, y: y };
};

console.log(sayHi());           // 기대 : 안녕하세요!
console.log(square(7));         // 기대 : 49
console.log(add(2, 3));         // 기대 : 5
console.log(isAdult(20));       // 기대 : true
console.log(makePoint(3, 4));   // 기대 : { x: 3, y: 4 }
