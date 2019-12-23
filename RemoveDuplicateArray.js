/**
* Function to remove duplicates elements from an array
* @param{array} array that be contains string, number or bolean (can be work with objects)
* @return{array} return array without duplicates elements
*/
function removeDuplicate(arr){
  return arr.filter(function(item,index){ return arr.indexOf(item) === index});
}

var tab = ['test', 'test', 'success', 'test']
console.log(removeDuplicate(tab)); // return ["test","success"]
