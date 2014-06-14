'use strict';
var assert = require('assert');
var hasAnsi = require('./');

it('should check if a string has ANSI escape codes', function () {
	assert(hasAnsi('foo\u001b[4mcake\u001b[0m'));
	assert(!hasAnsi('cake'));
});
