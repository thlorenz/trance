'use strict';

var fs = require('fs');
var path = require('path');
var cardinal = require('cardinal')
  , pygmentize = require('pygmentize-bundled')

var pathRegex = /(:?[.~]{0,1}(?:[/][^/]+?)+:\d+)/

var si = setImmediate == 'function' ? setImmediate : function _setImmediate(fn) { setTimeout(fn, 0) }

exports.extractLocation = 

/**
 * Extracts **one** location to a file contained in the given line
 * 
 * @name extractLocation
 * @function
 * @param {string} line the line that may contain a location
 * @return {string} the location or null if it wasn't found
 */
function extractLocation(line) {
  var match = line.match(pathRegex);
  return match && match[0];
}

exports.splitLocation =

/**
 * Splits a given location containing filename in line number
 * 
 * @name splitLocation
 * @function
 * @param {string} location location of shape '/path/to/file:lineno'
 * @returns {Object} { file: '/path/to/file', lineno: xx }
 */
function splitLocation(location) {
  var parts = location.split(/:/);
  if (parts.length < 2) return { file: location };

  return {
      file: location.slice(0, -(parts[1].length + 1))
    , lineno: parts[1]
  }
}

exports.extractLines =

/**
 * Given a location reads the location file and returns matching lines
 * around the lineno.
 * 
 * @name extractLines
 * @function
 * @param {Object} location `{ file, lineno }`, lineno being *1 based*
 * @param {number} before how many lines to include before the matching lineno
 * @param {number} after how many lines to include after the matching lineno
 * @param {function} cb called back with error or extracted lines
 */
function extractLines(location, before, after, cb) {
  fs.exists(location.file, function onexists(yes) {
    if (!yes) return cb();  
    getLines(); 
  })

  function getLines() {
    fs.readFile(location.file, 'utf8', function onreadFile(err, src) {
      if (err) return cb(err);
      var lines = src.split('\n');
      if (lines.length < location.lineno) cb(new Error('Specified line is out of range'));

      var zerobased = location.lineno - 1;
      var start = Math.max(0, zerobased - before)
        , end = Math.min(lines.length - 1, zerobased + after + 1);

      cb(null, lines.slice(start, end))
    })
  }
}

function highlight(frame, cb) {
  var ext = path.extname(frame.file);
  var highlighted;

  // for JS we prefer cardinal since it's much faster as it doesn'g spawn anything
  if (ext === '.js') {
    try {
      highlighted = cardinal.highlight(frame.src);
      return si(function cb_() { cb(null, highlighted) });
    } catch(e) {
      // if we error out here just fall through to let pygments have a go
    }
  }
  
  (function tryPygmentize(lang) {
    pygmentize({ format: 'console256', lang: lang }, frame.src, onpygmentized)

    function onpygmentized(err, buf) {
      if (err) { 
        // In case we tried to provide the language it could happen that a lexer
        // for it wasn't find. Let's try again without that to make it pick the best one.
        if (lang) return tryPygmentize();

        return cb(err);
      }
      cb(null, buf.toString());
    }
  })(ext.length && ext.slice(1))
}
