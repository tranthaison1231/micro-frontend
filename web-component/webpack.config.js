const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'web-components.js',
    publicPath: '/wc-app/',
    path: path.resolve(__dirname, '../public/wc-app/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
