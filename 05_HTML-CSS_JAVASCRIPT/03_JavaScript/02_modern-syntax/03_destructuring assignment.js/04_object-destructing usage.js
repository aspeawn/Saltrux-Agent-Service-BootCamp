// 1. 기본값 설정하기
const shirts ={productName: "베이직셔츠"};

const {productName = "어떤 상품", color = "어떤 색상", price = 0} = shirts;

// const test = { productName : "어떤 상품", color: "어떤 색상", price: 0};
console.log(productName);
console.log(color);
console.log(price);





// 이름 변경과 기본값을 함께 사용 가능
const { color: shirtsColor = "흰색" } = shirts;
console.log(color);
console.log(price);

console.log(shirtsColor);

console.log("------------------------");

// 기본값이 적용되는 기준
// -> undefined
const fromServer = {nickname:null, points: 0};
const {nickname = "이름없음", points =100} = fromServer;

console.log(nickname);
console.log(points);

console.log(fromServer.nickname ?? "이름없음"); // null 병합 연산자

const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
  stock: 12,
  createdAt: "2026-11-23"
};

const {productName: pantsName} = pants; // 필요한 것만 꺼내기
console.log('p');


//rest
const { productName: onlyName, ...rest} = pants
  console.log(onlyName);
  console.log(rest);    // productName
  
  



