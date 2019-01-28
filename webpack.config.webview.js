var path = require('path');

module.exports = {
  mode: 'development',
  target: 'electron-renderer',
  entry: './webview/webviewPreLoader.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'webviewPreLoader.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.webview.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
