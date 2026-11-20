/* Data Type

원시타입 : number, string, boolean, undefined, null, symbol, bigint
객체타입 : 이것들 이외의 모든 값 (객체, 배열, 함수 ...)

*/ 

// number 타입
var integer = 10;
var integer = 5.5;
var integer = 10;

var integer = Infinity // 양의 무한대
console.log(10/0);

var integer = -Infinity // 음의 무한대
console.log(10/-0);

var integer = NaN // 산술 연산 불가(not a number)
console.log(1*'문자열');

// 문자열 타입
var string;

// '',"" 둘 다 문자열 가능
string = 'JavaScript';
string = "JavaScript";

// `` : 탬플릿 리터럴 -> 표현식 삽입, 멀티라인 기능을 제공하는 표기법
string = `JavaScript`;

var str = "안녕하세요. \n반갑습니다."

var num = 10;
str = `안녕하세요 반갑습니다 ${num}`; // 표현식 삽입
console.log(str);

// 불리언타입 true/false
console.log(true);
console.log(false);

// 객체타입
// typeof : 뒤에오는 값의 타입을 알려주는 키워드
console.log(typeof {}); // 객체
console.log(typeof []); // 배열





