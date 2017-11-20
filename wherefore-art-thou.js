function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  
  // Only change code below this line
  var sourceKey = Object.keys(source);
  var sourceValues = Object.values(source);
  
  for (var i=0; i < collection.length; i++) {
    
    var isOK = true;
    
    for (var j=0; j < sourceKey.length; j++) {
      //console.log(collection[i]);
      //console.log(sourceKey[j]);
      //console.log(collection[i].hasOwnProperty(sourceKey[j]));
      
      if (collection[i].hasOwnProperty(sourceKey[j])) {
        //console.log(collection[i]);
        //console.log(collection[i][sourceKey[j]]);
        //console.log(sourceValues[j]);
        
        var currentItem = collection[i];
        var searchProperty = sourceKey[j];
        var searchValue = sourceValues[j];
        
        if (currentItem[searchProperty] == searchValue) {
          isOK = true;
        }
        else {
          isOK = false;
        }   
        
      }
      else {
        isOK = false;
      }
    
    }
    
    // if isOK is still true then add to array
    
    if (isOK) {
      arr.push(collection[i]);
    }
    
  }
  
  // Only change code above this line
  return arr;
}
