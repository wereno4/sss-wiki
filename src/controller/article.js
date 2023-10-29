const { Article } = require("../model");

const findArticle = async (req, res, next) => {
    const [index, ...rest] = req.params.article.split("_").reverse();
    const title = rest.reverse().join('_');
    const pipeline = [{
        $match : {
            'title.name': title,
            'title.index': index
        }
    }]
    const article = await Article.aggregate(pipeline).exec().lean();
}