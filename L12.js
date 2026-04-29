// express js script to print msg in next line spliting by '.' and use get method to submit form data two.html file contains form of text area for the msg and submit button .
const express = require('express');
const app = express();
app.use(express.static(__dirname,{index:'2.html'}));
app.get('/login',(req,res)=>{
    res.set('content-type','text/html');
    t1=(req.query.msg).split(".");
    for (i in t1){
        res.write(t1[i]+"<br>")
    }
    res.send()
})
app.listen(6001)