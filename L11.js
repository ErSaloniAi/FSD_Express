const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<form action='/login' method='post'>
        name:<input type='text' name='uname'/>
        email:<input type='email' name='email'/>
        <input type='checkbox' name='news'/>
        <input type='submit' name='submit'/>

    </form>`)
})
;
app.post('/login',(req,res,next)=>{
res.set('content-type','text/html')
res.write('<h1>welcome:</h1>'+req.body.uname)
res.write("your mail is:"+req.body.email)
next();
});

app.post('/login',(req,res)=>{
    if(req.body.news=='on'){
        // res.set('content-type','text/html')
        res.write("<h3>thanks</h3><a href='/'></a>");}
        else{
        res.write("<h3>you may subscribe</h3><a href='/subscribe'>sgddsgs</a>");

        }
        res.send();
    }
        )
        app.get('/subscribe',(req,res)=>{
            res.set('content-type','text/html')
        res.write("<h3>thanks</h3><a href='/'>logout</a>");
            res.send();
        })
        app.listen(5005)