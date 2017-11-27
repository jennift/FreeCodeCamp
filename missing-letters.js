function fearNotLetter(str) {
  
  //console.log(str.charCodeAt(0)); //a
  //console.log(str.length); //4
  var startNumber = str.charCodeAt(0); //set the unicode of first letter as the starting number
  
  for (var i=0; i<str.length; i++) {
    //console.log(str.charCodeAt(i)); //at 0 its 97
    //console.log(startNumber); //97

    if (str.charCodeAt(i) != startNumber) { //if current letter unicode is not equals to current number
      return String.fromCharCode(startNumber); //return the letter for unicode of current number
    }   
    startNumber++; //otherwise, go to next number
  }
  
  return undefined; //if the above "if" loop went through, return undefined
}