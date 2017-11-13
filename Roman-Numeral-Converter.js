//a note: i will end my roman numerals at the 3000s because I don't know how to represent 5000 in character and 4000 is a combination of character from 5000s and (1-3)thousands. I do not want to do MMMM or MMMMM to represent 4000 and 5000.

function convertToRoman(num) {
  //change number to an array
  var numArray = [];
  var numString = num.toString();
  numArray = numString.split(""); //split the number up into array

  var basicArray = [];
  var zeroMaker = "";
  
  //using for to add zeros
  for (var i=1;i<numArray.length+1;i++) {
    var thisNum = numArray[numArray.length-i]; //starting from the last array item
    thisNum += zeroMaker;
      //the first round it will add nothing (""), the second time
    basicArray.unshift(thisNum); //add that number to the first spot in basicArray array
    zeroMaker = zeroMaker+"0"; //add a zero(0) to making it 0, then 00, until the final item remaining
  }
  
  var romanArray = [];
  //create key table //referring to exercise "Using Objects for Lookups"
  var lookup = { //create the table as given in the mathisfun site
    1:"I", 2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",
    10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXXX",90:"XC",
    100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",
    1000:"M",2000:"MM",3000:"MMM"
  }; 
  
  basicArray.forEach(function(thisItem) {
    if (thisItem == 0) {
      //do nothing
    }
    else {
      var result = lookup[thisItem];
      romanArray.push(result);
    }
  });
  
  romanArray = romanArray.join("");
  return romanArray;
  
}

convertToRoman(356);