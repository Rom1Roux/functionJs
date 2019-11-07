// Convert Array of objects in a sigle Object
var returnObject = convertArrayInObject([
  {Romain: '1234'},
  {Test: '12761'},
  {'Super Test' : '2937823'} // to have a key with a space, use the quotation marks
  ]);

  console.log(returnObject); // {Romain: '1234', Test: '12761', 'Super Test' : '2937823'}
  ]);
  // console.log(returnObject.Romain);
  // console.log(returnObject['Super Test'])

function convertArrayInObject(data){
 var result = {} // init object
  for (var i = 0; i < data.length ; i++){
    //    // result = Object.assign(result, data[i]); // Object method 
    var key = Object.keys(data[i])[0]; 
    var value = data[i][Object.keys(data[i])[0]];
    result[key] = value; // without method
  }
  return result;
}
