const FujiwaraError = require('./fujiwara-error');

module.exports = function(text, opts) {
  try {
    opts = Object.assign({
      separator: '゛',
      ignoreSpaces: true,
      ignoreChars: [],
    }, opts);
    if ( typeof text.split !== 'function' ) throw new TypeError();
    if ( opts.ignoreSpaces ) {
      opts.ignoreChars = opts.ignoreChars.concat([' ', '　']);
    }
    return text.split('').map((char) => {
      if ( char.charCodeAt() < 0x20 ) return char;
      if ( opts.ignoreChars.indexOf(char) !== -1 ) return char;
      return char + opts.separator;
    }).join('');
  } catch (err) {
    const errorMessage = 'そ゛ん゛な゛ひ゛き゛す゛う゛わ゛か゛ら゛ね゛え゛よ゛お゛お゛お゛お゛！゛！゛！゛';
    throw new FujiwaraError(errorMessage);
  }
}
