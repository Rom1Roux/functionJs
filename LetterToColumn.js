const columnToLetter = (column) => {
  let temp, letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}

const letterToColumn = (letter) => {
  letter = letter.toUpperCase();
  let column = 0, length = letter.length;
  for (let i = 0; i < length; i++) {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return column;
}


/**
 * convert simple range sheet (A2) to understandable numeric value for javascript loops
 * Example with A2 : column A becomes number 0, row 2 becomes number 1
 * @param {String} range
 * @returns {Object} contains column and row number
 */
const rangeSheetToNumericJs = (range) => {
  let searchDigital = parseInt(range.match(/\d+/g));
  resultDigit = isNaN(searchDigital) ? undefined : searchDigital; // check if a value is NaN or not
  const row = searchDigital.length > 0 ? searchDigital[0] : searchDigital;

  let letter = range.match(/[a-zA-Z]+/g)[0];

  letter = letter.toUpperCase();
  let column = 0, length = letter.length;
  for (let i = 0; i < length; i++) {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return { column: column - 1, row: row - 1 || undefined };
}
