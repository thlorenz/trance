'use strict';

var test = require('tap').test
var trance = require('../')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\nsplits locations', function (t) {
      
  var res;
  res = trance.splitLocation(
    '/Users/thlorenz/dev/js/node/deps/v8/src/arguments.cc:33')
  t.deepEqual(
      res
    , { file: '/Users/thlorenz/dev/js/node/deps/v8/src/arguments.cc',
        lineno: '33' }
    , 'correcly splits /Users/thlorenz/dev/js/node/deps/v8/src/arguments.cc:33'
  )

  res = trance.splitLocation(
    '/Users/thlorenz/dev/talks/memory-profiling/example/app.js:32')
  t.deepEqual(
      res
    , { file: '/Users/thlorenz/dev/talks/memory-profiling/example/app.js',
        lineno: '32' }
    , 'correcly splits /Users/thlorenz/dev/talks/memory-profiling/example/app.js:32'
  )

  res = trance.splitLocation(
    '/Users/thlorenz/dev/js/node/deps/http_parser/http_parser.c:1653')
  t.deepEqual(
      res
    , { file: '/Users/thlorenz/dev/js/node/deps/http_parser/http_parser.c',
        lineno: '1653' }
    , 'correcly splits /Users/thlorenz/dev/js/node/deps/http_parser/http_parser.c:1653'
  )
  t.end()
})
