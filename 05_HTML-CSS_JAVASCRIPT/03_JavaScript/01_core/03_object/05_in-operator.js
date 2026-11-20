var student = {
    name: "유관순",
    age: 16,
    test: undefined,
};

// 프로퍼티가 없는 것 과 키가 없는 것을 구분 못함.
console.log(student.name === undefined);    // false    // 키가 있는지 없는지 모름 
console.log(student.height === undefined);  // true     // 키가 있는지 없는지 모름 

console.log('name' in student);
console.log('height' in student);
console.log('test' in student);


// for-in 반복문
// 객체의 프로퍼티 키를 하나 꺼내서


var student2 = {
    name: "유관순",
    age: 16,
    test: undefined,
    getInfo: function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    },
};

for (var key in student2) {
    console.log(`key : ${key}`);
    console.log(`student2 : ${student2[key]}`);
}

// 배열
var numbers = [10, 20, 30];
for (var value of numbers) {
    console.log(value);
}
