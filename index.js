module.exports = function(text, opts) {
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
    if ( opts.ignoreChars.indexOf(char) !== -1 ) return char;
    return char + opts.separator;
  }).join('');
}
