/* 문제 08. 중첩 함수와 클로저
   유형 : 코드 작성 | 난이도 : ★★★

   [1] createCounter(start, step) : 호출할 때마다 step 만큼 증가한 값을 반환하는 함수를 반환한다.
         step 을 넘기지 않으면 1 씩 증가한다.

   [2] createWallet(initial) : 잔액(balance)을 바깥에서 직접 바꿀 수 없는 지갑 객체를 반환한다.
         deposit(amount)  : 잔액에 amount 를 더하고, 바뀐 잔액을 반환한다.
         withdraw(amount) : 잔액이 부족하면 '잔액 부족' 을 반환하고, 충분하면 빼고 바뀐 잔액을 반환한다.
         getBalance()     : 현재 잔액을 반환한다.
*/

// [1]
function createCounter(start, step) {
    // TODO
}

// const byOne = createCounter(0);
// console.log(byOne(), byOne(), byOne());     // 기대 : 1 2 3
// const byTen = createCounter(100, 10);
// console.log(byTen(), byTen());              // 기대 : 110 120
// console.log(byOne());                       // 기대 : 4   (서로 영향을 주지 않는다)


// [2]
function createWallet(initial) {
    // TODO
}

// const wallet = createWallet(10000);
// console.log(wallet.deposit(5000));    // 기대 : 15000
// console.log(wallet.withdraw(20000));  // 기대 : 잔액 부족
// console.log(wallet.withdraw(3000));   // 기대 : 12000
// console.log(wallet.getBalance());     // 기대 : 12000
// console.log(wallet.balance);          // 기대 : undefined   (바깥에서 잔액에 접근할 수 없다)
