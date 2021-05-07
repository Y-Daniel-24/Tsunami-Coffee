const express= require('express');
const route=express.Router();

// route-- Rutas

//home

route.get('/',(req,res)=>{
    res.render('index.html');
});

//store

route.get('/menu',(req,res)=>{
    res.render('menu.html');
});

//

route.get('/contactanos',(req,res)=>{
    res.render('contactanos.html');
});

//exports
module.exports=route;