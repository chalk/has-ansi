'use strict';
var test = require('ava');
var hasAnsi = require('./');

test(function (t) {
	t.assert(hasAnsi('foo\u001b[4mcake\u001b[0m'));
	t.assert(!hasAnsi('cake'));
	t.end();
});
