#!/usr/bin/env node
'use strict';
var getStdin = require('get-stdin');
var meow = require('meow');
var hasAnsi = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ has-ansi <string>',
		'  $ echo <string> | has-ansi',
		'',
		'Exits with code 0 if input has ANSI escape codes and 1 if not'
	].join('\n')
});

function init(data) {
	process.exit(hasAnsi(data) ? 0 : 1);
}

if (process.stdin.isTTY) {
	if (!cli.input[0]) {
		console.error('String required');
		process.exit(2);
	}

	init(cli.input[0]);
} else {
	getStdin(init);
}
