const express = require('express');

var bodyParser = require('body-parser');

const app = express();


//body parse 
//middlewares(body parser,...) 
// logging

app.use(bodyParser.json());

const PORT = 7000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log(`API running at ${PORT}`);
    }


})