/*design node js application using express js to satisfy following requirement 
1. the first middle were should display a msg "first func exicuted"
2. second middle were should display a msg "second fun is executed" */

const express = require('express');
const app = express();

const addone=(req,res,next)=>{
    res.write("Fine fun executed");
    next()
}

const addtwo=(req,res,next)=>{
    res.write("First fun executed");
    next()
}

const addthree=(req,res,next)=>{
    req.total=50+40;
    console.log(req.total);
    next()
}

app.get('/class',addone,addtwo,addthree,(req,res)=>{
    res.write("thank you");
    res.end();
});
app.listen(6002)