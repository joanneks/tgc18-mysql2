const express =require('express');
const router = express.Router();

router.get('/',function(req,res){
    // res.send("list all products")
    res.render('products/index')
})

router.get('/create',function(req,res){
    // res.send("create product")
    res.render('products/create')
})

module.exports = router;