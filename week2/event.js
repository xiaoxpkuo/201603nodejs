var EventEmitter=require('events');
var util=require('util');

function Girl(){
	this.age = 18;
	this.weight= '50kg'
}
util.inherits(Girl,EventEmitter);
var girl=new Girl();
girl.on('hungry',function(thing){
	console.log('i am hungry on'+thing)
});
girl.on('sad',function(){
	console.log('i am sad on')
});
function callback(){
	console.log('addListener')
}
girl.addListener('hungry',callback);
//girl.removeListener('hungry',callback);
girl.emit('hungry','type');
girl.emit('sad');

console.log(girl.listenerCount('hungry'));