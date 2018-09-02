'use strict';

var YAML = require('yamljs');
var path = require('path');
var dict = YAML.load(path.join(__dirname, 'tranzlator.yml'));

function translate (phrase) {
  var words = phrase.toUpperCase().split(/(?: |,|\.|!)+/);
  var translation = '';

  words.forEach(function (word) {
    if (dict[word]) {
      word = dict[word];
    }
    translation = translation + word + ' ';
  });
  return translation.trim();
}

module.exports = function (phrase) {
  var translation = '';
  var lines = phrase.split(/\n/);
  var ln = lines.length;

  lines.forEach(function (line) {
    translation = translation + translate(line);
    if (ln > 1) {
      translation = translation + '\n';
    }
  });

  return translation.trim();
};
