const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vueConfig = require('./vue-loader.config');
const projectRoot = path.resolve(__dirname, '../');
const vuxLoader = require('vux-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
    devtool: '#source-map',
    entry: {
        app: './src/assets/js/index.js',
        vendor: [
            'axios',
            'jquery',
            'lodash',
            'velocity-animate',
            'vue',
            'vue-router', 
            'vuex'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                  formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
                // loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            { 
                test: /iview.src.*?js$/, 
                loader: 'babel-loader' 
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback:'style-loader', use: 'css-loader!sass-loader'})
                // loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // 配置应用层的模块（要被打包的模块）解析
    resolve: {
        // 这样就无需写后缀
        extensions: ['.js', '.vue', '.json'],
        // 路径别名
        alias: {
            'projectRoot': projectRoot,
            'vue$': 'vue/dist/vue',
            '@': resolve('src'),
            'sass': path.resolve(__dirname, '../src/assets/sass'),
            'jsPath': path.resolve(__dirname, '../src/assets/js'),
            'lang': path.resolve(__dirname, '../src/lang'),
            'components': path.resolve(__dirname, '../src/assets/js/components')
        }
    },
    
    plugins: [
        new ExtractTextPlugin({filename:'[name].[chunkhash].css', allChunks: true}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',

            _: 'lodash',
            'window._': 'lodash',

            Velocity: 'velocity-animate',
            'window.Velocity': 'velocity-animate',

            axios: 'axios',
            'window.axios': 'axios',

            Vue: 'vue',
            'window.Vue': 'vue'
        }),
        new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en'),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         eslint: {
        //             formatter: require('eslint-friendly-formatter')
        //         },
        //     }
        // })
    ]

}

module.exports = vuxLoader.merge(webpackConfig, {
    options: {},
    plugins: [{
        name: 'vux-ui'
    }]
})
