"use strict";

const regex = /(?:=#? (.+?) #?=\n)|(?:==#? (.+?) #?==\n)|(?:===#? (.+?) #?===\n)|(?:====#? (.+?) #?====\n)|(?:=====#? (.+?) #?=====\n)|(?:======#? (.+?) #?======\n)/u;


function makeThemObject(temporaryString) {
   let level;
      if (/(?:=#? .+? #?=\n)/u.test(temporaryString)) {
         level = 1;
      } else if (/(?:==#? .+? #?==\n)/u.test(temporaryString)) {
         level = 2;
      } else if (/(?:===#? .+? #?===\n)/u.test(temporaryString)) {
         level = 3;
      } else if (/(?:====#? .+? #?====\n)/u.test(temporaryString)) {
         level = 4;
      } else if (/(?:=====#? .+? #?=====\n)/u.test(temporaryString)) {
         level = 5;
      } else if (/(?:======#? .+? #?======\n)/u.test(temporaryString)) {
         level = 6;
      } else {
         level = 0;
      }
      let title = regex.exec(temporaryString) ? temporaryString.match(regex)[0].replace(/(?:={1,6}#?) (.+?) (?:#?={1,6})\n/u, '$1') : "";
      let hidden = /(?:={1,6}#) (.+?) (?:#={1,6})\n/u.test(temporaryString) ? true : false;
      let content = temporaryString.replace(regex, '');
      return {
         title: title,
         level: level,
         hidden: hidden,
         content: content
      };
}


module.exports = async content => {
  let temporaryStoredContent = content;
  let separated = [];
  while (temporaryStoredContent !== ""){
      let stringPosition = temporaryStoredContent.slice(1).search(regex)+1;
      if (stringPosition === 0) {
        let temporaryObject = makeThemObject(temporaryStoredContent);
        separated.push(temporaryObject);
        break;
      }

     let temporaryString = temporaryStoredContent.substring(0, stringPosition);
     let temporaryObject = makeThemObject(temporaryString);
     
      separated.push(temporaryObject);
      temporaryStoredContent = temporaryStoredContent.substring(stringPosition);     
  }
  return separated;
    
};