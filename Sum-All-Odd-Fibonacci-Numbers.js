function sumFibs(num) {
  
  var arr = [0, 1];
  for (var i = 1; i < num; i++) {
    var currentNum = arr[i] + arr[i-1];
    if (currentNum <= num) { // this is a vital step
      //without this above step, it will create the "num" number of array so if num = 10, your array will be
      //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
      //rendering the first step wrong because it has already exceed the value 10 
      arr.push(currentNum);
    } 
  }
  
   
  var arr2 = [];
  for (var j=0; j <arr.length; j++) {
    if (arr[j] % 2 != 0) {
      arr2.push(arr[j]);
    }
  }
  
  function add(accumulated, currentValue) {
    return accumulated + currentValue;
  }
  
  var total = arr2.reduce(add);
  return total;
  
}

sumFibs(10);
