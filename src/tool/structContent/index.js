"use strict";

const sliceParagraph = require('./sliceParagraph');
const structuralizeParagraph = require('./structuralizeParagraph');

module.exports = async content => {
    let sliced = await sliceParagraph(content);
    let result = await structuralizeParagraph(sliced);
    return result;
}