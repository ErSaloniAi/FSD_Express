// create an  html form that takes a number.on submission : if input is empty display "plz enter a number or if input is not a number display invalid input" 3.if number is:display even nuber if it is even or display odd number .provide alink to go back and use http post method
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));
app.post("/check",(req,res)=>{
    const num=req.body.num;
    if(!num){
        res.send("plz enter a number <a href='/'>Try again</a>")

    }
    if(isNaN(num)){
        res.send("invalid input<a href='/'>try again</a>")
    }
    const number=Number(num);
    if(number%2==0){
        res.send("even number<a href='/'>try again</a>")
    }
    else{
        res.send("odd number<a href='/'>tyr</a>")
    }

});
app.listen(5001)