"use strict";

module.exports = async contentArray => {

    let structingArray = contentArray;
    if (structingArray.length === 1) {
      if (structingArray[0].level !== 0) {
        structingArray[0].index = 1;
      }
      return structingArray[0];
    }
    if (structingArray[0].level !== 0) {
        structingArray.unshift({
            title: "",
            level: 0,
            hidden: false,
            content: ""
        });
    }
    for (let i = 6; i >= 0; i--) {
        let check = false;
        for (let j = 0; j < structingArray.length; j++) {
            if (structingArray[j].level === i && j < structingArray.length - 1) {
                check = true;
                structingArray[j].child = [];
                for (let k = j + 1; k < structingArray.length; k++) {
                    if (structingArray[k].level <= structingArray[j].level) {
                        if (structingArray[j].child.length === 0) {
                            delete structingArray[j].child;
                        }
                        j = k - 1;
                        break;
                    } else {
                        structingArray[k].index = k - j;
                        structingArray[j].child.push(structingArray[k]);
                    }
                }
            }
        }
        if (check) {
            structingArray = structingArray.filter(item => item.level <= i);
        }
    }
 
   return structingArray[0];
 };