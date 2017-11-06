function sumAll(arr) {
  var array = arr;
  var minNum = arr[0];
  var maxNum = arr[1];
  var bigNum = Math.max(minNum,maxNum);
  var smallNum = Math.min(minNum,maxNum);
  
  
  for (var i=smallNum; i<bigNum-1; i++) {
    var newNum = i + 1;
    array.push(newNum);
  }
  
  var max = array.reduce(function(a,b) {
    return a+b;
  });
  
 return max;
}