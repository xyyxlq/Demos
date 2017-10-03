var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app.js',
	output: {
		filename: 'js/app.js',
		path: path.resolve(__dirname,'dist')
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html'
		})
	],
	devtool:'inline-source-map',
	devServer:{
		contentBase:path.resolve(__dirname,'dist')
	}
}	