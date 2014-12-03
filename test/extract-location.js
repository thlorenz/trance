'use strict';

var test = require('tap').test
var fs = require('fs')
var trance = require('../')

test('\nextracting from lldb trace', function (t) {
  
  var src = fs.readFileSync(__dirname + '/fixtures/lldb-trace.txt', 'utf8')

  var locations = src
    .split('\n')
    .map(trance.extractLocation)
    .filter(function (x) { return x })

  t.deepEqual(
      locations
    , [ '/Users/thlorenz/dev/js/node/src/fs_event_wrap.cc:115',
        '/Users/thlorenz/dev/js/node/deps/v8/src/arguments.cc:33',
        '/Users/thlorenz/dev/js/node/deps/v8/src/builtins.cc:1145',
        '/Users/thlorenz/dev/js/node/deps/v8/src/builtins.cc:1162',
        '/Users/thlorenz/dev/js/node/deps/v8/src/builtins.cc:1161',
        '/Users/thlorenz/dev/talks/memory-profiling/example/app.js:32',
        '/Users/thlorenz/dev/talks/memory-profiling/example/app.js:42',
        '/Users/thlorenz/dev/js/node/deps/v8/src/execution.cc:91',
        '/Users/thlorenz/dev/js/node/deps/v8/src/execution.cc:141',
        '/Users/thlorenz/dev/js/node/deps/v8/src/api.cc:4118',
        '/Users/thlorenz/dev/js/node/src/node_http_parser.cc:292',
        '/Users/thlorenz/dev/js/node/src/node_http_parser.cc:241',
        '/Users/thlorenz/dev/js/node/deps/http_parser/http_parser.c:1653',
        '/Users/thlorenz/dev/js/node/src/node_http_parser.cc:404',
        '/Users/thlorenz/dev/js/node/deps/v8/src/arguments.cc:33',
        '/Users/thlorenz/dev/js/node/deps/v8/src/builtins.cc:1145',
        '/Users/thlorenz/dev/js/node/deps/v8/src/builtins.cc:1162',
        '/Users/thlorenz/dev/js/node/deps/v8/src/builtins.cc:1161',
        '/Users/thlorenz/dev/js/node/deps/v8/src/execution.cc:91',
        '/Users/thlorenz/dev/js/node/deps/v8/src/execution.cc:141',
        '/Users/thlorenz/dev/js/node/deps/v8/src/api.cc:4118',
        '/Users/thlorenz/dev/js/node/src/async-wrap-inl.h:183',
        '/Users/thlorenz/dev/js/node/src/async-wrap-inl.h:235',
        '/Users/thlorenz/dev/js/node/src/stream_wrap.cc:734',
        '/Users/thlorenz/dev/js/node/src/stream_wrap.cc:157',
        '/Users/thlorenz/dev/js/node/src/stream_wrap.cc:172',
        '/Users/thlorenz/dev/js/node/deps/uv/src/unix/stream.c:1138',
        '/Users/thlorenz/dev/js/node/deps/uv/src/unix/stream.c:1201',
        '/Users/thlorenz/dev/js/node/deps/uv/src/unix/kqueue.c:232',
        '/Users/thlorenz/dev/js/node/deps/uv/src/unix/core.c:325',
        '/Users/thlorenz/dev/js/node/src/node.cc:3798',
        '/Users/thlorenz/dev/js/node/src/node_main.cc:65' ]
    , 'finds all locations for js and cc files'
  )
  t.end()
})

test('\nspecial cases', function (t) {
  
  var home = '#0  0x00000001000049a6 in node::FSEventWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&) at ' + 
    '~/dev/js/node/src/fs_event_wrap.cc:115'

  var relative = '#0  0x00000001000049a6 in node::FSEventWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&) at ' + 
    './js/node/src/fs_event_wrap.cc:115'

  t.equal(trance.extractLocation(home), '~/dev/js/node/src/fs_event_wrap.cc:115', 'extracts complete ~/x/x path')
  t.equal(trance.extractLocation(relative), './js/node/src/fs_event_wrap.cc:115', 'extracts complete relative path')
  t.end()

})
