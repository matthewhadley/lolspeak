/* eslint-env mocha */
'use strict';

var assert = require('chai').assert;
var fs = require('fs');

var LOLSPEAK = require('./index.js');

describe('Single line phrases', function () {
  it('should be translated', function () {
    assert.equal(
      LOLSPEAK('come here kitty'),
      'COME HER KITTY'
    );
  });
});

describe('Multi line phrases', function () {
  it('should return a multi line translation', function () {
    assert.equal(
      LOLSPEAK('hello\nworld\n\nvery nice to meet you'),
      'Y HALO THAR\nWURLD\n\nVARY NICE 2 MEET U'
    );
  });
});

describe('Full stops, commas and exclamation points', function () {
  it('should be removed', function () {
    assert.equal(
      LOLSPEAK('take, this! away.'),
      'TAEK DIS AWAY'
    );
  });
});

describe('Single line explicit phrases', function () {
  describe('"you are the ultimate winner"', function () {
    it('should return "U R TEH ULTIMATE WINNR"', function () {
      assert.equal(
        LOLSPEAK('you are the ultimate winner'),
        'U R TEH ULTIMATE WINNR'
      );
    });
  });
  describe('"I\'m pretty bored right now"', function () {
    it('should return "ME PRITEE BORED RITE NAO"', function () {
      assert.equal(
        LOLSPEAK('I\'m pretty bored right now'),
        'ME PRITEE BORED RITE NAO'
      );
    });
  });
  describe('"you have broken the build!"', function () {
    it('should return "U HAS BROKD TEH BUILD"', function () {
      assert.equal(
        LOLSPEAK('you have broken the build!'),
        'U HAS BROKD TEH BUILD'
      );
    });
  });
});

describe('README.md', function () {
  var README = fs.readFileSync('./README.md', 'utf-8');
  var LOLME = fs.readFileSync('./README.untranslated.md', 'utf-8');
  it('should be generated LOLSPEAK', function () {
    assert.equal(LOLSPEAK(LOLME) + '\n', README);
  });
});
