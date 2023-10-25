"use strict";

module.exports = async content => content
                            .replace(/'''''(.+?)'''''/ug, '<strong><em>$1</em></strong>')
                            .replace(/'''(.+?)'''/ug, '<strong>$1</strong>')
                            .replace(/''(.+?)''/ug, '<em>$1</em>');