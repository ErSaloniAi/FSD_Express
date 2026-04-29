
//1.create 1 html file which contains two number type input fields,1 drop down which contain options (select,add,sub,mult,div) and 1 submit button the input field must contain the value > then 0 ek=lse it will give msg "plz enter valid number". also user must select any 1 of the formula else give msg "u have not selected any formula" (msg will be displayed on "/calc" page.if 1 formula is selected and numbers rare entered then respective calculation will be perform on "/calc" page use http get method.)
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get("/calc",(req,res)=>{
    res.set("content-type","text/html");
    var n1=parseInt(req.query.n1);
    var n1=parseInt(req.query.n2);
    
})