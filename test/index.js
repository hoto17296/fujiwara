var fujiwara = require('..');
var assert = require('assert');

describe('fujiwara', () => {

  context('input string', () => {
    it('should add ゛ for each character', () => {
      var text = 'ああああああああ！！！';
      var expect = 'あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛！゛！゛！゛';
      assert(fujiwara(text), expect);
    });
  });

});
