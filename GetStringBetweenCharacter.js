/*** get string between character - ex : getStringBetweenCharacter("Test [1234]", "[", "]") = "1234"
@param(string) string to split (this is mail subject)
@param(string) fist character before the string to get
@param(string) second character affter the string to get
@return(string) return string between charac1 and charac2
***/
console.log(getStringBetweenCharacter("Test [1234]", "[", "]")); // return '1234'

function getStringBetweenCharacter(str, charac1, charac2){
  return str.substring(
    str.lastIndexOf(charac1) + 1, 
    str.lastIndexOf(charac2)
  );
}
