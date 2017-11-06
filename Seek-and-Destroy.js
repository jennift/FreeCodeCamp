function destroyer(arr) {

  //use arguments to take item [1] and above and create a new array from this
  var myArgs = [];
  for (i=1; i<arguments.length; i++) {
    myArgs.push(arguments[i]);
  }
  //return an array (myArgs) that takes 2nd item and after from arr; for ([1,2], 3, 4, 5), takes item 3,     4 & 5;
   
  //make the filter function
  //test each item from myArgs with the currentItem (thisItem)  
  function filterer(thisItem) { 
    for (j=0; j<myArgs.length; j++) {
      if (thisItem == myArgs[j]) { //if the current item is equals to myArg
        console.log("drop");
       return false; //return false will drop it from the array.
     }
     else { // if the current item is not equals to the value of MyArg, do nothing for now. ie dont drop.
       console.log("do nothing");
     }
    }
    console.log("keep");
    return true; // then return the remaining value as true.
  }
  
  var filteredNumbers = arr.filter(filterer);
  console.log("return final " + filteredNumbers);
  return filteredNumbers;
}
