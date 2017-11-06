function diffArray(arr1, arr2) {
  var newArr = [];
  var tempArr1 = [];
  var tempArr2 = [];
  //SEE BELOW FOR PSEUDO CODE
  
  for (var i=0; i<arr2.length; i++) {
    var thisItem = arr2[i];
    if (arr1.indexOf(thisItem) < 0) { //if does not exist
      //console.log(thisItem + "is UNIQUE");
      tempArr2.push(thisItem);
    }
    else {
      //console.log(thisItem + " is not unique"); 
    }
  }
  
  for (var j=0; j<arr1.length; j++) {
    var thatItem = arr1[j];
    if (arr2.indexOf(thatItem) < 0) { //if does not exist
      tempArr1.push(thatItem);
    }
    else {
      //do nothing;
    }
  }

  newArr = tempArr1.concat(tempArr2);
  return newArr;
}