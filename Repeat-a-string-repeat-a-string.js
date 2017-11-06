function repeatStringNumTimes(str, num) {
  var myArray = [];
  
  for (var i=0; i < num; i++) {
    myArray.push(str);
  }
  
  var joiner = myArray.join("");
  return joiner;
}