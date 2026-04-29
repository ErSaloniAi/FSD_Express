
// 1.create a login form using html with fields : uname ,password,submit.on form submission : if uname=admin and password=1234,then display login successfull ow display invalid credentials and provide a link to go back .use post method and submit data to "/login".
app.post('/login',(req,res)=>{
    if(req.body.uname=='admin'){
        // res.set('content-type','text/html')
        res.write("<h3>thanks</h3><a href='/'></a>");}
        else{
        res.write("<h3>you may subscribe</h3><a href='/subscribe'>sgddsgs</a>");
        }
        res.send();
    }
        )
        app.get('/subscribe',(req,res)=>{
            res.set('content-type','text/html')
        res.write("<h3>thanks</h3><a href='/'>logout</a>");
            res.send();
        })
        app.listen(5005)