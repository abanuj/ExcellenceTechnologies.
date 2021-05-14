let arr = [0,1,2,3,4,5,6,7,7,8,9,10];
var repetnum = '';
	for(var i = 0 ; i < arr.length ; i++){
    	if(arr[i] === arr[i+1]){
        repetnum = arr[i];
        }
    }
document.write('Repeat number ' + repetnum);
