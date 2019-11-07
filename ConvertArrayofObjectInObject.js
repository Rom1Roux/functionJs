// Convert Array of objects in a sigle Object
var returnObject = convertArrayInObject([
  {Romain: '1234'},
  {Test: '12761'},
  {'Super Test' : '2937823'} // to have a key with a space, use the quotation marks
  ]);

  console.log(returnObject);
  // console.log(returnObject.Romain);
  // console.log(returnObject['Super Test'])

function convertArrayInObject(data){
  var result = {} // init object
  for (var i in data){
    // result = Object.assign(result, data[i]); // Object method 
    result[Object.keys(data[i])] = Object.values(data[i])[0]; // without method
  }
  return result;
}
