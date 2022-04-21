/**
 * Version ES5 
 * Transform Array 2D into simple Array
 * @param {Array) arr
 */
function concatArrays(arr){
  return [].concat.apply([], arr);
}

/**
 * Version ES6 
 * Transform Array 2D into simple Array
 * @param {Array) arr
 */
const concatArrays_2 = (arr)=> arr.flat();

const tab = [['tab1'],['tab2'],['tab3'],['tab4']]
console.log(concatArrays(tab)); // return ['tab1','tab2','tab3','tab4']
console.log(concatArrays_2(tab)); // return ['tab1','tab2','tab3','tab4']
