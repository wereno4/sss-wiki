"use strict";

const sliceParagraph = require('./sliceParagraph');
const structParagraph = require('./structParagraph');

module.exports = async content => {
    let sliced = await sliceParagraph(content);
    let result = await structParagraph(sliced);
    return result;
}