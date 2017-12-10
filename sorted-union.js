function uniteUnique(arr) {
  
  var newArray = [];
  var newerArray = [];
  //for arr = [1, 3, 2], [5, 2, 1, 4], [2, 1], [5, 1]
  //console.log(arguments.length); //4
  //console.log(arguments[1]); //[5, 2, 1, 4]
  
  for (var i=0; i < arguments.length; i++) {
    newArray = newArray.concat(arguments[i]);
  }
  //console.log(newArray); //[1,3,2,5,2,1,4,2,1,5,1]
  //console.log(newArray.length); //11
  
  for (var j=0; j < newArray.length; j++) {
    if (newerArray.indexOf(newArray[j]) === -1) { //if the newer Array does not have item [0,1,2..] 
      newerArray.push(newArray[j]); //push it to the newer Array
    }
    else { //if newer Array already has the item, ignore that item
      //donothing
    }
  }
  
  return newerArray;
  
}