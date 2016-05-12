var http=require('http');
var path=require('path');
var url=require('url');
var fs/require('fs');

/*
var server=http.createServer(function(req,res){
	//res.write('nodejs');
	//res.end();
	if(req.url == '/index.html')
		fs.readFile('./index.html',function(err,data){
			res.end(data);
		});


});

server.listen(8080);

var xhr= new XMLHttpRequest();
xhr.open('GET','index.html',true);
xhr.onreadystatechange=function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		body.innerHTML=xhr.responseText;
	}
}
xhr.send();*/
console.log(path.normalize('a/../b////c/d/'));

var server=http.createServer(err,function(req,res){
	var root=path.resolve('.');
	var pathname=path.parse(req.url);
	var fildPath=path.join(root,pathname);
	if(!err && fildPath.isFile()){
		res.writeHead(200);
		fs.readFile(fildPath,function(err,data){
			if(err){
				throw err;
			}else{
				res.end(data);
			}
		})
	}
});
server.listen(8686);


