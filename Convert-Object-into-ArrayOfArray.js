/*
 * Convert an object into an array of arrays
 * used to insert values into Google Sheet
 * @param {Object} obj
 * @returns {Array}
 */
const convertObjectToArray = (obj) => {
  const header = Object.keys(obj);
  let arr = header.map((el) => obj[el] || "");
  return [header].concat([arr]);
};

/*  return :
[
    ["column1", "column2", "column3"],
    ["content1", "content2", "content3"],
];
*/
const obj = { column1: "content1", column2: "content2", column3: "content3" };
console.log(convertObjectToArray(obj));
