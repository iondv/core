/**
 * Created by krasilneg on 03.11.20.
 */
'use strict';

module.exports = obj => {
  if (obj) {
    for (let nm in obj) {
      if (obj.hasOwnProperty(nm)) {
        return false;
      }
    }
  }
  return true;
};
