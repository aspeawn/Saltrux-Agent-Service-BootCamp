// 화살표 함수 기본문법

// function을 안쓰고 화살표를 이용해서 함수를 더 짧게 쓰자 Java에서의 람다와 비슷함
// 자바 람다 : (a, b) -> a +b (함수형 인터페이스)

var message;

// 표현식 원본
message = function() {
    return "hello world";
}

// 2.function을 지우고 화살표를 붙일 수 있음
message =() =>{ 
    return "hello world";
}


// 3.구현부가 한줄이면 중골호와 return 생략 가능
message =() =>{ 
    return "hello world";
}

// 4. 매개변수
message = (val1, val2) => `hello world ${val1}, ${val2}`;

// 5. 매개변수가 한개있을 경우 소괄호 생략 가능
message = val1 => `hello world ${val1}`;


var createUser = (id, name) => ({id,name});
console.log(createUser(1,"bear"));
