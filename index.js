const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const appInit = require('./controllers/app.controller').MainClass;
require('./db')(app); //initializing mongoose db

app.use(cors());
app.use(express.json());
app.use(bodyParser());
//initiate controller 
appInit.init(app);

var port = Number(process.env.PORT || 8800);

app.listen(port, (err) => {
    if (!err)
        console.log('Listening on port %d ', port);
});