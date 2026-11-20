/* 문제 11. [종합] 할 일 관리 함수 만들기
   유형 : 코드 작성 | 난이도 : ★★★

   createTodoManager() 함수를 완성한다.
   할 일 목록(todos 배열)은 바깥에서 직접 건드릴 수 없도록 클로저로 감춘다.
   배열 고차 함수(map, filter 등)는 아직 배우지 않았으므로 for...of 로 작성한다.

   반환하는 객체의 메서드
     add(text)      : { id, text, done: false } 를 추가하고, 추가한 할 일을 반환한다.
                      id 는 1 부터 1 씩 증가한다.
                      text 가 비어 있으면('') 추가하지 않고 null 을 반환한다.
     toggle(id)     : 해당 id 의 done 을 반대로 바꾼다. 없는 id 면 false, 바꿨으면 true 를 반환한다.
     printList()    : '[완료] 장보기' 또는 '[진행] 운동하기' 형태의 문자열을 한 줄씩 출력한다.
     getDoneCount() : 완료된 할 일의 개수를 반환한다.
*/

function createTodoManager() {
    // TODO
}

// const manager = createTodoManager();
// console.log(manager.add('장보기'));    // 기대 : { id: 1, text: '장보기', done: false }
// manager.add('운동하기');
// manager.add('책 읽기');
// console.log(manager.add(''));          // 기대 : null
//
// console.log(manager.toggle(1));        // 기대 : true
// console.log(manager.toggle(3));        // 기대 : true
// console.log(manager.toggle(99));       // 기대 : false
//
// manager.printList();
// // 기대 :
// // [완료] 장보기
// // [진행] 운동하기
// // [완료] 책 읽기
//
// console.log(manager.getDoneCount());   // 기대 : 2
// console.log(manager.todos);            // 기대 : undefined
