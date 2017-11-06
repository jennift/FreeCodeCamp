var wordOne;
var wordTwo;
var newArr=[];

function mutation(arr) {
  wordOne = arr[0].toLowerCase();
  wordTwo = arr[1].toLowerCase();
  
  
  for (var i=0; i<wordTwo.length; i++ ) {
    if (wordOne.indexOf(wordTwo[i]) < 0) {
      return false;
    }
    else {
      //do nothing for now   //previously i put return true here.So when the first item is more than 0, the return stops the                                      loop and give out the first round of iteration as the answer.
    }
  }
  return true;
}