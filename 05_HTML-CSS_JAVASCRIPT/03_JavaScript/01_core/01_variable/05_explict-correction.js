// 명시적 형변환
// - 암묵적 변환은 예측하기 어려워 명시적으로 실무에서 많이 사용함.

console.log(String(10));            // "10"
console.log(String(true));          // "true"
console.log(String(null));          // "null"

console.log((10).toString());       // "10"

// 숫자
console.log(Number("10"));          // 10
console.log(Number("10.5"));        // 10.5
console.log(Number(true));          // 1

// parseInt() : 정수부분만 변환
console.log(parseInt("10.5"));      // 10

console.log(Number("10.5px"));      // NaN
console.log(parseInt("10.5px"));    // 10 : 앞에서부터 읽을 수 있는 만큼만 변환

console.log(" ====== Bolean 변환 ======");
console.log(Boolean("JavaScript"));
console.log(Boolean(0));
console.log(Boolean(""));

// 더 자주쓰는 표현
console.log(!!"");  // False
