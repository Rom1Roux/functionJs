/**
 * Function to remove duplicates elements from an array
 * @param {Array} arr that be contains string, number or bolean (can be work with objects)
 * @return {Array} return array without duplicates elements
 */
function removeDuplicate(arr){
  return arr.filter(function(item,index){ return arr.indexOf(item) === index});
}

/**
 * ES6
 * Function to remove duplicates elements from an array
 * @param {Array} arr that be contains string, number or bolean (can be work with objects)
 * @return {Array} return array without duplicates elements
 */
const removeDuplicate2 = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

/**
 * ES6 with Set method
 * A Set is a collection of unique values. To remove duplicates from an array
 * @param {Array} arr that be contains string, number or bolean (can be work with objects)
 * @return {Array} return array without duplicates elements
 */
const removeDupplicate3 = (arr) => [...new Set(arr)];

const tab = ["test", "test", "success", "test"];
console.log(removeDuplicate(tab)); // return ["test","success"]
