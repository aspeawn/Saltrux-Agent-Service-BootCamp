// Switch문

var loadStatus = 'loading';


// 비교시 === 값과 타입을 같이 비교한다.
switch (loadStatus) {
    case 'loading':
        console.log("불러오는 중 ..");
        break;
    case 'success':
        console.log("완료");
    case "error":
        console.log("오류발생");
        break;
    default: console.log("알수없는상태");
}


function calculator(state, action) {
    switch (action.type) {
        case "increase":
            return state + action.amount;
        case "decrease":
            return state-action.amount;
    }
}

console.log(calculator(10, {type: 'decrease', amount: 5}));
