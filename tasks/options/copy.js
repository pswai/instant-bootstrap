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
      src: ['bootstrap-*/less/*.less'],
      dest: 'bootstrap/',
      rename: function (dest, src) {
        var parts = src.split(path.sep);
        var version = parts[0].split('-')[1];
        var filename = path.basename(src);

        return path.join(dest, version, filename);
      }
    }]
  }
};