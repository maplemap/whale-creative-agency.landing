const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';
const NODE_PORT = process.env.NODE_PORT || 8090;

function getEntrySources(sources) {
  if (!isProd) {
    sources.unshift('react-hot-loader/patch');
    sources.unshift(`webpack-dev-server/client?http://${NODE_HOST}:${NODE_PORT}`);
    sources.unshift('webpack/hot/dev-server');
  }

  return sources;
}


module.exports = {
  entry: {
    js: getEntrySources(['./src/main.js']),
    vendor: [
      'react',
      'react-dom',
      'react-tap-event-plugin',
      'redux',
      'react-redux',
      'react-masonry-component',
      'react-nl2br',
      'react-scroll',
      'react-slick',
      'react-waypoint',
      'classnames'
    ]
  },
  output: {
    path: path.join(__dirname, '/public/build/'),
    publicPath: '/build/',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  performance: {
    hints: isProd ? 'warning' : false
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: isProd
              ? ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader' })
              : ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: isProd
              ? ExtractTextPlugin.extract({ fallback: 'style-loader',
                loader: ['css-loader', 'less-loader'] })
              : ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [
          'file-loader?name=images/[sha512:hash:base64:7].[ext]',
          {
            loader: 'img-loader',
            query: {
              gifsicle: { interlaced: false },
              jpegtran: {
                progressive: true,
                arithmetic: false
              },
              optipng: { optimizationLevel: 5 },
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { convertPathData: false }
                ]
              }
            }
          }
        ],
        exclude: [/node_modules/, /src\/fonts/]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'file-loader?name=fonts/[name].[ext]',
        exclude: [/node_modules/, /src\/img/]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-decorators-legacy'],
              presets: [
                ['es2015', { modules: false }],
                'react',
                'stage-0'
              ]
            }
          }
        ],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  devServer: {
    historyApiFallback: false,
    inline: false,
    contentBase: path.join(__dirname, '/public'),
    port: NODE_PORT,
    hot: true,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      progress: false,
      timings: false,
      version: false,
      warnings: false,
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};

if (isProd) {
  const productionPlugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      postcss: [
        mixins(),
        autoprefixer({
          browsers: 'last 10 versions'
        })
      ],
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ];

  module.exports.plugins.push(...productionPlugins);
} else {
  const productionPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ];

  module.exports.plugins.push(...productionPlugins);
}
