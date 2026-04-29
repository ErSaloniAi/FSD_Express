// create an ejs file need contact.ejs that display a heading contact form with ext input for name email input for email and submit button .render this ejs file on / contact rout 2.handle form submission using thw post method on the"/submit"rout 3.after form submission display a message on the browser from msg.ejs file .

const express = require("express")
const app = express();
app.set("view engine",'ejs');
const path = require("path")
app.set("views",path.join(__dirname));
app.use(express.urlencoded({extended:true}))
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.post("/submit",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    res.render('result',{name,email})
})
app.listen(5002)
