"use strict";

async function makeRawText(articleObject) {
    let rawText = "";
    if (!Array.isArray(articleObject)) {
        const title = articleObject.title;
        const content = articleObject.content;
        const childText = (articleObject.hasOwnProperty('child') ? await makeRawText(articleObject.child).then(result => result) : '');
        rawText = (title ? "=".repeat(articleObject.level) + " " + title + " " + "=".repeat(articleObject.level) + '\n' : '') + content + '\n' + childText;
    } else {
        for (let paragraph of articleObject) {
            const title = paragraph.title;
            const content = paragraph.content;
            const childText = (paragraph.hasOwnProperty('child') ? await makeRawText(paragraph.child).then(result => result) : '');
            rawText = rawText + (title ? "=".repeat(paragraph.level)+ " " + title + " " + "=".repeat(paragraph.level) + '\n' : '') + content + '\n' + childText;
        }
    }
    return rawText;
}

module.exports = async structedArticle => await makeRawText(structedArticle);