const path = require('path');

const SRC_DIR = path.join(__dirname, `src`);
const DIST_DIR = path.join(__dirname, `dist`);

module.exports = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    filename: 'index.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        include: SRC_DIR,
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          'retainLines': true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}