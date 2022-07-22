// npm init, yarn add express/hbs

const express= require('express');
const hbs =require ('hbs');
const wax = require ('wax-on');
const app = express();
app.set('view engine','hbs');

// static folder
app.use(express.static('public'))

// setup wax-on
wax.on(hbs.handlebars)
wax.setLayoutPath('./views/layouts')

app.get('/',async function(req,res){
    res.send("Hello World")
})

app.listen(3000,function (req,res){
    console.log("server started")
})