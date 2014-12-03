'use strict';

var test = require('tap').test
var extract = require('../').extractLines

var file = __dirname + '/fixtures/sample-file.js';

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function check(t, lineno, before, after, expected) {
  extract({ file: file, lineno: lineno }, before, after, function (err, res) {
    if (err) { t.fail(err); return t.end(); }
    if (!expected) {
      inspect(res)
      return t.pass()
    }
    t.deepEqual(res, expected)
  })
}

test('\nextracting one line', function (t) {
  t.plan(2)
  check(t, 1, 0, 0, [ '\'use strict\';' ])
  check(t, 8, 0, 0, [ 'module.exports = SampleTransform;' ])
})

test('\nextracting multiple lines', function (t) {
  t.plan(3)
  check(t, 4, 1, 0, 
    [ 'var stream = require(\'stream\');',
      'var util = require(\'util\');' ])
  check(t, 3, 0, 1, 
    [ 'var stream = require(\'stream\');',
      'var util = require(\'util\');' ])
  check(t, 8, 2, 2,
    [ 'var Transform = stream.Transform;',
    '',
    'module.exports = SampleTransform;',
    '',
    'util.inherits(SampleTransform, Transform);' ])
})

test('\nextracting multiple lines respects file limits', function (t) {
  t.plan(3)
  check(t, 1, 1, 0, [ '\'use strict\';' ])
  check(t, 1, 2, 0, [ '\'use strict\';' ])
  check(t, 3, 5, 1, 
    [ '\'use strict\';',
      '',
      'var stream = require(\'stream\');',
      'var util = require(\'util\');' ])
  check(t, 31, 0, 5, [ '};' ])
  check(t, 31, 3, 5,
    [ 'SampleTransform.prototype._transform = function (chunk, encoding, cb) {',
      '  this.push(\'hello just a sample\')',
      '  cb();',
      '};' ])
})
