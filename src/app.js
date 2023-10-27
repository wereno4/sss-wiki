"use strict";

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

mongoose.connect("");

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('developing');
});

app.get('/read/:article', async function(req, res) {
    // Read article
});

app.post('/write/:article', async function(req, res) {
    // Write article
});

app.get('/tree/:article', function(req, res) {
    // Find tree of category
});
app.get('/raw/:article', async function(req, res) {
    // Raw text of article
})
