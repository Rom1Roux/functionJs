/**
 * Retrieves information for the style of the front
 * Convert an array of arrays to an object of objects
 * 
 * @param {Array} data is an array of arrays
 * @returns an object of object
 */
const getMyStyle = (data) => {
  let style = {};
  for (let row = 0; row < data.length; row += 1) {
    style = { ...style, [data[row][0]]: { ...style[data[row][0]], [data[row][1]]: data[row][2] } }
  }
  // console.log("style", style)
  return style;
}

const arr = [
  ["h1", "fontSize", "4em"],
  ["h2", "textAlign", "center"],
  ["h2", "marginTop", "40px"],
  ["h2", "fontSize", "3em"],
  ["p", "fontSize", "1.2em"],
];


/**
 * 
 * return :
 * { 
 *  h1: { fontSize:"4em"}, 
 *  h2: { textAlign:"center",
 *        marginTop:"40px",
 *        fontSize:"3em"},
 *  p: { fontSize:"1.2em"}
 * }
 * 
 */
console.log(getMyStyle(arr));
