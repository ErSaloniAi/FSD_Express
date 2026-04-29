const express = require('express');
const app = express();

app.get('/calender/:day/event/:ename', (req, res) => {
    // const userid=req.params.id;
    res.send(req.params);
});


app.listen(5001)