const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'testLib',
    libraryTarget: 'umd', // 输出格式为 UMD
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }
};
