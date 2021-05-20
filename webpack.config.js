const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    mode: 'development',
    devServer: {
        contentBase: './dist',
    },
    entry: {
        main: './src/js/index.js',
        outstaffing: './src/js/outstaffing.js',
        // cooperation: './src/js/cooperation.js',
        // number: './src/js/number.js',
        // form: './src/js/form.js',
        // application: './src/js/application.js',
        // toddler: './src/js/toddler.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    //   // splitChunks: {
    //   // cacheGroups: {
    //   // styles: {
    //   // name: 'style',
    //   // test: /\.css$/,
    //   // chunks: 'all',
    //   // enforce: true,
    //   // },
    //   // },
    //   // }
    // },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
            chunks: ['main'],
            path: path.resolve(__dirname, 'dist'),
        }),
        new HTMLWebpackPlugin({
            template: './src/html/outstaffing.html',
            filename: 'outstaffing.html',
            chunks: ['outstaffing'],
            path: path.resolve(__dirname, 'dist'),
        }),
        // new HTMLWebpackPlugin({
        //   template: './src/html/number.html',
        //   filename: 'number.html',
        //   chunks: ['number', 'toddler'],
        //   path: path.resolve(__dirname, 'dist'),
        // }),
        // new HTMLWebpackPlugin({
        //   template: './src/html/cooperation.html',
        //   filename: 'cooperation.html',
        //   chunks: ['cooperation'],
        //   path: path.resolve(__dirname, 'dist'),
        // }),
        // new HTMLWebpackPlugin({
        //   template: './src/html/form.html',
        //   filename: 'form.html',
        //   chunks: ['form'],
        //   path: path.resolve(__dirname, 'dist'),
        // }),
        // new HTMLWebpackPlugin({
        //   template: './src/html/application.html',
        //   filename: 'application.html',
        //   chunks: ['application'],
        //   path: path.resolve(__dirname, 'dist'),
        // }),
        new CleanWebpackPlugin(), // очищение папки
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, './src/img'),
                    to: path.resolve(__dirname, 'dist/img'),
                },
                // {
                //   from: path.resolve(__dirname, './src/fonts'),
                //   to: path.resolve(__dirname, 'dist/fonts'),
                // },
                {
                    from: path.resolve(__dirname, './src/video'),
                    to: path.resolve(__dirname, 'dist/video'),
                },
                // { from: path.resolve(__dirname, './src/js/buttons.js'), to: path.resolve(__dirname, 'dist/js/buttons.js') },
                // { from: path.resolve(__dirname, './src/html'), to: path.resolve(__dirname, 'dist') },
            ],
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isDev ? '../css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: isDev ? '../css/[id].css' : 'css/[id].[hash].css',
        }),
        // new OptimizeCssAssetsPlugin({
        //   assetNameRegExp: /\.optimize\.css$/g,
        //   cssProcessor: require('cssnano'),
        //   cssProcessorPluginOptions: {
        //     preset: ['default', { discardComments: { removeAll: true } }],
        //   },
        //   canPrint: true
        // })
    ],
    module: {
        rules: [{
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // {
            // test: /\.js$/,
            // exclude: /node_modules/,
            // use: {
            // loader: "babel-loader"
            // }
            // },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                }, ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|base64)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[folder]/[name].[ext]',
                    },
                }, ],
            },
            {
                test: /\.(mov|mp4)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }, ],
            },
            { test: /node_modules\/flickity/, loader: 'imports?define=>undefined' },
        ],
    },
};