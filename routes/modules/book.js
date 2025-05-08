const express = require('express');
const router = express.Router();

router.use((req,res,next) =>{
    //取得現在時間
    console.log('requestTime:', new Date(new Date().getTime() + 8 * 60 * 60 * 1000))
    next()     //呼叫next() 執行下一個函式
})

//define the book page route by get method
router.get('/',(req,res)=>{
    res.send('Get a book');
})

//define the book route by post method
router.post('/',(req,res)=>{
    res.send('Post a book');
})

router.delete('/',(req,res)=>{
    res.send('delete a book');
})

module.exports = router 