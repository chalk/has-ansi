import {expectType} from 'tsd';
import hasAnsi from './index.js';

expectType<boolean>(hasAnsi('foo\u001B[4mcake\u001B[0m'));
expectType<boolean>(hasAnsi('cake'));
