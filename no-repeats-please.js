function permAlone(str) {
  //break str into array ie [a,b,c]
  var arr = str.split(""),
  permutations = []; //holds all the permutations
  
  //using heap's permutation
  function swap(a, b)
  {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  
  //create the call for generate
  generate(arr.length);

  function generate(n) { //where n is called from generate(arr.length)
    if (n === 1) {
      permutations.push(arr.join(""));
    } else {
      for (var i = 0; i < n; i++) {
        generate(n - 1);
        if (n % 2 == 1) { //if n is odd
          swap(0, n-1);
        }
        else {            //if n is even
          swap(i, n-1);
        }
      }
    }
  }
  
  var count = 0;
  
  for (var j = 0; j < permutations.length; j++) {
    if (permutations[j].match(/(.)\1{1,}/g)) {
      //donothing
    }
    else {
      count = count+1;
    }
  }
  
  return count;

}

permAlone('abc');