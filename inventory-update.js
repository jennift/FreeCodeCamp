
function updateInventory(arr1, arr2) {
  
  //return arr2[0][0]; //99
  //return arr2[0][1]; //hair pin
  //return arr1[0][1].includes("Bowling Ball"); //true
  //return arr1[0].includes(arr2[2][1]); //true
  //return arr1[0]; //[21, "Bowling Ball"]
  
  for (var i=0; i<arr2.length; i++) {
    var status = false;
    
    for (var j=0; j<arr1.length; j++) {
      if (arr1[j].includes(arr2[i][1]) == true) {
        status = true; //change status to true
        arr1[j][0] = arr1[j][0]+arr2[i][0];
      }
      //else do nothing   
    }
    
    if (status === false) { //if the item in arr2 does not exist in arr1; status is STILL false,
      arr1.push(arr2[i]); //push that arr2 item into arr1
    }  
  }
  
  //now organize by alphabetical
  arr1.sort(function(a, b) { //since they are all caps, no worries about changing them upper or lowercase  
    if (a[1] < b[1]) return -1; 
    //if item 1 in first array (ie Bowling Ball) is lesser than item 1 in 2nd array (ie dirty sock)
    // sort 1st array to an index lower than 2nd array
    if (a[1] > b[1]) return 1;
    //if larger, sort 1st array to an index higher than 2nd array
    return 0; //stay the same, no sorting required  
  });
  
  return arr1;
  
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
