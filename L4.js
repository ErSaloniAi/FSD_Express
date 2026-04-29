const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const userid=req.params.id;
    res.send("welcome to home page "+userid);
});

app.listen(5000)