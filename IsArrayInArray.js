/**
 * Vérifie si un tableau est inclus dans un tableau de tableaux.
 *
 * @param {Array} mainArray - Le tableau de tableaux à vérifier.
 * @param {Array} subArray - Le tableau à rechercher dans le tableau de tableaux.
 * @return {boolean} True si subArray est trouvé dans mainArray, sinon False.
 */
const isArrayInArray = (mainArray, subArray) => {
  for (const arr of mainArray) {
    if (JSON.stringify(arr) === JSON.stringify(subArray)) {
      return true;
    }
  }
  return false;
};

const mainArray = [
  [1, 2, 3],
  ['test', 'test', 'test'],
  [7, 8, 9],
];
const subArray = ['test', 'test', 'test'];

const isFound = isArrayInArray(mainArray, subArray);
console.log(isFound); // true
