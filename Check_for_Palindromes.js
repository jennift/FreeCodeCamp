var startString = "";
var endString = "";

function palindrome(str) {
  
  startString = str.toLowerCase();
  startString = startString.replace(/[^a-zA-Z0-9]/gi,"");
  
  endString = startString.split("");
  endString = endString.reverse();
  endString = endString.join("");
  //return startString + "\n" + endString;
  
  if (startString == endString) {
    return true;
  } else {
    return false;
  }
  
}