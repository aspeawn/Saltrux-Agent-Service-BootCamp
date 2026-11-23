// 객체 구조 분해 할당 기본 문법
// 객체의 프로퍼티 이름으로 분해함

const pants = {
  productName : "베기팬츠",
  color: "검정색",
  price: 30000,
};

const {productName, color, price} = pants;

console.log(productName);
console.log(color);
console.log(price);

const {price:p1, productName: n1 } = pants;

// 배열이랑 다르게 순서는 상관없음 -> 프로퍼티 이름으로 찾아서
console.log(n1, p1);

/**
 * 다른이름으로 받기
 * {프로퍼티이름 : 새변수이름}
 * - 프로퍼티 이름만 같으면, 새변수이름을 사용해도 값을 받을 수 있다.
 */


// 3. 축약표현과 짝을 이룬다!
const id = "p-00001"
const made = {id, price};

const {id:gotid} = made;

console.log(gotid);
