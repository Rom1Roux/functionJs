/**
* Function to remove duplicates from an array
* @return{array} return array
*/
function removeDuplicate(arr){
  return arr.filter(function(item,index){ return arr.indexOf(item) === index});
}
