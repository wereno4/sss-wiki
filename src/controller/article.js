const mongoose = require("mongoose");
const { Article } = require("../model");
const articleMaker = require("../tool/articleMaker");
const structContent = require('../tool/structContent');

const findArticle = async (req, res, next) => {
    const [index, ...rest] = req.params.article.split("_").reverse();
    const title = rest.reverse().join('_');
    const pipeline = [{
        $match : {
            'title.name': title,
            'title.index': Number(index)
        }
    }]
    const result = await Article.aggregate(pipeline).exec();
    const article = result[0];
    article.content = await articleMaker(article.content);
    res.json(article);
}

const editArticle = async (req, res, next) => {
    const articleObject = req.body;
    articleObject.content = await structContent(articleObject.content);

    const pipeline = [
        {
            $match: {
                'title.name' : articleObject.title
            }
        },
        {
            $group: {
                _id: 'null',
                maxIndex: { $max : '$title.index' }
            }
        }
    ];

    if (articleObject.id) {
        const id = new mongoose.Types.ObjectId(articleObject.id);
        const isExist = await Article.exists({ _id: id});
        if (!isExist) {
            res.status(404).send('Not found');
        } else {
            const original = await Article.findById(id).exec();
            if (original.title.name !== articleObject.title) {
                const maxIndexArticle = await Article.aggregate(pipeline).exec();
                articleObject.title = {
                    name: articleObject.title,
                    index: maxIndexArticle.length === 0 ? 1 : (maxIndexArticle.maxIndex + 1)
                };
            } else {
                delete articleObject.title;
            }
            delete articleObject.id;
            await Article.findByIdAndUpdate(id, articleObject).exec();
            res.status(201).send("OK!");
        }
    } else {
        const maxIndexArticle = await Article.aggregate(pipeline).exec();
        articleObject.title = {
        name: articleObject.title,
        index: maxIndexArticle.length === 0 ? 1 : (maxIndexArticle[0].maxIndex + 1)
        };

        delete articleObject.id;
        const savingArticle = new Article(articleObject);
        savingArticle.save();
        res.status(201).send("OK!");
    }

}

module.exports = { findArticle,
                    editArticle };