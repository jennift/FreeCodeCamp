function spinalCase(str) {
  
  //split sentence into array by group using
  //1) anything that starts with caps , the (?=) matches a group
  //2) if its a character that is not a-z or A-Z, this removes the spaces too
  str = str.split(/(?=[A-Z])|[^a-zA-Z]/g);
  
  //now put them back together as string cos we will make changes in string rather than in array, and put a space in between each item in array using " "
  str = str.join(" ");
  
  //change string to lowercase
  str = str.toLowerCase();
  
  //replace all the space with "-" (dash)
  str = str.replace(/\s/g, "-");  
  
  return str;
  
}
