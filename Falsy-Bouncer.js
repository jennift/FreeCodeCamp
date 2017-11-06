function bouncer(arr) {
  //Two ways to do this: either iterate over each item in array or use filter.
  
  //var newArr =[];
  //for (var i=0; i < arr.length; i++) {
    //if (Boolean(arr[i]) === false) {
      ////do nothing
    //}
    //else {
      //newArr.push(arr[i]);
    //}
  //}
  
  //return newArr;
  
  //OR just use filter - only one line
  return arr.filter(Boolean);
  
}