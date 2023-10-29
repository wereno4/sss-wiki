const express = require('express');

const router = express.router();

router.get('/read/:article');

router.post('/edit/:article');

router.get('/raw/:article');

