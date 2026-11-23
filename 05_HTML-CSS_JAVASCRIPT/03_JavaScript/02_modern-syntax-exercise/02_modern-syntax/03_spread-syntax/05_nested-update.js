/* 문제 05. 중첩 객체를 원본 그대로 두고 수정하기
   유형 : 코드 작성 | 난이도 : ★★★

   React 상태처럼 원본을 바꾸지 않고 새 객체를 만들어 반환하는 함수들을 완성한다.
   바뀌는 경로에 있는 객체만 새로 만들고, 바뀌지 않는 부분은 그대로 둔다.
     changeName(user, name) : name 만 바꾼 새 객체
     changeCity(user, city) : address.city 만 바꾼 새 객체 (안쪽 address 객체도 새로 만든다)
     addTag(user, tag)      : tags 배열 끝에 tag 를 추가한 새 객체 (tags 배열도 새로 만든다)
*/

const user = {
    name: '홍길동',
    address: { city: '서울', zip: '04524' },
    tags: ['신규']
};

function changeName(user, name) {
    // TODO
    return {...user, name: name};
}
function changeCity(user, city) {               // 객체 스프레드 -> 얕은 복사, 바깥 객체만 복사할 시에 안쪽 address는 원본과 공유됨, 즉 addres 객체를 한번더 복사해야 기존 내용 유지됨
    // TODO
    return {...user, address:{ ...user.address, city:city}};
}
function addTag(user, tag) {
    // TODO
    return {...user, tags:[...user.tags, tag]};             // 아 user 객체의 tags 배열인 걸 놓침   tags:[...tags, tag] x, tags:{...user.tags, tag} => { '0' : '신규', tag : 'VIP'}  {}는 키 밸류 객체로 들어감!   
}

const u1 = changeName(user, '유관순');
console.log(u1?.name);                  // 기대 : 유관순
console.log(user.name);                 // 기대 : 홍길동

const u2 = changeCity(user, '부산');
console.log(u2?.address);               // 기대 : { city: '부산', zip: '04524' }
console.log(user.address.city);         // 기대 : 서울
console.log(u2?.tags === user.tags);    // 기대 : true   (바뀌지 않은 부분은 그대로 함께 쓴다)

const u3 = addTag(user, 'VIP');
console.log(u3?.tags);                  // 기대 : [ '신규', 'VIP' ]
console.log(user.tags);                 // 기대 : [ '신규' ]
