function convertHTML(str) {
  
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  
}

// add the '/g' at the back so it goes through the whote string and change everything similar rather than just changing the first item it finds

convertHTML("Dolce & Gabbana &");