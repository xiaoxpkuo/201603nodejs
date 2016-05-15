var http=require('http');
var url=require('url');

http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	console.log(pathname);
	if(pathname=='/clock'){
		res.setHeader('Content-Type','txt/html,charset=utf-8');
		res.end('晚上十一点')
	}
}).listen(8787);