/*** Function to find value in Array of objects ***/

  var result = findValueInArrayObjects([
    {'dossier1' : 'Hello world'},
    {'dossier2' : 'Good Bye'}
    ], 
    'dossier2'); // find value of dossier2
  console.log(result); // 'Good Bye'

function findValueInArrayObjects(data, find){
  for (var i in data){
    if (data[i][find] !== undefined){ // if the text contains spaces
      return data[i][find];
    }
  }
}
