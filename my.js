// develop a web application using express and ejs that allows a user to enter a students name and marks true or false .after submission ,the application should display the entered details and determine the results : if the marks are 40 or above ,show pass in green colour ow display fail in red color
const express = require("express")
const app = express();
app.set("view engine",'ejs');
const path = require("path")
app.set("views",path.join(__dirname));
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("form");
})
app.post("/submit",(req,res)=>{
    const name = req.body.name;
    const marks = req.body.marks;
    res.render('result',{name,marks})
})
app.listen(5002)

