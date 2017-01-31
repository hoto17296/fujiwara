function FujiwaraError(message) {
  this.name = 'FujiwaraError';
  this.message = (message || "");
}
FujiwaraError.prototype = Error.prototype;

module.exports = FujiwaraError;
