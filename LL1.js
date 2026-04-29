const express = require('express');
const app = express();
const cp = require('cookie-parser');
app.use(cp());
app.get('/',(req,res)=>{
    res.cookie('name','ExpressJs');
    res.cookie('fname','Js')
    res.cookie('ID','2',{expires:new Date(Date.now()+1000)})
    res.cookie('email','e@gmail.com',{maxAge:2000})
    res.send(req.cookies)
})
app.listen(5002)