'use strict';

var stream = require('stream');
var util = require('util');

var Transform = stream.Transform;

module.exports = SampleTransform;

util.inherits(SampleTransform, Transform);

/**
 * Some meaningless sample transform just to fill a file with code.
 * 
 * @name SampleTransform
 * @function
 * @param opts 
 * @return 
 */
function SampleTransform (opts) {
  if (!(this instanceof SampleTransform)) return new SampleTransform(opts);

  opts = opts || {};
  
  Transform.call(this, opts);
}

SampleTransform.prototype._transform = function (chunk, encoding, cb) {
  this.push('hello just a sample')
  cb();
};
