/* 
* Version ES5
* Function to convert Array of arrays to Array of Objects 
* @param{Array} Array that contain strings (who will become keys of objects) 
* @param{Array} Array that contain arrays with strings (who will become values of objects) 
* @return{Array} return array of objects
*/
function arrOfArrOnArrOfObj(headers, data){
  var eventsArr = [];
  for (var i = 0; i < data.length; i++) {
    var newEvent = {};
    for (var j = 0; j < headers.length; j++) {
      newEvent[headers[j]] = data[i][j];
  };
  eventsArr.push(newEvent);
}
return eventsArr;
}

/*
 * Version ES6
 * Function to convert Array of arrays to Array of Objects
 * @param{Array} Array that contain strings (who will become keys of objects)
 * @param{Array} Array that contain arrays with strings (who will become values of objects)
 * @return{Array} return array of objects
 */
const arrOfArrOnArrOfObj2 = (headers, data) => {
  let arr = [];
  for (let row = 0; row < data.length; row++) {
    let obj = {};
    for (let col = 0; col < headers.length; col++) {
      obj = { ...obj, [headers[col]]: data[row][col] };
    }
    arr.push(obj);
  }
  return arr;
};

var headers = ['FirstName', 'City'];
var values = [['Romain', 'Toulouse'], ['Etienne', 'Eymet']];
console.log(arrOfArrOnArrOfObj(headers, values)); // return [{FirstName: "Romain", City: "Toulouse"}, {FirstName: "Etienne", City: "Eymet"}]
