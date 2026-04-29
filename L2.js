// write express js to display json object in server
var express = require("express");
var app = express();
student ={
    name:'fsd',lec:3
}
app.get('/',(req,res)=>{
    // res.set('content-type','application/json');
    res.send(student);
    // res.end()
});
app.listen(5001)