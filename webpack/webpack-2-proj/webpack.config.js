var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

// 单目标
// module.exports = {
// 	entry:'./src/js/a.js',
// 	// entry:['./src/js/a.js','./src/js/b.js'],
// 	output:{
// 		path:path.resolve(__dirname,'./dist/js'),
// 		filename:'bundle.js'
// 	}
// }

// 多目标
// module.exports = {
// 	entry:{
// 		a:'./src/js/a.js',
// 		b:'./src/js/b.js'
// 	},
// 	output:{
// 		path:path.resolve(__dirname,'./dist/js'),
// 		filename:'[name]-[chunkhash]-bundle.js'
// 	}
// }

// 插件使用
module.exports = {
	entry:{
		a:'./src/js/a.js',
		b:'./src/js/b.js'
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name]-[chunkhash]-bundle.js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html',  //定义模版文件
			filename:'index.html',  //定义生成文件的名称
			inject:'head'  // 定义js的引用在哪个位置，默认body，可选head
			// 可选参数传递，在html中使用模版引擎来获取。
			// 节省引用到index.html中的时间。
		})
	],
	devtool:'inline-source-map',
	devServer:{
		contentBase:path.resolve(__dirname,'dist')
	}
}