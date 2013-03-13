var YAML = require('yamljs')
  , dict = YAML.load(__dirname + '/tranzlator.yml');


function translate(phrase) {
  var words = phrase.toUpperCase().split(/(?: |,|\.|\!)+/)
    , translation = '';

  words.forEach(function(word) {
    if(dict[word]) word = dict[word];
    translation = translation + word + ' ';
  });
  return translation.trim();
}

module.exports = function(phrase){
  var translation = ''
    , lines = phrase.split(/\n/)
    , ln = lines.length;

  lines.forEach(function(line){
    translation = translation + translate(line);
    if (ln > 1) translation = translation + "\n";
  });

  return translation.trim();
}