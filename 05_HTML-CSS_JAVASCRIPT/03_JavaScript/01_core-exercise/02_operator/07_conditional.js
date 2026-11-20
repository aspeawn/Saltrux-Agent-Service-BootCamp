/* 문제 07. 삼항 연산자 활용
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] getResult(score) : 60점 이상이면 '합격', 아니면 '불합격'. 삼항 연산자 한 줄로 작성한다.
   [2] getCartMessage(count) : 템플릿 리터럴 안에 삼항 연산자를 넣어
         count 가 0 보다 크면 '장바구니 : 3개', 0 이면 '장바구니 : 비어 있음' 을 반환한다.
   [3] createBadge(user) : { name, type } 객체를 반환한다.
         type 은 age 가 19 이상이면 '성인', 아니면 '청소년'
   [4] 중첩된 삼항 연산자로 작성된 getGrade 를 if 문(이른 반환)으로 다시 작성한다.
*/

// [1]
function getResult(score) {
        return score >= 60 ? '합격' : '불합격';
}
console.log(getResult(85));   // 기대 : 합격
console.log(getResult(40));   // 기대 : 불합격


// [2]
function getCartMessage(count) {
    return count > 0 ? `장바구니 : ${count}개` : '장바구니 : 비어 있음';
}
console.log(getCartMessage(3));   // 기대 : 장바구니 : 3개
console.log(getCartMessage(0));   // 기대 : 장바구니 : 비어 있음


// [3]
function createBadge(user) {
    return {name: user.name, type:user.age >= 19 ? '성인' : '청소년'} };

console.log(createBadge({ name: '홍길동', age: 25 }));   // 기대 : { name: '홍길동', type: '성인' }
console.log(createBadge({ name: '유관순', age: 16 }));   // 기대 : { name: '유관순', type: '청소년' }


// [4] 동작은 같게, 읽기 쉽게 바꾼다.
function getGrade(score) {
    // return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';
    if (score < 70)
        return 'F';
    else if(score >= 70 && score < 80)
        return 'C';
    else if(score >= 80 && score < 90)
        return 'B';
    else
        return 'A';
}
console.log(getGrade(95), getGrade(85), getGrade(75), getGrade(50));   // 기대 : A B C F
