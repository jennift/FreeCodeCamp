function translatePigLatin(str) {
  //create a consonant cluster table
  var first1 = str.substr(0, 1);
  var first2 = str.substr(0, 2);
  var first3 = str.substr(0, 3);
  var splitter = []; //this holds the array of each letter in str
  var extracted = []; //this array contains item that was removed
  
  var aeiou = ["a", "e", "i", "o", "u"];
  var cons2 = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gl", "gr", 
               "pl", "pr", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st",
               "sw", "th", "tr", "tw", "wh", "wr"];
  var cons3 = ["sch", "scr", "shr", "sph", "spl", "spr", "squ", "str", "thr"];
  
 // if string first letter is eq to a e i o or u, then its cons1
 // if string first three letters is eq to anything in consonant3, then its cons3
 // if string first two char is equal to anything in consonant 2 then its cons2
  
  if (aeiou.indexOf(first1) != -1) { //if aeiou search value of first1 exists,
    //add "way" to the back of str
    return str+"way";
  }
  else if (cons3.indexOf(first3) != -1) {//if array con3 has the letters first3
    //console.log("its 3");
    //move the 3 consonant (the first 3 letters) to the back and add "ay"
    splitter = str.split(""); //split string into array
    extracted = splitter.splice(0, first3.length); //take first 3 elements from the first position(0) from array and put in new array called extracted
  }
  else if (cons2.indexOf(first2) != -1) { //same as cons3 but first two letters instead
    //console.log("its 2");
    splitter = str.split("");
    extracted = splitter.splice(0, first2.length);   
  }
  else {//if a word that doesnt sit with any of the above
    splitter = str.split("");
    extracted = splitter.splice(0, first1.length); //just take the first letter
  }
  
  splitter = splitter.concat(extracted);//combine the extracted array behind the splitter
  str = splitter.join("");// join them together into a string
  return str+"ay";//add "ay" behind the new string.
}
