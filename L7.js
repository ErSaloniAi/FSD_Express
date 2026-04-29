//create a basic web app thatdisplay a form on a home page to enter user name .sends the form data to a server using a post request.the server should read the subbmitted name from the requested body.finally display a msg confirming the login.

const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`<form action="/post" method="post">
    <input type="text" name="username" placeholder="Enter your name">
    <button type="submit">Login</button>
  </form>`);
})
app.post('/post',(req,res)=>{
    var name=req.body.username;
    res.send(`welcome ${name} to the home page`);
});

app.listen(5000)