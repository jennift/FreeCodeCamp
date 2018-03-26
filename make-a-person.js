// Constructor function for Person objects
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var splitName = firstAndLast.split(" ");
  var first = splitName[0];
  var last = splitName[1];
  
  //----------------------------------------------------------//

  this.getFirstName = function() { 
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.getFullName = function() {
    return first + " " + last;
  };
  
  this.setFirstName = function(input) {
    first = input;
  };

  this.setLastName = function(input) {
    last = input;
  };

  this.setFullName = function(input) {
    var splitName = input.split(" ");
    first = splitName[0];
    last = splitName[1];
  };
  
};

//make the person
var bob = new Person('Bob Ross');
console.log(Object.keys(bob));
//bob.getFirstName();
//bob.getLastName();
bob.getFullName();
//bob.setFirstName("Haskell");
//bob.setLastName("Curry");
//bob.setFullName("Haskell Curry");
