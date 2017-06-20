import test from 'ava';
import m from '.';

test(t => {
	t.true(m('foo\u001B[4mcake\u001B[0m'));
	t.false(m('cake'));
});
