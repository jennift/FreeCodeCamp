function checkCashRegister(price, cash, cid) { //TEST: return cid[0][1]; penny's 1.01
  //lets count whats in the register first
  var tempArray = [];
  for (var i=0; i<cid.length; i++) {
    tempArray.push(cid[i][1]);
  } 
  //accumulate all inside the tempArray aka calculate the total inside cash in drawer
  var cidTotal = tempArray.reduce(function (accumulator, currentValue) {
    return (accumulator+currentValue);
  });

  var change;
  change = (cash-price);//calculate change needed
  
  var finalChange = []; //to hold final array
  var denominator = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var changeLeft = change;
  
  if (cidTotal < change) { //if cash in hand is less than change needed
    return "Insufficient Funds";
  }
  else if (cidTotal == change) { //if equal
    return "Closed";
  }
  else { //if enough
    for (var j=cid.length-1; j > -1; j--) {
      var currentChange = [];
      
      if (changeLeft > denominator[j]) {
        if (cid[j][1] !=0) {
          if (changeLeft >= cid[j][1]) { //if change needed > what is available, take everything
            changeLeft = changeLeft-cid[j][1];
            finalChange.push(cid[j]);
          }
          else {//if change needed < what is in hand, take only what is needed
            var amtTaken = (Math.floor(changeLeft / denominator[j]));
            amtTaken = amtTaken * denominator[j];
            currentChange.push(cid[j][0]);
            currentChange.push(amtTaken);
            changeLeft = changeLeft-amtTaken;
            finalChange.push(currentChange);
          }
        }
         
      }
      
      changeLeft = Math.round(changeLeft * 100) / 100;
 
    }

  } //end else  
  
  if (changeLeft == 0) {
    return finalChange;
  }
  else {
    return "Insufficient Funds";
  }
  
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.51], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

//335.41
