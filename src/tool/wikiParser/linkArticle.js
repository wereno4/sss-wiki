"use strict";

/**
 * This code is not tested
 */

const mongoose = require('mongoose');
const { Article } = require('../../model');

async function replaceAsync(inputString, regex, callbackFn) {
    const promises = [];
    inputString.replace(regex, (match, ...args) => {
        const promise = callbackFn(match, ...args);
        promises.push(promise);
    });
    const data = await Promise.all(promises);
    return inputString.replace(regex, () => data.shift());
}

module.exports = async content => await replaceAsync(content, 
        /\[\[([0-9a-f]+)(?: (.+)?)\]\]/ug, 
        async (match, p1, p2) => {
        const contentObject = await Article.findById(mongoose.Types.ObjectId(p1), 'title').exec();
        if (!title) {
            return p2;
        } else {
            const title = contentObject.title;
            return `<a href="./${title.name}-${title.index}">${p2 ? p2 : title.name}</a>`;
        }
    });

