// 1.create a html file which contains fills fname,lastname ,password and submit button        2.once form submitted,store all this entered values to the respective cookies on "/next" page   3.the redirect user tool '/admin' and clear the cookie set for last name .display remaining set cookie values on the page.use post method .

const express = require('express');
const app = express();
const cp = require('cookie-parser');
app.use(cp());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname));
app.post("/next",(req,res)=>{
    res.cookie('first',req.body.fname);
    res.cookie('last',req.body.lname);
    res.cookie('password',req.body.password)
    res.redirect('admin')
})
app.get('/admin',(req,res)=>{
    res.clearCookie('last');
    res.write("welcome: "+req.cookies.first);
    res.write("your pass:"+req.cookies.password);
    res.send();
})
app.listen(5001)