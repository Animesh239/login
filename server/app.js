const bodyParser = require('body-parser');
const express = require('express');
const authRoutes = require('./routes/auth')
const app = express();

app.use(bodyParser.json());

app.use(authRoutes) ;

app.listen(8000)