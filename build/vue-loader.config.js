const isProd = process.env.NODE_ENV === 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  extractCSS: isProd,
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ],
  loaders: {
    // 用 babel-loader 加载所有没有 "lang" 属性的 <script>
    js: 'babel-loader',
    // 将vue里面的css和sass抽离出来组成一个独立的css文件
    css: isProd
      ? ExtractTextPlugin.extract({
        fallback: 'vue-style-loader', 
        use: 'css-loader'})
      : 'vue-style-loader!css-loader',
    sass: isProd
      ? ExtractTextPlugin.extract({
        fallback:'vue-style-loader', 
        use: 'css-loader!sass-loader'})
      : 'vue-style-loader!css-loader!sass-loader'
  }
}
