"use strict";

const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        index: true
    },
    form: {
        type: mongoose.Schema.Types.Mixed,
        require: true,
    }
});

module.exports = typeSchema;