"use strict";

const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    form: {
        type: mongoose.Schema.Types.Mixed,
        require: true,
    }
});

typeSchema.method.getForm = function () {
    return this.form;
};

module.exports = typeSchema;