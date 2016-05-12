/*

function travelTree(child){
	if(!child){
		return ;
	}else{

	}
}

function jie(num){
	var sum=1;
	while(num >= 2){
		sum*=num;
		num--;
	}
	return sum;
}
//console.log(jie(2));

function factorial( n ){
	var sum=1;
	if(n <= 1){
		return sum;
	}else{
		sum=n * factorial( n-1 )
	}
}
console.log(factorial(4));
*/

var b = new Buffer(50);

console.log(b);

var c = b.toString('utf8',0,10);

console.log(c);