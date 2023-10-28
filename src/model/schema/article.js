"use strict";

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: {
            name: String,
            index: Number
        },
        required: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: true
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
    categories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Article'
    },
    mainArticle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        index: true
    },
    articleType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dataType',
        required: true
    },
    information: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

module.exports = articleSchema;