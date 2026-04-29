const express = require("express");
const multer = require("multer");
const app = express();
app.use(express.static(__dirname,{index:'m1.html'}));
var store = multer.diskStorage({
    destination:"lju",
    filename:function(req,file,cb){
        cb(null,file.fieldname+ "-"+ Date.now()+".docx")
    }
});
var upload = multer({storage:store})
app.post("/upload",upload.single("mypic",5                                                                                 ),(req,res)=>
    {
    const file= req.files;
    if(file)
    {
        res.set("content-type","text/html")
        // res.send("<h1>"+ file.originalname+ "has been submitted" + file.destination+"</h1>")
        for(i of files){
            res.write("<h2>File" + i.originalname+ " has been uploaded "+ " </h2>");
        }
        res.send();
    }
});
app.listen(8009)