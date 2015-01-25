module.exports = {
  dist: {
    options: {
      archive: 'instant-bootstrap.zip'
    },
    expand: true,
    cwd: 'dist/',
    src: ['**/*'],
    dest: '/'
  }
};