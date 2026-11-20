/* 문제 06. 프로퍼티 값 단축 구문
   유형 : 코드 작성 | 난이도 : ★☆☆

   [1] createProduct(id, name, price) : 프로퍼티 값 단축 구문으로 { id, name, price } 객체를 반환한다.
   [2] createLoginBody(email, password) : 서버로 보낼 JSON 문자열을 만든다.
         단축 구문으로 객체를 만들고 JSON.stringify 로 문자열로 바꿔 반환한다.
   [3] 아래 축약된 객체를 축약하지 않은 원래 모양으로 풀어 쓴다.
*/

// [1]
function createProduct(id, name, price) {
    // TODO
}
console.log(createProduct(1, '무선 마우스', 30000));   // 기대 : { id: 1, name: '무선 마우스', price: 30000 }


// [2]
function createLoginBody(email, password) {
    // TODO
}
console.log(createLoginBody('hong@test.com', '1234'));
// 기대 : {"email":"hong@test.com","password":"1234"}


// [3]
const title = '공지사항';
const writer = '관리자';
const views = 10;

const post = { title, writer, views: views + 1 };

// TODO : 위 post 와 똑같은 객체를 축약 없이 작성한다.
const post2 = {};

console.log(post);
console.log(post2);
console.log(JSON.stringify(post) === JSON.stringify(post2));   // 기대 : true
