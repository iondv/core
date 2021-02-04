/**
 * Created by krasilneg on 03.11.20.
 */
'use strict';

module.exports = (seq, worker) => {
  let p = null;
  if (!Array.isArray(seq)) {
    seq = [seq];
  }
  try {
    seq.forEach(s => {
        p = p ? p.then(() => worker(s)) : worker(s);
    });
  } catch (err) {
    return Promise.reject(err);
  }
  return p || Promise.resolve();
};
