function myReplace(str, before, after) {
  
  var arrayfy = str.split(" ");
  
  if (arrayfy.indexOf(before) > 0) { //if can find the item we are looking for,
    
    if (before[0] !== before[0].toLowerCase()) { //and if first letter of before is caps (aka not lowercase), change after to caps as well  
          var chgFirstLetter = after[0].toUpperCase(); //chg first letter to uppercase
          var swapLetter = after.replace(after[0], chgFirstLetter); //replace first letter
          after = swapLetter; //set the uppercase word as the new after
    }  
    //then use the new after to replace
    var newStr = str.replace(before, after);
    return newStr;
  
  }
  else {
    return "can't find that word";
  }

}