# has-ansi [![Build Status](https://travis-ci.org/chalk/has-ansi.svg?branch=master)](https://travis-ci.org/chalk/has-ansi)

> Check if a string has [ANSI escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code)


## Install

```
$ npm install --save has-ansi
```


## Usage

```js
var hasAnsi = require('has-ansi');

hasAnsi('\u001b[4mcake\u001b[0m');
//=> true

hasAnsi('cake');
//=> false
```


## Related

- [has-ansi-cli](https://github.com/chalk/has-ansi-cli) - CLI for this module
- [strip-ansi](https://github.com/chalk/strip-ansi) - Strip ANSI escape codes
- [ansi-regex](https://github.com/chalk/ansi-regex) - Regular expression for matching ANSI escape codes
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
