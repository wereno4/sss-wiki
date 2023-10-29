"use strict";

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    original: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: true,
        ref: 'Article'
    },
    dataType: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'DataType'
    }
}, {strict: false});


module.exports = dataSchema;