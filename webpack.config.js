const path = require('path');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  js: path.resolve(__dirname, 'src/js'),
};

module.exports = {
  entry: path.join(paths.js, 'app.js'),
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
};
