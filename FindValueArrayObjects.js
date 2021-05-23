/**
 * Find value in an Array of Objects
 * @param {Array} data is an Aray of objects
 * @param {String} find is key to get value
 */
function findValueInArrayObjects(data, find) {
  var res = data.filter(function (x) {
    return x[find] !== undefined;
  });
  return res.length === 0 ? false : res[0][find];
}

/**
 * ES6 version
 * Find value in an Array of Objects
 * @param {Array} data is an Aray of objects
 * @param {String} find is key to get value
 */
const findValueInArrayObjects2 = (data, find) =>
  data.filter((el) => el[find])[0][find];

const arr = [{ dossier1: "Hello world" }, { dossier2: "Good Bye" }];
const key = "dossier2";

console.log(findValueInArrayObjects(arr, key)); // 'Good Bye'
console.log(findValueInArrayObjects2(arr, key)); // 'Good Bye'
