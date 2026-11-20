/* 문제 03. indexOf 와 includes
   유형 : 출력 예측 + 코드 수정 | 난이도 : ★☆☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] hasMenu(menu, name) 함수에 버그가 있다. '김밥' 은 메뉴에 있는데 false 가 나오고,
         '순대' 는 없는데 true 가 나온다. 원인을 적고 includes 를 사용해 고친다.
*/

// [1]
const menu = ['김밥', '라면', '떡볶이', '라면'];

console.log(menu.indexOf('라면'));      // 예상 :
console.log(menu.indexOf('순대'));      // 예상 :
console.log(menu.includes('떡볶이'));    // 예상 :
console.log(menu.includes('순대'));      // 예상 :


// [2]
function hasMenu(menu, name) {
    if (menu.indexOf(name)) {
        return true;
    }
    return false;
}
console.log(hasMenu(menu, '라면'));     // 기대 : true
console.log(hasMenu(menu, '김밥'));     // 기대 : true
console.log(hasMenu(menu, '순대'));     // 기대 : false
// 원인 :
