var LOLSPEAK = require('./index.js')
  , fs = require('fs');

var LOLME = fs.readFileSync('./README.untranslated.md', 'utf-8');

fs.writeFileSync('README.md', LOLSPEAK(LOLME));