/**
 * Function to sort an array of arrays on a column
 * @param {Array} this array of arrays
 * @param {Number} number correpond to column number
 * @return {Array} return array of arrays sorted
 */
const sortArrayOfArrays = (tab, column) =>
  tab.sort(function (a, b) {
    // si current value and next value is'nt empty or undefined then change value to uppercase else empty cell
    const elCurrent = a[column] ? a[column].toUpperCase() : "";
    const elNext = b[column] ? b[column].toUpperCase() : "";

    if (elCurrent < elNext) {
      return -1;
    }
    if (elCurrent > elNext) {
      return 1;
    }
    // names must be equal
    return 0;
  });

const data = [
  ["", 23, "Actif"],
  ["row2", 23, ""],
  ["row3", 1, "b-Vérification en cours"],
  ["", 1, "Actif"]
];
console.log(sortArrayOfArrays(data, 2)); // return  ["row2", 23, ""], ["", 23, "Actif"], ["",1, "Actif"],   ["row3",1, "b-Vérification en cours"],
