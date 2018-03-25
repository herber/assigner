# assigner [![Build Status](https://travis-ci.org/herber/assigner.svg?branch=master)](https://travis-ci.org/herber/assigner)

> Assign objects

## Install

```
$ npm install assigner
```

## Usage

```js
const assigner = require('assigner');

const a = { a: 'foo', c: 'foo-bar' };
const b = { a: 'bar', b: 'baz' };

assigner(a, b);
// => { a: 'bar', b: 'baz', c: 'foo-bar' }
```

## API

### assigner(...object)

#### object

Type: `object`

As many objects as you want. The last one will win.

## License

MIT © [Tobias Herber](http://tobihrbr.com)
