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
  }
};