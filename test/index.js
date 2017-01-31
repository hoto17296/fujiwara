var fujiwara = require('..');
var assert = require('assert');
var FujiwaraError = require('../fujiwara-error');

describe('fujiwara', () => {

  it('should add ゛ for each character', () => {
    var text = 'ああああああああ！！！';
    var expect = 'あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛！゛！゛！゛';
    assert.equal(fujiwara(text), expect);
  });

  it('should ignore spaces', () => {
    var text = 'ああああ ああああ！！！';
    var expect = 'あ゛あ゛あ゛あ゛ あ゛あ゛あ゛あ゛！゛！゛！゛';
    assert.equal(fujiwara(text), expect);
  });

  it('should ignore full-width spaces', () => {
    var text = 'ああああ　ああああ！！！';
    var expect = 'あ゛あ゛あ゛あ゛　あ゛あ゛あ゛あ゛！゛！゛！゛';
    assert.equal(fujiwara(text), expect);
  });

  it('should ignore control characters', () => {
    var text = "ああああ\nああああ！！！";
    var expect = "あ゛あ゛あ゛あ゛\nあ゛あ゛あ゛あ゛！゛！゛！゛";
    assert.equal(fujiwara(text), expect);
  });

  it('should despair with invalid parameter', () => {
    const invalidCases = [
      null,
      1235,
      () => {},
    ];

    invalidCases.forEach(param => {
      assert.throws(fujiwara.bind(this, param), FujiwaraError);
    });
  });

});
