function pairElement(str) {
  var incompleteDNA = str.split("");
  var missingElement = [];
  var completeDNA = [];
  
  
  for (var i = 0; i < incompleteDNA.length; i++) {
    
    if (incompleteDNA[i] == "G") {
      missingElement.push(incompleteDNA[i]);
      missingElement.push("C");
      
    }
    else if (incompleteDNA[i] == "C") {
      missingElement.push(incompleteDNA[i]);
      missingElement.push("G");
    }
    else if (incompleteDNA[i] == "A") {
      missingElement.push(incompleteDNA[i]);
      missingElement.push("T");
    }
    else if (incompleteDNA[i] == "T") {
      missingElement.push(incompleteDNA[i]);
      missingElement.push("A");
    }
    
    completeDNA.push(missingElement);
    missingElement = [];
    
  }
 
  return completeDNA;
}
