const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VueConfig = {
	preserveWhitespace: false,
	postcss: [
		require('autoprefixer')({
		  browsers: ['last 3 versions']
		})
	],
	loaders:{
		js: 'babel-loader'
	},
	scss: 'vue-style-loader!css-loader!sass-loader',
	sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
}

module.exports = VueConfig
