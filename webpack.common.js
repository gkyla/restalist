const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const ImageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
const imageminWebp = require('imagemin-webp');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
   entry: path.resolve(__dirname, 'src/scripts/index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
   },
   optimization: {
      splitChunks: {
         chunks: 'all',
         minSize: 20000,
         maxSize: 160000,
         minChunks: 1,
         maxAsyncRequests: 30,
         maxInitialRequests: 30,
         automaticNameDelimiter: '~',
         enforceSizeThreshold: 50000,
         cacheGroups: {
            defaultVendors: {
               test: /[\\/]node_modules[\\/]/,
               priority: -10,
            },
            default: {
               minChunks: 2,
               priority: -20,
               reuseExistingChunk: true,
            },
         },
      },
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader',
               },
               {
                  loader: 'css-loader',
               },
            ],
         },
         {
            test: /\.(png|jpg|webp)$/,
            loader: 'file-loader',
            include: path.join(__dirname, 'src'),
         },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'font/',
                  },
               },
            ],
         },
      ],
   },
   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'src/templates/index.html'),
         filename: 'index.html',
      }),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'src/public/'),
               to: path.resolve(__dirname, 'dist/'),
               globOptions: {
                  ignore: ['**/images/heros/**'],
               },
            },
         ],
      }),
      new WorkboxWebpackPlugin.InjectManifest({
         swSrc: './src/scripts/sw.js',
         swDest: 'sw.js',
      }),
      new WebpackPwaManifest({
         filename: 'manifest.json',
         name: 'Restalist',
         short_name: 'Restalist',
         start_url: '/index.html',
         display: 'standalone',
         ios: true,
         inject: true,
         fingerprints: false,
         description: 'Looking for a restaurant is now easier than you imagine',
         background_color: '#ececec',
         crossorigin: 'use-credentials',
         theme_color: '#ececec',
         icons: [
            {
               src: path.resolve('src/public/images/logo.png'),
               sizes: [96, 128, 192, 256, 384, 512],
               destination: path.join('icons'),
            },
            {
               src: path.resolve('src/public/images/maskable_icon.png'),
               size: '640x640',
               purpose: 'maskable',
            },
         ],
      }),
      new ImageminWebpWebpackPlugin({
         config: [
            {
               test: /\.(jpe?g|png)/,
               options: {
                  quality: 50,
               },
            },
         ],
         overrideExtension: true,
      }),
      new ImageminWebpackPlugin({
         plugins: [
            imageminOptipng({
               optimizationLevel: 7,
            }),
            ImageminMozjpeg({
               quality: 50,
               progressive: true,
            }),
            imageminWebp({
               quality: 50,
            }),
         ],
      }),
      new CompressionPlugin(),
      new BundleAnalyzerPlugin(),
   ],
};
