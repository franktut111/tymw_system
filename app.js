const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Hello');
})

app.get('/book',(req,res)=>{
    res.send('Get a book');
})
app.post('/book',(req,res)=>{
    res.send('This is book page');
})
app.delete('/book',(req,res)=>{
    res.send('Delete the book');
})

app.listen(port,() => {
    console.log(`listen on port ${port}`);
})