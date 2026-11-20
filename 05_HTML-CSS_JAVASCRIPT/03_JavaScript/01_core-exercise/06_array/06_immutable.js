/* 문제 06. 원본을 지키는 배열 다루기
   유형 : 코드 작성 | 난이도 : ★★☆

   React 에서는 상태 배열의 원본을 바꾸지 않고 새 배열을 만들어야 한다.
   아래 함수들을 원본을 바꾸지 않는 방식으로 완성한다.
   (push, pop, splice, sort, reverse 를 원본에 직접 쓰지 않는다)

     addItem(list, item)   : 맨 뒤에 item 을 추가한 새 배열을 반환한다. (concat 또는 스프레드)
     removeAt(list, index) : index 위치의 요소를 뺀 새 배열을 반환한다. (slice 두 번 + concat)
     reversed(list)        : 순서를 뒤집은 새 배열을 반환한다.
     toBreadcrumb(list)    : 'Home > 상품 > 상세' 처럼 ' > ' 로 이어 붙인 문자열을 반환한다.
*/

function addItem(list, item) {
    // TODO
}
function removeAt(list, index) {
    // TODO
}
function reversed(list) {
    // TODO
}
function toBreadcrumb(list) {
    // TODO
}

const original = ['Home', '상품', '상세'];

console.log(addItem(original, '리뷰'));    // 기대 : [ 'Home', '상품', '상세', '리뷰' ]
console.log(removeAt(original, 1));       // 기대 : [ 'Home', '상세' ]
console.log(reversed(original));          // 기대 : [ '상세', '상품', 'Home' ]
console.log(toBreadcrumb(original));      // 기대 : Home > 상품 > 상세
console.log(original);                    // 기대 : [ 'Home', '상품', '상세' ]   (원본은 그대로)
