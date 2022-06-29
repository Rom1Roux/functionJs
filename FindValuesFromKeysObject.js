/**
 * Get content of object with array of key
 * Prevents an error in the code
 * @param {Object} obj
 * @param {Array} keys - tree key - example : ['key', 'subKey', 'sub-subKey', ...]
 * @returns
 */
const getObjectValues = (obj, keys) => {
  let testObj = obj;      
  const noMatch = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (testObj[key] === undefined) {
      return noMatch;
    }
    if (i === keys.length - 1) {
      return testObj[key];
    }
    testObj = testObj[key];
  }
  return noMatch;
}


const stateMemory = {
  filter: { filterModel: { test: "test" }, test2: "sersde" }
};

const test = getObjectValues(stateMemory, ["filter", "filterModel"]); // same as stateMemory.filter.filterMode
console.log(test); // { test: "test" }

const test2 =  getObjectValues(stateMemory, ["error", "filterModel"]); 
console.log(test2); // {}
