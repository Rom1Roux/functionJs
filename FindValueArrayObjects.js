/*** Function to find value in Array of objects ***/

var test = findValueInArrayObjects(
  [{ dossier1: 'Hello world' }, { dossier2: 'Good Bye' }],
  'dossier2' // find value of dossier2
);
console.log(test); // 'Good Bye'

function findValueInArrayObjects(data, find) {
  var res = data.filter(function(x) {
    return x[find] !== undefined;
  });
  return res.length === 0 ? false : res[0][find];
}
