/* Function to convert Array of arrays to Array of Objects 
* @param{Array} Array that contain strings (who will become keys of objects) 
* @param{Array} Array that contain arrays with strings (who will become values of objects) 
* @return{Array} return array of objects
*/
function arrOfArrOnArrOfObj(headers, data){
  var eventsArr = [];
  for (var i = 0; i < headers.length; i++) {
    var newEvent = {};
    for (var j = 0; j < data.length; j++) {
      newEvent[headers[j]] = data[i][j];
  };
  eventsArr.push(newEvent);
}
return eventsArr;
}

var headers = ['FirstName', 'City'];
var values = [['Romain', 'Toulouse'], ['Etienne', 'Eymet']];
console.log(arrOfArrOnArrOfObj(headers, values)); // return [{FirstName: "Romain", City: "Toulouse"}, {FirstName: "Etienne", City: "Eymet"}]
