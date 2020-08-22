console.log("Hello...LQT")

const express = require('express');
const dbUtils = require('./utils/db');
const pool = require('./utils/db');
 const app = express();

 app.get('/user', (request, response) => {
        pool.query('select * from `user`;', (err,data) => {
            if(err) console.log(err)
            console.log(data);
            response.send(data)
        })
 })
 app.get('/product', (request, response) => {
    pool.query('select * from `product`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})
app.get('/category', (request, response) => {
    pool.query('select * from `category`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})
app.get('/order', (request, response) => {
    pool.query('select * from `order`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})
app.get('/orderDetail', (request, response) => {
    pool.query('select * from `orderDetail`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})

 const callback = () => {
     console.log("running at 8080")
 }
 app.listen(8080, callback) 
  //nam ngu

