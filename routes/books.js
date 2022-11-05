const router = require('express').Router()
const express = require("express");
// const app = express(); 
let counter =0;
const books=  [
    {
    bookId : ++counter,
   bkname:"phy"
    },
    {
        bookId : ++counter,
        bkname :"kapo"
        },
        {
            bookId : ++counter,
            bkname :"helu"
            }
]


router.get('/books', (req,res, next)=>{
    // res.end("helo from index main");
    res.json(books);
})
module.exports = router

