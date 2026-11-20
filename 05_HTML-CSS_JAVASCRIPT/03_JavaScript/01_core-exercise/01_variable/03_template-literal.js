/* 문제 03. 템플릿 리터럴로 바꾸기
   유형 : 코드 작성 | 난이도 : ★☆☆

   + 연산자로 이어 붙인 문자열을 템플릿 리터럴(백틱과 ${})로 바꿔 보자.

   1. message1 과 똑같은 문장을 템플릿 리터럴로 작성해 message2 에 담는다.
   2. 표현식 삽입을 이용해 "내년에는 21살이 됩니다." 를 만든다. (21 을 직접 쓰지 말고 age 로 계산한다)
   3. 아래처럼 두 줄로 출력되는 문자열을 \n 없이 백틱으로 만든다.
        이름 : 홍길동
        사는 곳 : 서울
*/

const name = '홍길동';
const age = 20;
const city = '서울';

const message1 = '제 이름은 ' + name + '이고, 나이는 ' + age + '살입니다. ' + city + '에 살고 있습니다.';
console.log(message1);

// 1. 템플릿 리터럴로 같은 문장 만들기
const message2 = "제 이름은 홍길동이고, 나이는 20살입니다. 서울에 살고 있습니다."; // TODO
console.log(message2);
console.log(message1 === message2);   // 기대 : true

// 2. 표현식 삽입으로 내년 나이 계산하기
const message3 = `내년에는 ${age+1}살이 됩니다.`;  // TODO
console.log(message3);                // 기대 : 내년에는 21살이 됩니다.

// 3. 백틱으로 두 줄짜리 문자열 만들기
const message4 = `홍길동
그냥 줄바꿈해서 됨`; // TODO
console.log(message4);
