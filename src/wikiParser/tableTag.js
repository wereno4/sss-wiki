"use strict";

module.exports = async content => {
    let parsingContent = content;
    let rawTableArray = [];
    let parsedTableArray = [];
    while (true) {
        const firstPoint = parsingContent.search(/\|\|/g);
        const secondPoint = parsingContent.search(/\|\|\n[^|]/g);
        let rawTable = '';
        if (secondPoint === -1) {
            if(firstPoint !== -1 &&
                firstPoint !== parsingContent.length - 2 &&
                (parsingContent.substring(parsingContent.length - 2, parsingContent.length) === '||' ||
                parsingContent.substring(parsingContent.length - 3, parsingContent.length) === '||\n'
            )) {
                rawTable = parsingContent.substring(firstPoint, parsingContent.length);
            } else {
                break;
            }
        } else {
            rawTable = parsingContent.substring(firstPoint, secondPoint + 3);
        }
        if (rawTable[rawTable.length - 1] !== '\n') {
            rawTable = rawTable + '\n';
        }
        rawTableArray.push(rawTable);
        let parsedTable = '<table>';
        while(rawTable !== '') {
            const rowPoint = rawTable.search(/\|\|\n/g);
            let row = rawTable.substring(0, rowPoint + 2);
            row = row.replace(/\|\|<-([0-9]+)>/g, '</td><td colspan="$1">')
                    .replace(/\|\|<\|([0-9]+)>/g, '</td><td rowspan="$1">')
                    .replace(/\|\|/g, '</td><td>');
            row = '<tr>' + row.substring(5, row.length - 4) + '</tr>'
            parsedTable = parsedTable + row;
            rawTable = rawTable.substring(rowPoint + 3);
        }
        parsedTable = parsedTable + '</table>';
        parsedTableArray.push(parsedTable);
        if (secondPoint === -1) {
            break;
        }
        parsingContent = parsingContent.substring(secondPoint + 3);
    }
    let parsedContent = content;
    for (let i = 0; i < rawTableArray.length; i++) {
        parsedContent = parsedContent.replace(rawTableArray[i].substring(0,rawTableArray[i].length - 1), parsedTableArray[i]);
    }

    return parsedContent;
};