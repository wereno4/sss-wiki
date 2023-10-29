"use strict";

const mongoose = require('mongoose');
const { Article } = require('../../model');

async function titleFinder(idString) {
    const id = new mongoose.Types.ObjectId(idString);
    const foundArticle = await Article.findById(id, 'title').exec();
    if (foundArticle) {
        return foundArticle.title;
    } else {
        return null;
    }
}

module.exports = async content => {
    let result = content;
    const brackets = [];
    let match;
    if (/\[\[([0-9a-f]+) (.+)\]\]/ug.test(result)) {
        const regex = /\[\[([0-9a-f]+) (.+)\]\]/ug;
        while ((match = regex.exec(result)) !== null) {
            const title = await titleFinder(match[1]);
            if (title) {
                brackets.push([match[0], `<a href="./${title.name}_${title.index}">${match[2]}</a>`]);
            } else {
                brackets.push(match[0], '');
            }
        }
    }
    if (/\[\[([0-9a-f]+)\]\]/ug.test(result)) {
        const regex = /\[\[([0-9a-f]+)\]\]/ug;
        while ((match = regex.exec(result)) !== null) {
            const title = await titleFinder(match[1]);
            if (title) {
                brackets.push([match[0], `<a href="./${title.name}_${title.index}">${title.name}</a>`]);
            } else {
                brackets.push(match[0], '');
            }
        }
    }
    for (let bracket of brackets) {
        result = result.replace(bracket[0], bracket[1]);
    }
    return result;
}