/* 문제 03. 스프레드로 배열과 객체 만들기
   유형 : 코드 작성 | 난이도 : ★★☆

   아래 함수들을 스프레드 문법으로 완성한다. (concat, push, Object.assign 은 쓰지 않는다)
     merge(a, b)                 : 두 배열을 이어 붙인 새 배열
     prepend(list, item)         : 맨 앞에 item 을 넣은 새 배열
     insertAt(list, index, item) : index 위치에 item 을 끼워 넣은 새 배열 (slice 와 함께 쓴다)
     getMax(numbers)             : 가장 큰 값 (Math.max)
     createButton(options)       : 기본값 { type: 'button', size: 'md', disabled: false } 위에
                                   options 를 덮어쓴 새 객체. options 를 넘기지 않아도 동작해야 한다.
*/

function merge(a, b) {
    return [...a, ...b];
}
function prepend(list, item) {
    return [item, ...list];
}
function insertAt(list, index, item) {
    return [...list.slice(0, index), item, ...list.slice(index)];           // slice() 이후 붙이기
}
function getMax(numbers) {
    return Math.max(...numbers);
}

const defaultOptions = { type: 'button', size: 'md', disabled: false };
function createButton(options = {}) {
    return { ...defaultOptions, ...options };
}

console.log(merge([1, 2], [3]));              // 기대 : [ 1, 2, 3 ]
console.log(prepend(['b', 'c'], 'a'));        // 기대 : [ 'a', 'b', 'c' ]
console.log(insertAt(['a', 'c'], 1, 'b'));    // 기대 : [ 'a', 'b', 'c' ]
console.log(getMax([3, 17, 8]));              // 기대 : 17
console.log(createButton({ size: 'lg' }));    // 기대 : { type: 'button', size: 'lg', disabled: false }
console.log(createButton());                  // 기대 : { type: 'button', size: 'md', disabled: false }
