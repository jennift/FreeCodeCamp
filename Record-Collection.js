//https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781
//bracket notation can be more flexible

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  //console.log(collection[5439]["album"]); //ABBA Gold
  //console.log(collection[5439].album); //ABBA Gold
  //console.log(collection[2468][prop]); //["1999", "Little Red Corvette"]  
  
  if (prop !== "tracks" && value !== "") { //if prop is not tracks & value is not empty
    (collection[id][prop]) = value; //create a new entry
  }
  else if (prop === "tracks" && !collection[id].hasOwnProperty(prop)) {
    //if prop is tracks & album do not have tracks property
    collection[id][prop] = []; //create an empty array
    (collection[id][prop]).push(value); //add new value into the array.
  }
  else if (prop === "tracks" && value !== "") { //if prop is tracks & value is not empty
    (collection[id][prop]).push(value); //push value into the already existing array
  }
  else if (value === "") { //if value is empty
    delete collection[id][prop]; //delete the property altogether
  }

  return collection;
  
}

// Alter values below to test your code
updateRecords(2468, "artist", "");

