function binaryAgent(str) {
  var strarr = str.split(" "); //hold array of binary; strarr.length = 21
  var deciArr = []; //holds array of decimals
  var asciiArr = []; //holds array of ASCII
  
  //now convert binary to decimal
  for (var i=0; i < strarr.length; i++) {
    var hexa = parseInt(strarr[i], 2).toString(10);
    deciArr.push(hexa);
  }
  
  //now convert decimal to ASCII
  for (var j=0; j < deciArr.length; j++) {
    var ascii = String.fromCharCode(deciArr[j]);
    asciiArr.push(ascii);
  }
  
  var sentence = asciiArr.join("");
  return sentence;
  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
split string into array to work in array ; 
for every array item (01000001) convert to hexa code using parseInt(x,2).toString(10);
  use 2 cos a radix of 2 (binary) indicates that the number should be parsed from a binary toString(10)   
  which is decimal (If the radix is not specified, it is assumed to be 10).
from here, use js fromCharcode to convert to ASCII

extra notes:
parseInt(x,2).toString(16); - converts binary(2) to hexa(16)
parseInt(x,16).toString(10); converts hexa(16) to decimal(10)
parseInt(x,2).toString(10); converts binary(2) to decimal(10);
parseInt(x,2).toString(); converts binary(2) to decimal();
*/
