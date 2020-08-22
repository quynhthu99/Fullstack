console.log('hello thu');
var number1 = 1;
let number2 = 2;
const number3 = 3;
console.log(number2);
console.log(number1);
let chuoi = "string ...";
let chuoi2 = ' ahdsahahjd ';
//let chuoi3 = ``;
if (number3 % 2 === 1) { // so sanh gia tri dung 3 dau bang
    console.log("number3 la so le");
} else {
    console.log("number3 la so chan");
}
const chuoi3 = ` so thu 3 la ${(number3 % 2 === 1) ? 'so le' : 'so chan'}`
console.log(chuoi3);

const a = `so thu 3: ${number3}`
console.log(a);

// ESlint Error len
//  let counter = 0;
//  for (let i = 0; i < 10; i++) { //neu var in ra i =10
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000);

//  }

// function
//   function tong(a,b){
//       return a+b;
//   }
//   console.log("tong la " + tong(2,3));
// const tong2 = function (a,b) {
//     return (a+b);
// }
// console.log(tong2(2,3));

const tong3 = (a, b) => {
    console.log((a + b));
}
tong3(2, 4);
const tong4 = (a, b) => console.log(a * b);
tong4(4, 5);

let sothunhat = {
    id: 10,
    name: 'thu'
}
let sothuhai = sothunhat
let sothuba = { ...sothunhat }// tach ring tung phan tu, khi sp th nhat thay doi thi so thu 3 k thay doi

console.log(sothuhai);
console.log(sothuba);

sothunhat.id = 100
sothunhat.name = 'namngu'

console.log(sothuhai);
console.log(sothuba);

//callback
const taorahamtinhtong = (coso) => {
    return
}
console.log(taorahamtinhtong);
let taorahamtinhtong2 = (coso) => (coso2) => coso + coso2;

const hamtrave = taorahamtinhtong2(3);
console.log(hamtrave);


const hamxx = (thamso1, thamso2) => { // callback
    console.log(thamso2(thamso1));
}

hamxx(10, hamtrave)
console.log(hamtrave);

