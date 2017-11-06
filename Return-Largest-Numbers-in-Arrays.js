function largestOfFour(arr) {
  
  var newArray = []; //start a new array to hole the biggest numbers from each sub array
  
  for (var i = 0; i < arr.length; i++) {
    
    for (var j=0; j < arr.length; j++) { //for all sub array 
      arr[j].sort(function(a,b) {        //sort all the sub arrays in descending [5 4 3 1], [27 26 18 13] ...[3 2 1].
       return b-a;
      });  
    }
                                     //for each array, 
    var biggestNum = arr[i].shift(); //take the first number with shift(). Note:shift() removes the first number from the array
    newArray.push(biggestNum);       //and push that first number into the newArray.

  }
  return newArray; 

}