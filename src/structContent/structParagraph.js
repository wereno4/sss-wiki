"use strict";

module.exports = async contentArray => {

    if (contentArray.length === 1) {
       return contentArray[0];
   }
   let constructArray = contentArray;
   for (let i = 5; i >= 0; i--) {
       const currentIndexes = constructArray.map((element, index) => {
           if (element.level === i) {
               return index;
           }
       })
       .filter(element => element >= 0);
       if(currentIndexes.length === 0) {
           if(i === 0) {
               return {
                   title: null,
                   level: 0,
                   hidden: false,
                   child: constructArray
               };
           }
           continue;
       } else if (currentIndexes.length === 1) {
           currentIndexes.push(constructArray.length);
       }
       for (let j = 0; j < currentIndexes.length; j++) {
           if (currentIndexes[j] === constructArray.length || currentIndexes[j+1] - currentIndexes[j] <= 1) {
               continue;
           } else {
               constructArray[currentIndexes[j]].child = [];
               for (let k = currentIndexes[j]+1; k < currentIndexes[j+1]; k++) {
                   if(constructArray[k].level <= i) {
                       break;
                   }
                   constructArray[k].index = k - currentIndexes[j];
                   constructArray[currentIndexes[j]].child.push(constructArray[k]);
               }
               if (constructArray[currentIndexes[j]].child.length === 0) {
                delete constructArray[currentIndexes[j]].child;
               }
           }
       }
       constructArray = constructArray.filter(item => item.level <= i)
   }
 
   return constructArray[0];
 };