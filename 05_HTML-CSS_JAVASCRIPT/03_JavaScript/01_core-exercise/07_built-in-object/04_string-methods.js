/* 문제 04. 문자열 메서드 기본
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 줄의 결과를 예상해서 적어 보자.

   [2] parseTags(input) : 쉼표로 구분된 태그 입력값을 배열로 바꿔 반환한다.
         각 태그의 앞뒤 공백을 없애고, 빈 태그는 뺀다. (split + map + trim + filter)

   [3] isImageFile(fileName) : 파일 이름이 '.png', '.jpg' 로 끝나면 true 를 반환한다.
         대소문자는 구분하지 않는다. ('PHOTO.JPG' 도 true)
*/

// [1]
const name = '  홍길동  ';
name.trim();

console.log(`[${name}]`);                       // 예상 :
console.log(`[${name.trim()}]`);                // 예상 :
console.log('a-b-c'.split('-'));                // 예상 :
console.log('hello world'.includes('world'));   // 예상 :
console.log('2026-09-15'.replace(/-/g, '/'));   // 예상 :
console.log('JavaScript'.slice(0, 4));          // 예상 :
console.log('JavaScript'.toUpperCase());        // 예상 :


// [2]
function parseTags(input) {
    // TODO
}
console.log(parseTags('react, js ,  node'));    // 기대 : [ 'react', 'js', 'node' ]
console.log(parseTags('html,,css, '));          // 기대 : [ 'html', 'css' ]


// [3]
function isImageFile(fileName) {
    // TODO
}
console.log(isImageFile('profile.png'));   // 기대 : true
console.log(isImageFile('PHOTO.JPG'));     // 기대 : true
console.log(isImageFile('resume.pdf'));    // 기대 : false
