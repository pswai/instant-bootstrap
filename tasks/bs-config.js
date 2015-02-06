module.exports = function (grunt) {
  'use strict';

  var path = require('path');

  grunt.registerTask('bsConfig', 'Rebuild Bootstrap configs.', [
    'clean:bootstrap',
    'copy:bootstrap',
    'buildConfig'
  ]);

  grunt.registerTask('buildConfig', 'Build Bootstrap configs from variables.less', function () {
    grunt.file
      .expand('bootstrap/*/less/variables.less')
      .forEach(function (varFilePath) {
        var varFile = grunt.file.read(varFilePath);
        var config = parseVariablesLess(varFile);

        var dest = path.join(varFilePath, '../..', 'config.json');
        grunt.file.write(dest, JSON.stringify(config, null, 2));

        grunt.log.ok('Built ' + dest);
      });
  });

  // Parse variables.less
  function parseVariablesLess(file) {
    var lines = file.split('\n');
    var config = {};
    var currentSection;

    lines.forEach(function (line) {
      var matches;
      if (matches = line.match('//== (.+)')) {
        currentSection = matches[1].trim();
        config[currentSection] = {};
      }
      else if (matches = line.match('(@.+):(.+);')) {
        config[currentSection][matches[1].trim()] = matches[2].trim();
      }
    });

    return config;
  }
};
