'use strict';
var ansiRegex = require('ansi-regex');

// remove the `g` flag
var re = new RegExp(ansiRegex().source);

module.exports = re.test.bind(re);
