var fujiwara = require('..');
var assert = require('assert');

describe('fujiwara', () => {

  it('should add ゛ for each character', () => {
    var text = 'ああああああああ！！！';
    var expect = 'あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛！゛！゛！゛';
    assert.equal(fujiwara(text), expect);
  });

});
