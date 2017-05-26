const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VueConfig = {
	preserveWhitespace: false,
	postcss: [
		require('autoprefixer')({
		  browsers: ['last 3 versions']
		})
	]
}

module.exports = VueConfig
