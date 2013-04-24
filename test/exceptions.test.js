var zipfile = require('zipfile');
var assert = require('assert');

describe('Exceptions', function(){

    it('should throw as archive does not exit', function(){
      assert.throws(function() { new zipfile.ZipFile('thisdoesnotexist.zip'); });
    });

    it('should throw as the file is invalid', function(){
      assert.throws(function() { new zipfile.ZipFile('./test/data/invalid.zip'); });
    });

});