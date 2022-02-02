const path = require('path');
const webpack = require('webpack');
const btoa = require('btoa');
const code = `
const x = require('./invalid.js')
console.log(x);
`;

const url = `data:text/javascript;base64,${btoa(code)}`;
let compiler = webpack({
  entry: url,
  mode: 'production',
  target: 'web',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  },
});
compiler.run((err, res) => {
  if (err) {
    console.log('err');
  }
  if (res) {
  }
  compiler.close(err => {
    if (err) {
      console.log('close err');
      process.exitCode = 1;
    }
  });
});
