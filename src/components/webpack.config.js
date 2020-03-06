const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.yaml$/,
        loaders: ['json-loader', 'yaml-loader'],
        include: path.resolve(__dirname, '../../i18n')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 30000,
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
};