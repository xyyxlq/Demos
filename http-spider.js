// 基础版爬虫，爬取页面源码并打印出来，未对结果进行处理。
var http = require('http')
var url = 'http://www.imooc.com/learn/348'

http.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html += data
	})

	res.on('end',function(){
		console.log(html)
	})


}).on('error',function(){
	console.log('爬取数据失败！')
})