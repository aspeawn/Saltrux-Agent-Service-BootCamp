/* 문제 04. push / pop / unshift / shift
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 코드를 위에서부터 차례로 따라가며 각 줄의 출력 결과를 예상해서 적어 보자.
         네 메서드 모두 원본 배열을 바꾼다는 점에 주의한다.

   [2] 은행 번호표 대기열을 만든다.
         enqueue(queue, name) : 대기열 맨 뒤에 이름을 추가하고, 현재 대기 인원을 반환한다.
         dequeue(queue)       : 대기열 맨 앞 사람을 빼서 '○○님 창구로 오세요' 를 반환한다.
                                대기열이 비어 있으면 '대기 인원이 없습니다' 를 반환한다.
*/

// [1]
const stack = ['A', 'B'];

console.log(stack.push('C'));     // 예상 :
console.log(stack);               // 예상 :
console.log(stack.pop());         // 예상 :
console.log(stack.unshift('Z'));  // 예상 :
console.log(stack);               // 예상 :
console.log(stack.shift());       // 예상 :
console.log(stack);               // 예상 :
console.log([].pop());            // 예상 :


// [2]
function enqueue(queue, name) {
    // TODO
}
function dequeue(queue) {
    // TODO
}

const queue = [];
console.log(enqueue(queue, '홍길동'));   // 기대 : 1
console.log(enqueue(queue, '유관순'));   // 기대 : 2
console.log(dequeue(queue));            // 기대 : 홍길동님 창구로 오세요
console.log(dequeue(queue));            // 기대 : 유관순님 창구로 오세요
console.log(dequeue(queue));            // 기대 : 대기 인원이 없습니다
