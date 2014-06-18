# choose

Create and return clone of provided object by including or excluding given properties.

## Installation

Using [component](https://github.com/component/component)

    $ component install yiwn/choose

Using [npm](http://npmjs.org/) for [browserify](http://browserify.org/)

    $ npm install yiwn-choose

## Usage

Example:

```js
var choose = require('yiwn-choose');

var obj = {
        a: 1,
        b: 2,
        c: 3
    };

choose(obj, ['a', 'b']); // -> { a: 1, b: 2 }
choose(obj, ['a', 'b'], false); // -> { c: 3 }
```

It also provides shortcuts for picking and omitting, which support individual arguments as keys.

```js
choose.pick(obj, 'a', 'b'); // -> { a: 1, b: 2 }
choose.omit(obj, 'a'); // -> { b: 2, c: 3 }
```


## Test

Run tests with [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs)

    $ make test

## Origins

Replacement for Lo-Dash's [`_.pick`](http://lodash.com/docs#pick) and [`_.omit`](http://lodash.com/docs#omit).

## License

The MIT License

