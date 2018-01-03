function addTogether() {
  
  //only worry about 2 numbers (cheat much?)
  var x = arguments[0];
  var y = arguments[1];

  //return arguments.length;
  if (arguments.length > 1) { //if 2 or more arguments
    if (typeof x === "number" && typeof y === "number") { //make sure they are both numbers
      return x+y; //if both numbers, add them
    }
    return undefined; //if either is NOT a number, return undefined
  }
  
  else if (arguments.length === 1) { //if only 1 argument
    if (typeof x === "number") { //make sure the argument is number
      return function(y){ //take the value from the 2nd bracket
        if (typeof y === "number") { //again check if argument is number
          return x+y; //if it is, add
        }
        else {
          return undefined; //if not number (including objects [3], return undefined
        }
      };
    }
    return undefined; //if that first argument is not number (like the link), return undefined
  }
  
  else { //if argument length is anything else (ie 0 or less)
    return undefined; //return undefined
  }
  
}


addTogether(2)([3]); //<-- this is basically only one argument provided
