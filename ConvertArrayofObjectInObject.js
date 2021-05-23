/**
 * Version ES6
 * Convert Array of objects (possible with multiple keys) in one object
 * @param {Array} data is an Array of Objects
 * @returns {Object}
 */
const convertArrayInObject = (data) => {
  let obj = {}; // init object
  data.forEach((el) =>
    Object.values(el).forEach((value, i) => {
      const key = Object.keys(el)[i];
      obj = { ...obj, [key]: value };
    })
  );
  return obj;
};

// Convert Array of objects in a sigle Object
const arr = [
  { Romain: "1234" },
  { Test: "12761" },
  { "Super Test": "2937823" } // to have a key with a space, use the quotation marks
];

console.log(convertArrayInObject(arr)); // {Romain: '1234', Test: '12761', 'Super Test' : '2937823'}]);
// console.log(returnObject.Romain);
// console.log(returnObject['Super Test'])
