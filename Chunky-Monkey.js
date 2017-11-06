function chunkArrayInGroups(arr, size) {
  var splitted;
  var newArray =[];
  var incrementor = size; //create a permanent range to take from ; increments of this number; this will always add the original and static "size" amount to i and size in the for loop 
  
  for (var i=0; i<arr.length; i+=incrementor) {
    size  = i+incrementor; //because we are going use slice(i, size), we add 2 to the i so that everytime a slice happen, it will always be between i and i+2, this create a slice always in chunks of 2
    splitted = arr.slice(i,size); //slice between i and the new size;
    newArray.push(splitted); //push this new size into a new array
  }

  return newArray;
}
