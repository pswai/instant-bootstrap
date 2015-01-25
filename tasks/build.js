module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('build', [
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