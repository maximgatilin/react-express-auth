// todo migrate to Webpack 2
const path = require('path');

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/App.js'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js'
  },

  module: {
    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    },
      {
        test: /\.css$/,
        loader: `style!css?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss`
      }],
  },

  // Start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};