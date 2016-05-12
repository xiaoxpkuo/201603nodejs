/**
 * Created by xp on 2016/5/9.
 */
var fs=require('fs');
var path=require('path');

//fs.readFile();
//fs.writeFile();
function copy(src,target){
	fs.readFile(src,function(err,data){
		if(err) throw err;
		fs.writeFile(target,data,function(err){
			if(err) throw err;
			console.log('successful');
		})
	})
}
//fs.mkdir();
//fs.readdir();
fs.stat('./dir',function(err,stat){
	//console.log(stat.isFile());
});
fs.exists('./b',function(ex){
	console.log(ex);
});
//拼接路径
/*path.join(__dirname,'a');
path.resolve();
path.basename();*/

fs.mkdirp=function(dir,err){
	if(typeof  dir != 'string') throw new Error('dir must be a string');
	var dirArr=dir.split(path.sep);
	console.log(path.sep)
	console.log(dirArr)
	/*dirArr.forEach(function(dirItem){
		fs.exists(dirItem,function(exists){
			if(!exists){
				fs.mkdir(path.join(dirItem))
			}
		});

	})*/
};
fs.mkdirp('foo/bar/ba');