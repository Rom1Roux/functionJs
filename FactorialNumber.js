/**
 * Factorial of a number
 * Example : 
 * 0! = 1
 * 1! = 1
 * 2! = 2 * 1
 * 3! = 3 * 2 * 1
 * 4! = 4 * 3 * 2 * 1
 * 5! = 5 * 4 * 3 * 2 * 1
 * 6! = 6 * 5 * 4 * 3 * 2 * 1
 * @param {Number} nbr
 * @return {Number} result
 */
const facto = (nbr) => {
  nbr === 0 && (nb = 1);
  let initialValue = 0;
  return new Array(nbr).fill(0).
    map((_el, i) => i + 1)
    .sort((a, b) => b - a)
    .reduce(
      (accumulator, currentValue, index) =>
        index === 0 ? currentValue : accumulator * currentValue, initialValue
    );
}
