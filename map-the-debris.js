function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = 3.14159;
  
  var orbPeriodArr = [];
  //return Object.keys(arr[0])[0]; //name
  
  for (var i=0; i<arr.length; i++) {
    var T=(2*Math.PI) * (Math.sqrt(Math.pow((arr[i].avgAlt+earthRadius), 3) / GM));
    T = Math.round(T);
    
    var orbPeriod = {};
    orbPeriod.name = Object.values(arr[i])[0];
    orbPeriod.orbitalPeriod = T;
    
    orbPeriodArr.push(orbPeriod);
  }
  
  
  return orbPeriodArr;
}

orbitalPeriod([{name: "moon", avgAlt: 378632.553}]);