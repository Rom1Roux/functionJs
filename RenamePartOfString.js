/**
 * Rename a part of a string of characters between brackets
 * @param {String} old is old string to replaced
 * @param {String} string to replace
 */
function newTitle(old, string) {
  return old.split("[")[0] + " [" + string + "]";
}

const str = "test [2019]";
const newString = "2020";
console.log(newTitle(str, newString)); // 'test  [2020]'


// Use with replace
const res = str.replace("2019", "2020");
console.log(res);
