"use strict";

const fujiwara = require('..');
const assert = require('assert');
const FujiwaraError = require('../fujiwara-error');

describe('fujiwara', () => {

  it('should add ゛ for each character', () => {
    const text = 'ああああああああ！！！';
    const expect = 'あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛！゛！゛！゛';
    assert.equal(fujiwara(text), expect);
  });

  it('should ignore spaces', () => {
    const text = 'ああああ ああああ！！！';
    const expect = 'あ゛あ゛あ゛あ゛ あ゛あ゛あ゛あ゛！゛！゛！゛';
    assert.equal(fujiwara(text), expect);
  });

  it('should ignore full-width spaces', () => {
    const text = 'ああああ　ああああ！！！';
    const expect = 'あ゛あ゛あ゛あ゛　あ゛あ゛あ゛あ゛！゛！゛！゛';
    assert.equal(fujiwara(text), expect);
  });

  it('should ignore control characters', () => {
    const text = "ああああ\nああああ！！！";
    const expect = "あ゛あ゛あ゛あ゛\nあ゛あ゛あ゛あ゛！゛！゛！゛";
    assert.equal(fujiwara(text), expect);
  });

  it('should despair with invalid parameter', () => {
    const invalidCases = [
      null,
      1235,
      () => {},
      {},
      /test/,
    ];

    invalidCases.forEach(param => {
      assert.throws(fujiwara.bind(this, param), FujiwaraError);
    });
  });

});
