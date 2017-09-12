var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

// // 单目标文件，单入口文件
// module.exports = {
// 	entry: './src/script/app.js',
// 	output: {
// 		path: path.resolve(__dirname, './dist/js'),
// 		filename: 'bundle.js'
// 	}
// }


// // 单目标文件，多入口文件
// module.exports = {
// 	entry: ['./src/script/app.js','./src/script/bpp.js'],
// 	output: {
// 		path: path.resolve(__dirname, './dist/js'),
// 		filename: 'bundle.js'
// 	}
// }


// 多目标文件，多入口文件
module.exports = {
	entry:{
		app: './src/script/app.js',
		bpp: './src/script/bpp.js'
	},
	//占位符有三种：[name]chunk名称，[hash]本次打包的hash值，[chunkhash]本次打包不同chunk的hash值。
	output:{
		path: path.resolve(__dirname, './dist/js'),
		filename:'[name]-[hash].js'
	},
	plugins:[
		new htmlWebpackPlugin()
	]
}