/* 문제 04. 대입과 복사, 얕은 복사
   유형 : 출력 예측 | 난이도 : ★★★

   코드를 위에서부터 차례로 따라가며 각 줄의 결과를 예상해서 적어 보자.
   "같은 것을 가리키는가, 새로 만들었는가" 를 하나씩 따져 본다.
*/

const a = [1, 2];
const b = a;
const c = [...a];
b.push(3);

console.log(a);              // 예상 : [1, 2]    ->   실제 [1, 2, 3] v가 앝은 복사라서 주소값을 공유하고 변경시 같이 변경됨
console.log(c);              // 예상 : [1, 2]    
console.log(a === b);        // 예상 : true
console.log(a === c);        // 예상 : false

const user = { name: '홍길동', address: { city: '서울' } };
const copy = { ...user };
copy.name = '유관순';
copy.address.city = '부산';

console.log(user.name);                       // 예상 : 홍길동
console.log(user.address.city);               // 예상 : 서울에서 부산으로 바뀜
console.log(user.address === copy.address);   // 예상 : true


const deep = structuredClone(user);
deep.address.city = '대전';

console.log(user.address.city);               // 예상 :
