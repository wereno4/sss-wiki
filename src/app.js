"use strict";
const PORT = 3000;

const express = require('express');
const mongoose = require('mongoose');

const wikiRouter = require('./router/wikiRouter');
const accountRouter = require('./router/accountRouter');
const adminRouter = require('./router/adminRouter');
const helmet = require('helmet');


require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(() => console.log('connected')).catch((err) => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            'connect-src': ["'self'", "http://127.0.0.1:3000"]
        }
    }
}));

app.get('/', function(req, res) {
    res.send('developing');
});

app.use('/article', wikiRouter);

// app.use('/user', accountRouter);

// app.use('/admin', adminRouter);

app.listen(PORT, (err) => {
    if(err) return console.log(err);
    console.log(`server started at port ${PORT}`);

})
