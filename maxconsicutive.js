  let arr = [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0];
  var test = [];
  var temp = 0
    for(var i = 0 ; i < arr.length ; i++ ){
      if(arr[i]===0){
        test.push(temp);
        temp = 0;
      }
    else if(arr[i] === 1){
      temp= temp+1
    }
  }
  var sortarr = test.sort();
  var last = sortarr.length
  var maxnum = sortarr[last-1]
  document.write('Max Consucitive number ' + maxnum);
