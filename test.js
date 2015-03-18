'use strict';
var assert = require('assert');
var childProcess = require('child_process');
var hasAnsi = require('./');

it('should check if a string has ANSI escape codes', function () {
	assert(hasAnsi('foo\u001b[4mcake\u001b[0m'));
	assert(!hasAnsi('cake'));
});

describe('the cli', function () {
	it('should exit with 0 if called with stdin containing ANSI escape codes', function (done) {
		var cli = childProcess.spawn('./cli.js');

		cli.on('exit', function (code) {
			assert(code === 0);
			done();
		});

		cli.stdin.write('foo\u001b[4mcake\u001b[0m');
		cli.stdin.end();
	});

	it('should exit with 1 if called with stdin containing ANSI escape codes', function (done) {
		var cli = childProcess.spawn('./cli.js');

		cli.on('exit', function (code) {
			assert(code === 1);
			done();
		});

		cli.stdin.write('boring plain old string');
		cli.stdin.end();
	});
});
