import test from 'ava';
import m from './';

test(t => {
	t.true(m('foo\u001b[4mcake\u001b[0m'));
	t.false(m('cake'));
});
