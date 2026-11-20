// 옵셔널 체이닝 연산자

// NullPointerException을 막으려고
// if (obj != null)

var someObject = null;

// var val = someObject.value;
var val = someObject?.value;    // someObject가 있으면 값 넘겨주고 없으면 원래 오류지만 그냥 정상작동함
console.log(val);               // 오류 대신 undefined가 담김
