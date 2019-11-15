/*** Function to rename a part of a string of characters between brackets ***/

function newTitle (old, string){
  return old.split('[')[0] + ' [' + string + ']';
}

console.log(newTitle('test [2019]', 2020)); // 'test  [2020]'
