const wikiParser = require("../wikiParser");

async function articleMaker(articleObject) {
    const resultObject = articleObject;
    if (!Array.isArray(resultObject)) {
        let parsedContent = wikiParser(resultObject.content);
        resultObject.child = articleMaker(resultObject.child);
        resultObject.content = await parsedContent;
    } else {
        for (let paragraph of resultObject) {
            let parsedContent = wikiParser(paragraph.content);
            paragraph.child = articleMaker(resultObject.child);
            resultObject.content = await parsedContent;
        }
    }
    return resultObject;
}