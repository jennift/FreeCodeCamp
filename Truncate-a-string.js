function truncateString(str, num) {
  var slicer;
  var truncator;
 
  if (num <= 3) {
    slicer = str.slice(0, num);
    truncator = slicer + "...";
  }
  else if (num >= str.length) {
    slicer = str.slice(0);
    truncator = slicer;
  }
  else {
    slicer = str.slice(0, num-3);
    truncator = slicer + "...";
  }
    
  return truncator;
}