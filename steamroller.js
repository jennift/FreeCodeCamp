function steamrollArray(arr) {
  
  //results of Array.isArray
  //return arr[0]; //1 ------------------------------------------FALSE
  //return arr[1]; //[2] ----------------------------------------TRUE
  //return arr[1][0]; //2 ---------------------------------------FALSE
  //return arr[1][0][0]; //gives nothing
  //return arr[2]; //[3,[[4]]] ----------------------------------TRUE
  //return arr[2][0]; //3 ---------------------------------------FALSE
  //return arr[2][1];// [[4]] -----------------------------------TRUE
  //return arr[2][2]; //nothing
  //return arr[2][1][0]; //[4] ----------------------------------TRUE
  //return arr[2][1][0][0]; //4 ---------------------------------FALSE
  //return arr[3]; //gives nothing
  //conclusion: we want to break down all the true's (aka array and nested nested nested array) to false
  
  //note: concat array generally removes the outer square brackets
  return arr.reduce(function (flat, toFlatten) {
    
    if (Array.isArray(toFlatten) === true) {
      return flat.concat(steamrollArray(toFlatten)); //having steamrollarray function in here takes out the worry or all the nested, double nested, triple, quadruple nested arrays (or potentially infinite nested arrays)
    }
    
    return flat.concat(toFlatten);
    
  }, []); //set the initial array to be empty
  
  
}

steamrollArray([1, [2], [3, [[4], [[5], [8], [9]]]]]);
