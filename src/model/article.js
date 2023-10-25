"use strict";

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    alias: [{
        types: String,
        index: true
    }],
    isCategory: {
        type: Boolean,
        required: true
    },
    containChildrenToParent: {
        type: Boolean,
        required: true
    },
    categories: [mongoose.Schema.Types.ObjectId],
    mainArticle: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
    },
    articleType: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    information: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    content: {
        type: String,
        required: true
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;