var express = require("express");
var app = express();
app.get('/', function(req, res){
    // d.set('content-type',"text/plain");
    res.send("<i>Hello</i>")
    // res.write("hieee")
   //res.end()
})
app.get('/about',(req,res)=>{
    res.set('content-type','text/html');
    res.write('<h2>hello</h2>');
    res.end();

})

app.get('/abouti',(req,res)=>{
    res.set('content-type','image');
    res.write('<h2>hello</h2>');
    res.end();

})

app.listen(5001)