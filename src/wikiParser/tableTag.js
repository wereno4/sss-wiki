"use strict";

module.exports = content => {
    let rawTables = content.match(/((?:\|\|.+\|\|\n)*)/ug);
    let tables, result;
    for (let rawTable of rawTables) {
        //Making Tables
    }
    result = content;
    for (let i in rawTables) {
        result = result.replace(rawTables[i], tables[i]);
    }
    return result;
};