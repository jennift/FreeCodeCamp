function sumPrimes(num) {
  
  var prime = [];
  var hasModCounter;
    //counts how many times there is a remainder
    //if there is only 1 remainder at the end, its a prime number ;
    // because a prime number is a number that can only be divided by 1 or itself
  for (var i=2; i<=num; i++) {
    hasModCounter = 0;
    for (var j = 2; j <= i; j++) {
      if (i % j === 0) {
        hasModCounter++;
        //console.log(i + "mod" + j);
        //console.log(i%j);
        //console.log("counter" + hasModCounter);
        //console.log("----------------");
      }
      else {
        //do nothing
      }
    }
    if (hasModCounter == 1) {
      prime.push(i);
    }
  }
  
  function add(a, b) {
    return a + b;
  }
  
  var sum = prime.reduce(add, 0);
  return sum;
  
}

sumPrimes(17);
