const express = require("express")
const app = express();
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render('first',{name:"rahul"})
})
app.listen(5001)

//