"use strict";

module.exports = async content => content
.replace(/<#([0-9a-fA-F][0-9a-fA-F][0-9a-fA-F](?:[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])?)>(.+)<\/>/ug, '<span style="color:#$1">$2</span>')
.replace(/<#([a-zA-Z]+)>(.+)<\/>/ug, '<span style="color:$1">$2</span>');