import test from 'ava';
import hasAnsi from './index.js';

test('main', t => {
	t.true(hasAnsi('foo\u001B[4mcake\u001B[0m'));
	t.false(hasAnsi('cake'));
});
