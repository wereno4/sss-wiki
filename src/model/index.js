"use strict";

const mongoose = require('mongoose');
const articleSchema = require('./schema/article');
const userSchema = require('./schema/user');
const typeSchema = require('./schema/type');

const Article = mongoose.model('Article', articleSchema);
const User = mongoose.model('User', userSchema);
const dataType = mongoose.model('dataType', typeSchema);

module.exports = {
    Article,
    dataType,
    User
}