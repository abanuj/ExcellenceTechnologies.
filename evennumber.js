  let arr = [6,5,4,3,65,53,434,553,53,435,254,534,5345,654,64,3];
  var newnum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newnum = newnum+1
    }
  }
  document.write('Even Numbers: ' + newnum);
