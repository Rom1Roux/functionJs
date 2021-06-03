  /**
   * Rename Object keys with Array of Objects
   * @param {Object} obj to rename keys
   * @param {Array} columns content Object with key (title and key)
   * @returns {Object} return obj modified
   */
const renameKey = (obj, columns) => {
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

console.log(renameKey(obj, columns));
