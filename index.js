'use strict';

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
