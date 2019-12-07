/* Function to convert letter to number | my calcul return A = 1, B = 2, AA = 27,...
 * This code is used to find the correspondence of column letters in a Google spread sheet (columns start at 1)
 * param{string} string can contain two letters max
 * return{number} return a number that is the result of the conversion
 */
function convertLettertoNumber(str) {
  var first = str[0].toLowerCase().charCodeAt(0) - 97 + 1;
  var second = 0;
  var comp = 0;
  var alphaRange = 1;
  if (str[1] !== undefined) {
    alphaRange = 27;
    second = str[1].toLowerCase().charCodeAt(0) - 97;
    first > 1 && (comp = first - 1);
  }
  console.log(first, ' * ', alphaRange, ' + ',second, ' - ', comp);
  return first * alphaRange + second - comp;
}

console.log('number : ', convertLettertoNumber('a')); // 1
console.log('number : ', convertLettertoNumber('A')); // 1
console.log('number : ', convertLettertoNumber('AA')); // 27
console.log('number : ', convertLettertoNumber('BA')); // 53
