/**
* function to update an object. It works like the Object.assign () method
* @param{object} object who is source
* @param{object} object who is target
* @return{object} return the object update
*/
function assignObject(source, target) {
  for (var i = 0 ; i < Object.keys(source).length; i++) {
    target[Object.keys(source)[i]] = source[Object.keys(source)[i]];
  }
  return target;
}

var source = {color : 'blue'};
var target = {name : 'Romain', city : 'Toulouse'};
console.log(assignObject(source, target)); // return {name:"Romain", city:"Toulouse", color:"blue"}
