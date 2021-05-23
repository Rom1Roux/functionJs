/**
 * Version ES6
 * get string between character
 * ex : getStringBetweenCharacter("Test [1234]", "[", "]") = "1234"
 *
 * @param {String} string to split (this is mail subject)
 * @param {String} fist character before the string to get
 * @param {String} second character affter the string to get
 * @return {String} return string between charac1 and charac2
 ***/
const getStringBetweenCharacter = (str, charac1, charac2) =>
  str.substring(str.lastIndexOf(charac1) + 1, str.lastIndexOf(charac2));

console.log(getStringBetweenCharacter("Test [1234]", "[", "]")); // return '1234'
