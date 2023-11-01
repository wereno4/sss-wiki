const express = require('express');
const articleController = require('../../controller/article');

const router = express.Router();

router.get('/read/:article', 
    articleController.findArticle);

router.post('/edit',
    articleController.editArticle);

router.get('/raw/:article');

module.exports = router;