/**
 * 함수 매개변수에서의 구조 분해
 */

function displayByPosition(
  producer = "아무개",
  width = 10,
  height = 20,
  items = [],
) {
  console.log(`${producer} ${width} ${height}`);
  console.log(items);
}

displayByPosition('신사임당', undefined, undefined, ["Coffee", "Donut"]);

// 구조분해할당을 한다면?   매개변수를 객체로 변환
function displayProduct(
  {producer = "아무개",
  width = 10,
  height = 20,
  items = [],}
) {
  console.log(`${producer} ${width} ${height}`);
  console.log(items);
}

const exampleProduct = {
  itmes: ["Coffe", "donut"],
  producer: "bear",
};

displayProduct(exampleProduct);

