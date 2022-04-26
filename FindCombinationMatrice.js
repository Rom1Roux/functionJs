/**
 * Find all combinations follow column length
 * @param {Number} length is column length
 * @returns {Array} return Array of arrays (contains booleans)
 */
const findCombinationMatrice = (length = 5) => {
  let res = [];
  let combFound = 0;
  const maxCombination = Math.pow(2, length); // maximum number of possibilities

  while (combFound < maxCombination) {
    
    let row = new Array(length).fill(false).map(() => getRandomBool_());

    const isNotFound = res.filter(el => {
      return row.map((elem, i) => el[i] === elem).filter(elem => elem === false).length === 0
    }).length === 0

    if (isNotFound) {

      res.push(row);

      combFound += 1;
      console.log("combination : ", row);
      console.log("number of combinations found : ", combFound);
    }
  }
  console.log("result : ", res);

  // set values in Google Spreadsheet
  /* SpreadsheetApp.openById(TEMPLATE_ID)
  .getSheetByName("Matrice Combination")
  .getRange(2,1,res.length,res[0].length)
  .setValues(res); */

  return res;
}

/**
 * Randoom Boolean (true or false)
 * @returns {Boolean}
 */
const getRandomBool_ = () => {
  return Math.floor(Math.random() * 2) === 1 ? true : false;
}
