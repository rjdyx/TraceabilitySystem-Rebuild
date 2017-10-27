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
	postLoaders: {
		js: 'istanbul-instrument-loader?esMoudles=true'
	}
}

module.exports = VueConfig
