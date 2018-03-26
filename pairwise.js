function pairwise(arr, arg) {
  var finalContainer = [];
  var clone = arr.slice(); //duplicate arr

    for (var i=0; i < arr.length; i++) {
      var currentItem = clone[i];
      var tempContainer = [];
      
      for (var j=i+1; j<clone.length; j++) { //the next item of i
        if (parseFloat(currentItem) + parseFloat(clone[j]) === arg) {
          tempContainer.push(i);
          tempContainer.push(j);
          clone[j] = "x"; //change the used item to "x"; this retains their index position while making sure that it cannot be used to add to summation again
          
          //calculate total to add to finalContainer
          var total = tempContainer.reduce(
            function (accumulator,currentValue) {
              return accumulator + currentValue;
            }, 0
          );

          finalContainer.push(total);
          break; //once you get the needed sum, you remove the item and have no need to continue because items can only be used once.
        }

        else {
          //do nothing
        }
        
      }
      clone[i] = "x"; //change the currentitem to x
    
    }
    
    //add up all the values in finalContainer
    var finaltotal = finalContainer.reduce(
      function (accumulator,currentValue) {
        return accumulator + currentValue;
      }, 0
    );

    return finaltotal;
}

pairwise([1, 1, 1], 2);
