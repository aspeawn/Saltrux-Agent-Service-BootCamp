// 암묵적 타입 변환

// 문자열로 변환

// +는 하나라도 문자열이면 '연결'로 동작
console.log(10+"20");   //1020
console.log(10-"5");    //5

// 숫자로 변환
console.log('10' * 5);  //50
console.log(10 * "JavaScript"); //NaN

// JavaScript Truty와 Falsy : Boolean


// Falsy값 6개 제외 나머지는 Truthy값임.
// Falsy : false, 0, '', null, undefined, NaN -> False로 취급됨
// Truthy : 그 외 나머지

var variable = "JavaScript";

variable = null;
variable = [];  // 빈 배열
variable = {};  // 빈 객체
if (variable) {
    console.log("Truthy 참");
} else {
    console.log("Falsy 없으면 거짓");
}

// 비교