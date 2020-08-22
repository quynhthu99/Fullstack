const uoc = [];
let so = 28
uoc.push(1);
for (let i = 2; i < 28; i++) {
    if (so % i === 0) {
        uoc.push(i);
    }

}

var tong = 0;
for (let i = 0; i < uoc.length; i++) {
    tong = tong + uoc[i];
}

//uoc.map
//uoc.filter
//uoc.reduce
//uoc.every

uoc.reduce((prev, curr, index) => {
    console.log('index', index);
    console.log('prev', prev);
    console.log('curr', curr);
    console.log('-----------------');
    return prev + curr;
})
const fields = ['id', 'username', 'password', 'birthday', '`order`']

const addBackQuoteFields = fields.map((value) => {
    // return '`' +value +'`'
    return `\`${value}\``
})
console.log(addBackQuoteFields);
const removePasswordFields = addBackQuoteFields.filter(value => value.indexOf('password') === -1)
const query = 'SELECT' + removePasswordFields.reduce((pre, cur) => pre + ',' + cur)
const query2 = fields
    .map(e => `\`${e}\``)//every
    .filter(e => e.indexOf('password') === -1)
    .reduce((p, c) => `${p},${c}`)

console.log(query2);
// const query = fields.reduce((pre,cur) => pre +","+cur)
// console.log(query);
// console.log(uoc)
// console.log(tong)





//bai2
const loibaihat = 'kia con buom vang'
const tachtu = loibaihat.split(' ')
console.log(tachtu);

tachtu.every((e, i) => {
    setTimeout(() => {
        console.log(e);
    }, i * 0);
    if (i == 4) return false
    return true;
})

//docfile
const fs = require('fs') //MODULE NOT FOUND

// fs.readFile('./index.txt', (err, data) => {
//     // if (err) {
//     //     console.log(err);
//     // } else {
//     //     console.log(data);
//     // }

//     console.log(err ? err : data.toString());
//     if(!err){
//         let d =  data.toString();
//         console.log(d);
        
//     }
// })
// fs.readFileSync('./index.txt')
// .then(data = {

// })
// .catch(err=>{

// })

// try {
//     const data = await fs.readFileSync('./index.txt');
// } catch (err) {

// }
// fs.writeFile('.output.txt','abcxyz','w+')

const obj ={
    id: 123,
    name: "thu"
}

const k = Object.keys(obj)
const v = Object.values(obj)
console.log(k);
console.log(v);

console.log(obj.id);
console.log(obj['name']);