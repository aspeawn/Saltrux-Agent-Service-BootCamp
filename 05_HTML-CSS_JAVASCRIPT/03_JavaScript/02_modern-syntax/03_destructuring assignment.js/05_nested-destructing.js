const product = {
    size: {
        width: 10,
        height: 30,
    },
    items: ["doll","rabbit"]
}

const{
    size:{width:w, height:h}, 
    items: [item1, item2] } = product;

console.log(w);
console.log(h);

// console.log(size);   size in not defined


const { size } = product;

console.log(size);


// 옵셔널 체이닝
// const name = response?.user?.name