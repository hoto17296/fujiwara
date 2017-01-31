"use strict";

class FujiwaraError extends Error {
  constructor(message) {
    super();
    this.name = 'FujiwaraError';
    this.message = (message || '');
  }
}

module.exports = FujiwaraError;
