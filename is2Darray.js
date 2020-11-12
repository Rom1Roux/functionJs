/**
* This function test if it's a 2D array
*
* param {Array} arr must an array simple or 2D
* return {Boolean} return boolean
*/
function is2DArr(arr){
  return arr.filter(x=> typeof x === 'object').length === arr.length;
}

const arr1 = [[1, 2, 3],[1, 2, 3, "string"]];
console.log(is2DArr(arr1)) // return true

const arr2 = ["string", [1, 2, 3]];
console.log(is2DArr(arr2)) // return false

const arr3 = ["string1", "string2"];
console.log(is2DArr(arr3)) // return false
