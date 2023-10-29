"use strict";

const makeRawText = async (articleObject) => {
    let rawText;
    if (!Array.isArray(articleObject)) {
        let title;
        if (articleObject.title) {
            title = '='.repeat(articleObject.level) + (articleObject.hidden ? '# ' : ' ') + title + (articleObject.hidden ? ' #' : ' ') + '='.repeat(articleObject.level);
        }
        const content = articleObject.content;
        const childText = (articleObject.hasOwnProperty('child') ? await makeRawText(articleObject.child).then(result => result) : '');
        rawText = title + '\n' + content + '\n' + childText;
    } else {
        for (let paragraph of articleObject) {
            let title;
            if (paragraph.title) {
                title = '='.repeat(paragraph.level) + (paragraph.hidden ? '# ' : ' ') + title + (paragraph.hidden ? ' #' : ' ') + '='.repeat(paragraph.level);
            }
            const content = paragraph.content;
            const childText = (paragraph.hasOwnProperty('child') ? await makeRawText(paragraph.child).then(result => result) : '');
            rawText = title + '\n' + content + '\n' + childText;
        }
    }
    return rawText;
}

module.exports = makeRawText;