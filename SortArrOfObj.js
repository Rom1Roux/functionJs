const arrObj = [{ name: "Romain", order: 2 }, { name: "Etienne", order: 6 }, { name: "Jean-Paul", order: 1 }];
console.log(sortArrOfObj(arrObj));

/**
 * sort an array of objects follow the order key
 * @param {Array} arr is an array of objects
 * @return {Array} return Array sorted
 */
function sortArrOfObj(arr) {
  return arr.sort((a, b) => {
    let comparison = 0;
    a.order > b.order ? (comparison = 1) : (comparison = -1);
    return comparison;
  });
}
