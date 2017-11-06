function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num); //plonk that number into the array first
  arr.sort(function(a,b) { //sort in ascending order
    return a-b;
  });
  
  return arr.indexOf(num); //find the position num is in
}