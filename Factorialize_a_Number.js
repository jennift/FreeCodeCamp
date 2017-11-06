function factorialize(num) {
  var myArray = [];
  var factorial = 0;
  
  for (var i=1; i<=num; i++) { //start value at 1 so that array will start and 1 rather than 0 to make [1, 2, .. num] 
    myArray.push(i); //makes array [1 ... to the number]
  }
  
  factorial = myArray.reduce(function(currentVal, nextVal) {
    return currentVal * nextVal ;
  },1 //if array is empty, start at this initial value of 1
  );
  return factorial;
}