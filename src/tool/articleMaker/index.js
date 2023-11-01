const wikiParser = require("../wikiParser");

const articleMaker = async articleObject => {
    const resultObject = articleObject;
    if (!Array.isArray(resultObject)) {
        resultObject.content = await wikiParser(resultObject.content);
        if (resultObject.hasOwnProperty("child")) {
            resultObject.child = await articleMaker(resultObject.child);
        }
    } else {
        for (let paragraph of resultObject) {
            paragraph.content = await wikiParser(paragraph.content);
            if (paragraph.hasOwnProperty("child")) {
                paragraph.child = await articleMaker(paragraph.child);
            }
        }
    }
    return resultObject;
}

module.exports = articleMaker;