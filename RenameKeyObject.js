/**
 * Change the keys of an object with a list on an array
 * @param {Object} obj   
 * @param {Array} newKeys 
 * @returns {Object}
 */
const renameKey = (obj, newKeys) => {
  const oldKey = Object.keys(obj);
  let newObj = {};
  for (let index = 0; index < newKeys.length; index++) {
    newObj = { ...newObj, [newKeys[index]]: obj[oldKey[index]] };
  }
  return newObj;
};

const objTochange = {
  test1: { subTest1: "" },
  test2: { subTest2: "" },
  test3: { subTest3: "jhg" },
};
const keys = ["test5", "test6", "test7"];

console.log(renameKey(objTochange, keys));  
/* return {
  test5: { subTest1: '' },
  test6: { subTest2: '' },
  test7: { subTest3: 'jhg' }
} */



/**
   * Rename Object keys with Array of Objects
   * @param {Object} obj to rename keys
   * @param {Array} columns content Object with key (title and key)
   * @returns {Object} return obj modified
   */
const renameKeyWithArrOfObj = (obj, columns) => {
  const allOldKey = Object.keys(obj);
  let oldKey = "";
  for (let i = 0; i < allOldKey.length; i+=1) {
    const newKey = columns.filter((el) => {
      if (el.key === allOldKey[i]) {
        oldKey = allOldKey[i];
        return true;
      }
      return false;
    })[0].title;
    if (oldKey !== newKey) {
      Object.defineProperty(
        obj,
        newKey, // modify old key
        // fetch description from object
        Object.getOwnPropertyDescriptor(obj, oldKey)
      );
      delete obj[oldKey]; // delete old key
    }
  }
  return obj;
};

const obj = { test: "pouf", essai: "kjhlkh" };
const columns = [
  { title: "Test", key: "test" },
  { title: "Essai", key: "essai" }
];

console.log(renameKeyWithArrOfObj(obj, columns)); // return {Test: "pouf", Essai: "kjhlkh"}
