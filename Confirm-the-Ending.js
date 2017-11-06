function confirmEnding(str, target) {
  //return str.substr(-4);
  //return target.substr(-4);
  var wordArray = str.split(" ");
  var lastWord = wordArray[wordArray.length-1];
  
  //var letterArray = lastWord.split("");
  //return lastWord;
  
  if (wordArray.length == 1) { //if array has only one word
    if (lastWord.substr(-1) == target.substr(-1)) { //compare last letter from last word with last letter from target
      return true;
    }
    else {
      return false;
     }
  }
  else { //if array has more than one word
    if (lastWord.substr(-4) == target.substr(-4)) { //compare last frour letters from last word with last four from target
      return true;
    }
    else {
      return false;
    }  
  }
   
}

c