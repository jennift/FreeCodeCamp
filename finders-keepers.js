function findElement(arr, func) {
  
  var num = arr.filter(func); //filter the function
  return num[0]; //returns the first item that has a mod 0
  
}

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });