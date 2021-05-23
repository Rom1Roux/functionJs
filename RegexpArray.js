/**
 * Function to find the correspondence of an Array (contains strings) with a string.
 * I used this function with Apps Script to find correspondence between gmail subjects in cells in a Google Spreadsheet column
 * The function returns the line numbers that match if not returns false
 * Attention, the function finds all the matches (example: 'match' === '***** match ****')
 * and the elements of the array must not be empty else the function finds matches with the spaces ( ex: string = '' === '*** ****')
 * @param {String}
 * @param {Array} array contains strings
 * @return {Array, Boolean} return an array with number if match else return false
 */

const regexpArray = (str, arr) => {
  // to be sure it's a string and not an array
  Array.isArray(str) && (str = str[0]);

  // loop on data
  const res = arr
    .map(function (x, i) {
      return str.match(x) && i; // if data match with subject then return i (increment) => in my case i used i + 2 (my row (array of spread sheet) starts to 2)
    })
    // then Remove the null values
    .filter(function (x) {
      return x !== null;
    });
  // return false if not match else return array with index of array
  return res.length === 0 ? false : res;
};

var subject = "REF 12890 CODE 23098-JLM0 test@mail.com";
var data = ["false@mail.com", "test@mail.com", "non@mail.com"];
console.log(regexpArray(subject, data)); // return [1]
