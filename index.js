'use strict';

var fs = require('fs');
var pathRegex = /(:?[.~]{0,1}(?:[/][^/]+?)+:\d+)/

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
