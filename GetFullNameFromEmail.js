/**
 * Get fullName from email.
 * @param {String} userMail
 * @returns {String} fullName
 */
 const getUserName = (userMail) => {
  const split = userMail
    .split("@")[0]
    .replace(".external", "")
    .split(".")
    .map((el) => toUpperCaseFirst(el));
  return split.length > 2
    ? split[0] + " " + split[2]
    : split[0] + " " + split[1];
};
/**
 * First letter in upper case
 * @param {String} string 
 * @returns {String}
 */
const toUpperCaseFirst = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const email = "romain.ro.roux.external@superbus.com";
console.log(getUserName(email)); // => Romain ROUX
