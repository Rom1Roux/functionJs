/**
* Function to add (complete) the same object in an array of objects
* @param{array} array that contains objects
* @param{object} object to add in array of objects
* @return{array} return array of objects completed
*/
function addObjOnArray(arr, obj) {
  var add = Object.keys(obj);
  for (var i = 0; i < arr.length; i++) {
    for (var j in add){
      arr[i][add[j]] = obj[add[j]];
    }
  }
  return arr;
}

var tab = [{name : 'Romain', hoobies : 'rock climbing'}, {name:'Max', hoobies:'Lego'}];
var obj1 = {city : 'Toulouse'};
console.log(addObjOnArray(tab, obj1)); // return [{name:"Romain", hoobies:"rock climbing", city:"Toulouse"}, {name:"Max", hoobies:"Lego", city:"Toulouse"}]
