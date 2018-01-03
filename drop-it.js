function dropElements(arr, func) {
  
  for (var i=0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr.slice(i);
    }
    
  }
 
  return arr.slice(arr.length); //if false all the way, slice EVERYTHING to return empty array

}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});

/*
for every item in array, run the function to see if its true or false;
the moment it returns it FIRST true, return the remaining array
otherwise return nothing *hint: slice where the first true array index is
*/