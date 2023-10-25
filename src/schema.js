const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    isArticle: {
        type: Boolean,
        required: true
    },
    alias: [String],
    parent: [Schema.Types.ObjectId],
    articleType: {
        type: Schema.Types.ObjectId,
        required: true
    },
    information: {
        type: Schema.Types.ObjectId,
        unique: true
    },
    content: {
        type: String,
        required: true
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;