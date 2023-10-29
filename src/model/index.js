"use strict";

const mongoose = require('mongoose');
const articleSchema = require('./schema/article');
const userSchema = require('./schema/user');
const typeSchema = require('./schema/type');
const dataSchema = require('./schema/data');

const Article = mongoose.model('Article', articleSchema);
const User = mongoose.model('User', userSchema);
const dataType = mongoose.model('DataType', typeSchema);
const Data = mongoose.model('Data', dataSchema);

module.exports = {
    Article,
    dataType,
    Data,
    User
}