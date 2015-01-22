module.exports = function (grunt) {
  function loadConfig(path) {
    var object = {};
    var key;

    grunt.file.expand({ cwd: path }, '*.js').forEach(function (option) {
      key = option.replace(/\.js$/, '');
      object[key] = require(path + option);
    });

    return object;
  }

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  require('lodash.assign')(config, loadConfig('./tasks/options/'));
  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('tasks');

  grunt.registerTask('test:server', [
    'karma:server',
    'watch'
  ]);

  grunt.registerTask('default', ['jshint:all']);
};