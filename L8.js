/* Create a webserver that:1. accept the get request with a dynamic user id i the url 
2. also accept additional data (name and age) using query parameter 
3. extract id from routparameter and name , age from query string
4. retuern a json response containing all receiving data
*/

const express = require('express');
const app = express();
app.get('/user/:id',(req,res)=>{
    const userid=req.params.id;
    const name=req.query.name;
    const age=req.query.age;

    res.json({
        message:'Data recieved',
        params:{id:userid},
        query:{name,age}
    });
});app.listen(8001);