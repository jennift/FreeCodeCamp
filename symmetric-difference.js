
function sym(args) {
  //return arguments[0]; //[1,2,3]
  //return arguments[0][2]; //3
  
  //removes duplicate numbers within each array
  for (var i = 0; i < arguments.length; i++) {
    var tempArray = [];
    for (var j = 0; j < arguments[i].length; j++) {
      if (tempArray.indexOf(arguments[i][j]) < 0) {
        tempArray.push(arguments[i][j]);
      }
    }
    arguments[i] = tempArray.slice(0); //bad assignment, ignore
  }

  //combine all arrays into one array
  var combineArray = [];
  for (var k = 0 ; k < arguments.length ; k++) {
    combineArray.push(arguments[k]);
  }
  //console.log(combineArray); //[[1,2,5],[2,3,5],[3,4,5]]
  //console.log(combineArray.length);
  
  //flatten first two arrays and remove duplicates, repeat
  var flat = [];
  for (var l = 0 ; l <= combineArray.length ; l++) {  
    
    var sliceArr = combineArray.splice(0,2);

    flat = sliceArr.reduce(function(x, y) {
      return x.concat(y);
    });
    //console.log("flat = " + flat); //[1,2,5,2,3,5]

    //remove duplicates and put into another temp Array
    var tempArray2 = [];
    for (var m= 0; m < flat.length; m++) {
      var currentnum = flat[m];
      var count = 0;
      for (var n = 0; n < flat.length; n++) {
        if (currentnum === flat[n]) {
          count++;
        }
      }
      if (count === 1) {
        tempArray2.push(currentnum);
      }

    }

    //put this temp Array as the first item in combineArray
    combineArray.unshift(tempArray2); 
    
  }
  
  //flatten combineArray
  var finalArray = combineArray.reduce(function(prev, curr) {
    return prev.concat(curr);
  });

  return finalArray;
  
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
