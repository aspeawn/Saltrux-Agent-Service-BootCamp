/* 문제 03. 모듈 오류 고치기
   유형 : 코드 수정 | 난이도 : ★★☆

   index.html 과 main.js 에 실수가 다섯 군데 있다. utils.js 는 고치지 않는다.
   index.html 을 Live Server 로 열면 콘솔(F12)에 오류가 하나씩 나타난다.
   오류 메시지를 읽고 하나 고칠 때마다 새로고침해서 다음 오류를 확인한다.
   고친 자리마다 어떤 오류 메시지가 났는지 주석으로 적는다.

   다 고치면 아래 세 줄이 출력되어야 한다.
     안녕하세요, 유관순님!
     버전 : 1.0.0
     합계 : 7
*/

import { greet } from './utils.js';
import { sum } from './utils';
import { VERSOIN } from './utils.js';
import { internal } from './utils.js';

console.log(greet('유관순'));
console.log(`버전 : ${VERSOIN}`);
console.log(`합계 : ${sum(3, 4)}`);
console.log(internal);
