
/**
 * This function is inspired by the map function of Arduino (C++)
 * It transfers a value from the current range 
 * to a new range of values specified by parameters
 * @param {Number} x - value to convert
 * @param {Number} inMin 
 * @param {Number} inMax 
 * @param {Number} outMin 
 * @param {Number} outMax 
 * @param {Object} options - convert number return in integer
 * @returns 
 */
const map_range = (x, inMin, inMax, outMin, outMax, options) => {
  let value = outMin;

  if (x < inMin || x > inMax) {
    x < inMin && (value = outMin);
    x > inMax && (value = outMax);
    return value;
  }

  value = ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  if (options) {
    options.convertInt && (value = parseInt(value));
  }
  return value;
};

console.log(map_range(10, 0.002, 1, 0, 100)); // 100
console.log(map_range(0.000002, 0.002, 1, 0, 100)); // 0
console.log(map_range(25, 0, 50, 0, 100)); // 50
console.log(map_range(0.0111, 0.00001, 1, 0, 100, { convertInt: true })); // 1
