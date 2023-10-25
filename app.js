const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
import Article from './src/schema';

const app = express();

mongoose.connect("");

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('developing');
});

app.get('/read/:article', function(req, res) {
    let result = Article.findOne({title: req.params.article});
    res.send(result);
});

app.post('/write/:article', function(req, res) {
    // Write article
});

app.get('/tree/:article', function(req, res) {
    // Find tree of category
});

