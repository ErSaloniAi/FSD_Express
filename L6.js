const express = require('express');
const app = express();

app.get('/data',(req,res)=>{
    var name=req.query.name;
    var age=req.query.age;
    var data=req.query;
    console.log(typeof name);
    console.log(typeof data);
    res.write(JSON.stringify(data));
    res.write(`name:${name},age:${age}`);
    res.send();
});app.listen(5100);