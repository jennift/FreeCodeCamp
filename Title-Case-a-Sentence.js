function titleCase(str) {
  var myWords = [];
  var newWords = [];
  
  myWords = str.toLowerCase(); // change everything to lowercase
  myWords = myWords.split(" "); //split sentence into words
  
  for(var i = 0 ; i < myWords.length ; i++){ //for every word
    var splitMore = myWords[i].split(""); //split into letters

    for (var j=0; j < splitMore.length; j++) { //
      splitMore[0] = splitMore[0].toUpperCase(); //for first letter change it to uppercase. We need to split this into individual                                                   letter because javascript cannot just change one letter in a word to uppercase.                                                   It changes everything to uppercase, thats why we need to split it down to                                                         individual letter.
    }
    
    splitMore = splitMore.join(""); // Put letters together to form a word
    newWords.push(splitMore); //push the word into the newWords array
  }  
  
  newWords = newWords.join(" "); //join all the items in the newwords array together
  return newWords;
}