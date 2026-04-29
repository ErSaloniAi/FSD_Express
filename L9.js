/*
write express js script to perform the task as asked  beloew
1.add one form which contains userid, password and submit button data should be submited by http post methos.
2.on home page form should be displayed andwhile submitting the form on next page "/login" , if username is admin then 
it willdisplay "welcome admin", else display "Please logine=with admin name" in red color. */

const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send(`<html>
        <body>
        <form action="/login" method="post"> 
        <input type ="text" name = "username"/>
        <input type="password" name="pswd"/>
        <input type="submit" value="submit"/>
        </form></body></html>`)
    });
    app.post('/login',(req,res)=>{
        if(req.body.username=="admin"){
            res.write("welcom:"+req.body.username);
        }else{
            res.set("content-type","text/html")
            res.write("<h3 style='color:red'>Please login with admin name</h3>");
        }
        res.end();
    })
    app.listen(8005);