/**
* This function is used to find out if one of the elements is identical in the two arrays
* @param{array} first array
* @param{array} second array
* @return{bolean} return true if any items are the same in both arrays else false
*/
function compareArrays(arr1, arr2) {
  var res = [];
  for (var i = 0; i < arr2.length; i++){
    var check = arr1.map(function(el){
      return el === arr2[i] ? true : false; 
    }).filter(function(el){ return el === true;})[0]
    if (check){return true}
  }
  return false
}

var tab1 = ['banana', 'orange', 'cherry'];
var tab2 = ['lemon', 'banana', 'apple', 'pear'];
console.log(compareArrays(tab1, tab2)); // return true

var tab3 = ['banana', 'orange', 'cherry'];
var tab4 = ['lemon', 'apple', 'pear'];
console.log(compareArrays(tab3, tab4)); // return false
