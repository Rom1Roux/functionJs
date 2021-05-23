/**
 * Function to remove column if element empty into header
 * @param {Array} Array that contain strings (header)
 * @param {Array} Array that contain arrays (data spread sheet)
 * @return {object} return obeject with header and data updated
 */
function removeColumnEmpty(headers, data) {
  // create an array with index of element header empty
  var emptyList = headers
    .map(function (el, i) {
      return (el === "" || el === " " || el === undefined) && i;
    })
    .filter(function (el) {
      return el !== false;
    });

  console.log("column list to remove : ", emptyList);

  var newData = [];
  var newHeaders = [];

  // if element empty in headers
  if (emptyList.length > 0) {
    for (var row = 0; row < data.length; row++) {
      var newRow = [];

      for (var col = 0; col < data[0].length; col++) {
        if (emptyList.indexOf(col) === -1) {
          newRow.push(data[row][col]);
          row === 0 && newHeaders.push(headers[col]);
        }
      }
      newData.push(newRow);
    }
    // if not element empty in headers
  } else {
    newData = data;
    newHeaders = headers;
  }
  return { headers: newHeaders, data: newData };
}

/**
 * ES6 version
 * Function to remove column if element empty into header
 * @param {Array} Array that contain strings (header)
 * @param {Array} Array that contain arrays (data spread sheet)
 * @return {object} return obeject with header and data updated
 */
const removeColumnEmpty2 = (headers, data) => {
  const indexToRemove = [];
  headers = headers.filter((el, i) => {
    if (el === "" || el === undefined) {
      indexToRemove.push(i);
      return false;
    }
    return true;
  });
  data = data.map((row) =>
    row.filter((col, i) => indexToRemove.indexOf(i) === -1)
  );
  return { headers, data };
};

// if equal then update, if only in master then #N/A, if only in extract add row
var headers = ["header1", "", "headers3", ""];
var data = [
  ["row1 Column1", "row1 Column2", "row1 Column3", "row1 Column4"],
  ["row2 Column1", "row2 Column2", "row2 Column3", "row2 Column4"]
];

// return Object {headers: ["header1", "headers3"], data : [["row1 Column1", "row1 Column3"],["row2 Column1", "row2 Column3"]];
console.log("ES5", removeColumnEmpty(headers, data));
console.log("ES6", removeColumnEmpty2(headers, data));
