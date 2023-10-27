"use strict";

let regex = [
    /((?:=|=#) .+? (?:=|#=)\n)/ug,
    /((?:==|==#) .+? (?:==|#==)\n)/ug,
    /((?:===|===#) .+? (?:===|#===)\n)/ug,
    /((?:====|====#) .+? (?:====|#====)\n)/ug,
    /((?:=====|=====#) .+? (?:=====|#=====)\n)/ug,
    /((?:======|======#) .+? (?:======|#======)\n)/ug
];
let count;

function sliceRecursive (content) {
    let separated = [];
    while (true){
        let stringPosition = temporaryStoredContent.slice(1).search(regex[count])+1;
        if (stringPosition === 0 || stringPosition === -1) {
            separated.push(temporaryStoredContent);
            break;
        }

        separated.push(temporaryStoredContent.substring(0, stringPosition));
        temporaryStoredContent = temporaryStoredContent.substring(stringPosition);        
    
    }

    
}

module.exports = async content => {

    
};