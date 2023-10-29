"use strict";
const PORT = 3000;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const wikiRouter = require('./router/wikiRouter');
const accountRouter = require('./router/accountRouter');
const adminRouter = require('./router/adminRouter');

const app = express();

mongoose.connect("");

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('developing');
});

app.use('/article', wikiRouter);

app.use('/user', accountRouter);

app.use('/admin', adminRouter);

app.listen(PORT, (err) => {
    if(err) return console.log(err);
    console.log(`server started at port ${PORT}`);

})
