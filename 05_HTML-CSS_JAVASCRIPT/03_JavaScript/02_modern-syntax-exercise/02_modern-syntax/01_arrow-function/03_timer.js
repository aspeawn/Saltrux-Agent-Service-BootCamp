/* 문제 03. setTimeout 콜백과 this
   유형 : 코드 작성 | 난이도 : ★★★

   setTimeout(콜백, 밀리초) 는 지정한 시간이 지난 뒤 콜백을 한 번 호출한다.

   [1] startNormal 을 실행하면 0.5초 뒤 'undefined : NaN회' 가 출력된다. 원인을 적는다.
   [2] start 를 완성한다. 0.5초 뒤에 count 를 1 늘리고 '알림 타이머 : 1회' 형태로 출력한다.
   [3] start 메서드 자체를 화살표 함수(start: () => { ... })로 만들면 어떻게 될지 적는다.
*/

const timer = {
    label: '알림 타이머',
    count: 0,

    startNormal() {
        setTimeout(function () {
            this.count++;
            console.log(`${this.label} : ${this.count}회`);
        }, 500);
    },

    start() {
        // TODO
        setTimeout(() => {
            this.count++;
            console.log(`${this.label} : ${this.count}회`);
        }, 500);
    }
};

// [1]
timer.startNormal();   // 0.5초 뒤 : undefined : NaN회
// 원인 : 일반함수로 적었기에 this를 찾을 수 없음

// [2]
timer.start();
timer.start();
// 기대 (0.5초 뒤) :
// 알림 타이머 : 1회
// 알림 타이머 : 2회

// [3]
// 답 : start 자체에 하면 그 바깥의 this를 탐색하므로 최상위 모듈로 감 -> timer 밖을 벗어나기때문에 안됨
