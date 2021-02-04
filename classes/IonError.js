const strings = require('../utils/strings');

/**
 *
 * @param {String | Number} code
 * @param {{}} [params]
 * @param {Error} cause
 * @constructor
 */
function IonError(code, params, cause) {

  this.code = code;

  this.cause = cause;

  this.params = params || {};

  Object.defineProperty(this, 'message', {
    get: () => strings.s('errors', code, params) || cause && cause.message || 'Unknown error'
  });

  Error.captureStackTrace(this, IonError);
}

IonError.prototype = Object.create(Error.prototype);
IonError.prototype.constructor = IonError;
IonError.prototype.getMessage = function (lang) {
  return strings.s('errors', this.code, this.params, lang) || this.cause && this.cause.message || 'Unknown error';
};

module.exports = IonError;

/**
 * @param {{}} base
 */
module.exports.registerMessages = function (base) {
  if (base) {
    strings.registerBase('errors', base);
  }
};
