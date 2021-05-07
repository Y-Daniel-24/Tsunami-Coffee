const express= require('express');
const app=express();
const path=require('path');

// setting -configuraciones

app.set('port',process.env.PORT || 8080);
app.set('views',path.join(__dirname,'views'));
app.set('views engine','ejs');// revisar si es necesaria
app.engine('html', require('ejs').renderFile);

//route --- rutas

app.use(require('./route/route.js'))

// static file--- archivos estaticos
app.use(express.static(path.join(__dirname,'public')));
//ejecutar--start

app.listen(app.get("port"),(req,res)=>{
 console.log('servidor ejecutandose correctamente en:', app.get('port'));
})

