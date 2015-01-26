'use strict';

var path = require('path');

module.exports = {
  dist: {
    files: [{
      // For usemin
      expand: true,
      cwd: 'panel/',
      src: ['index.html'],
      dest: 'dist/panel/'
    }, {
      // Extension files
      src: [
        'bootstrap/**',
        'background.js',
        'content-scripts.js',
        'devtools.html',
        'devtools.js',
        'manifest.json'
      ],
      dest: 'dist/'
    }]
  },
  bootstrap: {
    files: [{
      expand: true,
      cwd: 'vendors/',
      src: ['bootstrap-*/less/**/*.less'],
      dest: 'bootstrap/',
      rename: function (dest, src) {
        var parts = src.split(path.sep);
        var version = parts.shift().split('-')[1];
        parts.shift(); // remove 'less'

        return path.join.apply(this, [dest, version].concat(parts));
      }
    }]
  }
};