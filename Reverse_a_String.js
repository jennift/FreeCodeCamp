var finalString = "";

function reverseString(str) {
  finalString = str.split("");
  finalString = finalString.reverse();
  finalString = finalString.join("");
  return finalString;
}