/*** Function to convert an Array of arrays into an Array of objects 
 * return => [{name:"Romain", email:"romain@test.com", age:"36", city:"Toulouse"}, 
 *            {name:"Yann", email:"yann@test.com", age:"38", city:"Paris"}]
 ***/

var result = convertIntoArrayOfObject([ [ 'Romain',
    'romain@test.com',
    '36',
    'Toulouse' ],
  [ 'Yann',
    'yann@test.com',
    '38',
    'Paris' ] ]);
    console.log(result);

function convertIntoArrayOfObject(array){
return array.map(function(x) { 
  return { 
    name: x[0], 
    email: x[1],
    age: x[2],
    city: x[3]
  }; 
});
}
