// console.log("hello");
// console.log("process.env");
// global variables read ehre
require('dotenv-safe').config()
const express = require("express");
const constants = require('./constants');
const app = express(); //call constructor of express express instance
const {PORT} = require  ('./constants') //DESTRUCTURING
// console.log(process.env.PORT);
constants.PORT
// socket open


app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}  `);
})
// get on slash
app.get('/', (req,res, next)=>{
    res.end("helo from index main");
})


app.use('/books',require('./routes/books'))


app.post('/getname', (req,res, next)=>{
    res.end("helo bro watup");
})
// .post on slash
app.post('/',(req,res,next)=>{
    res.end('Response for the post request')
})