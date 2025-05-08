const express = require('express');
const { route } = require('./routes');
const router = require('./routes');
const app = express();
const port = 3000;

app.use(router);//使用router
app.use(express.static('public'));


app.listen(port,() => {
    console.log(`listen on port ${port}`);
})