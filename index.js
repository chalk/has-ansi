'use strict';
const ansiRegex = require('ansi-regex');

// Removes the `g` flag
const regex = new RegExp(ansiRegex().source);

module.exports = string => regex.test(string);
