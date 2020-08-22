// console.log("Helloooo LQT")
  
// const express = require('express');
// //const { request } = require('express');
// const dbUtils = require('./utils/db');
// const pool = require('./utils/db');
// const app = express();
// // const a=10;
// // const a=function(){}
// // singleton

// // const callback = () => {
// //     console.log("Runnung at 8080");
// // }
// // app.listen(8080, callback)
// //localhost:8080/

// // const hamxuly = (request, response) => {
    
// //     const data = {
// //         username: 'thu',
// //         password: 'lailathu'

// //     }
// //     response.send(data);
// // }



// app.get('/', (request, response) => {
//     pool.query('select * from `user`;', (err,data) => {
//         if(err) console.log(err)
//         console.log(data);
//         response.send(data)
//     })

// })
// const callback = () => {
//     console.log("Runnung at 8080");
// }
// app.listen(8080, callback)

const object1 = {
    thuoctinh1: "thuoctinhso1",
    thuoctinh2: "thuoctinhso2",
    thuoctinh3: "thuoctinhso3",
}

const tt1=object1.thuoctinh1
const { thuoctinh1,thuoctinh2 } =object1

console.log(thuoctinh1);

//c1
const getData = async() => {

}

const getData2 =(callback) => {
    //sau khi lay du lieu xong
    callback();
}
//c2
const fun1 = async () => { //async la dowi nhau
 const congviec1 = await getData()
}

const excutor=(resolve,reject) => {
    resolve(10)
}
const prom =  new Promise(excutor);

prom.then(
    data => {
        console.log(data)
    }
).catch(
    err => {
        console.log(err);
    }
)

//dong87
const getData = (number) => {
    //   return new Promise((resolve, reject) => {
    //     if (number == 0) reject('Khong chia duoc')
    //     else
    //       resolve(100 / number)
    //   })
    // }
    
    const array = [1, 2, 3, 4, 5, 6, 1, 23, 1, 1, 3, 2, 2]
    
    console.log("Hello world");
    
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
    }
    
    console.log(array[3]);
    
    const object = {
      a: 100000,
      b: "123",
      c: false
    }
    console.log(object['a']);
    console.log(object.a);
    
    const ketquamap = array.map((value, index) => {
      console.log(value, ' indexing ', index);
      return value * 100
    })
    console.log(ketquamap);
    // [1, 2, 3] ===== [100, 200, 300]
    // [1 2 1 1 1 1 1]
    const ketquafilter = array.filter((value) => {
      // return true/false
      if (value < 3) return true;
      else return false
    })
    // [1, 2, 3 ,5 ,6 ,9] == []
    
    console.log(ketquafilter);
    
    const user = {
      username: 'thien',
      tt1: "asdad",
      tt2: 12,
      // ..... //
      active: true
      // .... //
    }
    
    const user1 = {
      ...user,
      active: "dang hoat dong",
      tt2: 45
    }
    
    console.log(user1);
    
    
    
    const fun5 = (a, b, c = 3, d, e = 12) => {
    
    }
    
    fun5(1, 2, 3, 4)
    
    const user = {
      tt1: 1,
      tt2: 2,
      tt3: 4,
    }
  }