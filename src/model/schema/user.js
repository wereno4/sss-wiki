"use strict";

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    //    match: /^(?=.*[a-zA-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[0-9]).{8,}$/
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    registredDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = userSchema;