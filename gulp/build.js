'use strict';

var LOLSPEAK = require('..');
var fs = require('fs');

module.exports = function(gulp, conf) {
  gulp.task('build', function(cb) {
    var LOLME = fs.readFileSync('./README.untranslated.md', 'utf-8');
    fs.writeFileSync('README.md', LOLSPEAK(LOLME));
    cb();
  });
};
