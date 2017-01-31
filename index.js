"use strict";

const FujiwaraError = require('./fujiwara-error');
const isString = require('lodash.isstring');

module.exports = function(text, opts) {
  if (!isString(text)) {
    const errorMessage = 'そ゛ん゛な゛ひ゛き゛す゛う゛わ゛か゛ら゛ね゛え゛よ゛お゛お゛お゛お゛！゛！゛！゛';
    throw new FujiwaraError(errorMessage);
  }

  opts = Object.assign({
    separator: '゛',
    ignoreSpaces: true,
    ignoreChars: [],
  }, opts);
  if ( opts.ignoreSpaces ) {
    opts.ignoreChars = opts.ignoreChars.concat([' ', '　']);
  }
  return text.split('').map((char) => {
    if ( char.charCodeAt() < 0x20 ) return char;
    if ( opts.ignoreChars.indexOf(char) !== -1 ) return char;
    return char + opts.separator;
  }).join('');
}
