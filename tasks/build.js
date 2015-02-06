module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('build', [
    'bsConfig',
    'clean:dist',
    'copy:dist',
    'useminPrepare',
    'concat:generated',
    'ngAnnotate:dist',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin',
    'compress:dist'
  ]);
};