function findLongestWord(str) {
  var theWords;
  var theLengths;
  
  theWords = str.split(" "); //split into array
  theWords.sort(function(a,b) { 
    //sort in descending order so the longest word is always in front - what way you can safely say array[0] is always the longest     If we do ascending order, we have to select the last item in array which is theWords[theWords.length - 1].length
    return b.length - a.length; //if you choose descending
    //return a.length - b.length; //if you choose ascending
  });
  
  return theWords[0].length; //if you choose descending
  //return theWords[theWords.length - 1].length; //if you choose ascending
}