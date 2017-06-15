const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/client/src/App.js'),

  output: {
    path: path.resolve(__dirname, 'client/dist/js'),
    filename: 'app.js'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }],
    }, {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        {
          loader: 'postcss-loader'
        }
      ]
    }]
  },

  devServer: {
    port: 9000,
    contentBase: path.join(__dirname),
    proxy: {
      "/": {
        target: "http://localhost:3000",
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            return "/index.html";
          }
        }
      }
    }
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
};