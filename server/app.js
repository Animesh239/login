const bodyParser = require('body-parser');
const express = require('express');
const authRoutes = require('./routes/auth')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header.set('Access-Control-Allow-Origin' , '*');
    res.header.set('Access-Control-Allow-Methods' , 'GET, POST, PUT, DELETE');
    res.header.set('Access-Control-Allow-Headers' , 'Content-Type');
    next();
  })

app.use(authRoutes) ;

app.listen(8000)