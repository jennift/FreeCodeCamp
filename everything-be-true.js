function truthCheck(collection, pre) {
  
  var truth;
  
  //console.log(collection[0][pre]); collection[0][age] = 75
  
  //check if pre (ie age) exist
  truth = true;
  for (var i=0; i<collection.length; i++) {
    
    if (collection[i].hasOwnProperty(pre)) {
      
      //if pre exist, make sure all values are boolean approved
      //so if its 0, null, undefined, false or NaN, set to false
      if (Boolean(collection[i][pre]) !== true) { 
        return false;
      }
      
    }
    else {
      return false;
    }
    
  }
  
  //if truth is still true,  then return true, otherwise return false
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 75}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

/*note
all the things that returns a false boolean:
0 (zero)
-0 (minus zero)
"" (empty string)
undefined
false
null
NaN
*/