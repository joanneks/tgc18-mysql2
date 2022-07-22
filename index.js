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

const landingRoutes = require('./routes/landing');
const productRoutes = require ('./routes/products')

app.use('/',landingRoutes)
app.use('/products',productRoutes)


app.listen(3000,function (req,res){
    console.log("server started")
})