"use strict";

const boldItalicTag = require('./boldItalicTag');
const linkArticle = require('./linkArticle');
const tableTag = require('./tableTag');
const textColor = require('./textColor');

module.exports = async content => {
    let result = content;
    result = await linkArticle(result);
    result = await textColor(result);
    result = await tableTag(result);
    result = await boldItalicTag(result);
    return result;
}