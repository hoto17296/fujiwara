module.exports = function(text, opts) {
  opts = Object.assign({
    separator: '゛',
  }, opts);
  if ( typeof text.split !== 'function' ) throw new TypeError();
  return text.split('').map((char) => {
    return char + opts.separator;
  }).join('');
}
