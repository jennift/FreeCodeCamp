
function smallestCommons(arr) {
    
  //sort from small to big ([5,1]  will become [1,5])
  arr.sort(function(a,b) {
    return a-b; 
  });
  
  //create a new array containing those those original numbers and all the numbers in between
  var newArr = []; //holds all numbers between 1 to 5 ie 1, 2, 3, 4, 5
  for (var i=arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
  }
  
  var largestNum = newArr[newArr.length-1]; // this is the largest number (the last item) in the array
  //using this largest number, create multiply and straightaway divide by items in newArr and see if there are any remainder, if there is remainer, then that multiplication of the largest number is not the smallest common multiple: for eg:
  //5 x 1 = 5
  //5 / 1 = 5 ; no remaining: ok
  //5 / 2 = 2.5; has remain, out
  //-----------
  //5 x 2 = 10
  //10/1 = 10; ok
  //10/2 = 5; ok
  //10/3 = 3.3 out
  //----------------
  //5 x 3=15 not everything in newArr can be divided nicely for 15 , so out
  //5x4 = 20 nope
  //5x5 = 25 nope
  //5x6 = 30 nop
  //5x7 = 35 nope
  //5x8 = 40 nope (40/3 = 13.33)
  //5x9 = 45 nope
  //5x10 = 50 nope
  //5x11 = 55 nope
  //5x12 = 60 yes!! 60/1=60, 60/2=30, 60/3=20,60/4=15,60/5=12 .. all can be divided wo remain!
  
  var noRemain; //this helps to see if no remains stay true to the end
  var multipleNum; //this is the multiplication number of the largest number in the array
  //  //putting no protect so it will continue with loop, omit when neccessary
  for (var k=1; k>0; k++) {
    multipleNum = largestNum * k;
    noRemain = true;
    
    for (var j=0; j<newArr.length; j++) { 
      if (multipleNum%newArr[j] != 0) { //if there is remain, change noRemain to false
        noRemain = false;        
        break; //no sense in continuing with the rest of numbers, so cancel this loop
      }
      else {
        //do nothing
      }  
    }
    
    if (noRemain == true) { //if at the end of the loop everything is still true that all numbers have no remain, break the cycle and return the multiplied Number that can be divided nicely by all the numbers in the array.
      return multipleNum;
    } 
  } 
}

smallestCommons([5,1]);

/*PSEUDOCODE
  compare in the array which is larger,
  arange from small to big in that array
  
  create a new array (newArr) holding those two numbers and everythng in between
  
  use the largest number and create the first multiple (ie x1)
  then use that number and divide by the number in newArr one by one
  
  if the multiplied number can be divided wo remainder by all the newArr, then its the smallest common
  multiple
*/
