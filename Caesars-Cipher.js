function rot13(str) { // LBH QVQ VG!
  var newStr = [];
  var x;
  //so if the ceasars code is on the top line A-M, u add 13
  //if the ceasars code is on the bottom line (N-Z), u minus 13; 
  
  for (i=0; i<str.length; i++) {
    if (str.charCodeAt(i) < 65) {
      //if space, do nothing
      x = str.charCodeAt(i);
      newStr.push(String.fromCharCode(x));
    }
    else if (str.charCodeAt(i) < 78) {
      x = str.charCodeAt(i)+13; //to make things easier to understand, i will split into two steps; first to get the charcode                                       number, and then to change the char code back to an alphabet
      newStr.push(String.fromCharCode(x));
    }
    else {
      x = str.charCodeAt(i)-13;
      newStr.push(String.fromCharCode(x));
    }
  }
  newStr = newStr.join('');
  return newStr;
}