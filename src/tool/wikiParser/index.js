"use strict";

const boldItalicStrikeInsTag = require('./boldItalicStrikeInsTag');
const linkArticle = require('./linkArticle');
const tableTag = require('./tableTag');
const textColor = require('./textColor');

module.exports = async content => {
    let result = content;
    result = await linkArticle(result);
    result = await textColor(result);
    result = await tableTag(result);
    result = await boldItalicStrikeInsTag(result);
    return result;
}