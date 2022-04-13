
/**
 * Create an Array of arrays (with objects) from an array of objects
 * and distribute elements by the unique keys (defined by the code)
 */
const distributeArrOfObjByElementUnique = () => {

  let data = [
    { firstName: "Jean", lastName: "TEDAME", ref: 0 },
    { firstName: "Jean", lastName: "TEDAME", ref: 1 },
    { firstName: "Clair", lastName: "VOYAN", ref: 2 },
    { firstName: "Jean", lastName: "TEDAME", ref: 3 },
    { firstName: "Jean", lastName: "TEDAME", ref: 4 },
    { firstName: "Clair", lastName: "VOYAN", ref: 5 },
    { firstName: "Jean", lastName: "TEDAME", ref: 6 },
  ]

  // create unique table from data
  const unique = [... new Set(data.map(el => `${el.firstName} | ${el.lastName}`))];

  // creates an array of array based on the length of the unique array
  let newData = new Array(unique.length).fill([]);

  // distribute the elements that corresponds to the unique array
  for (let j = 0; j < data.length; j++) {
    const index = unique.indexOf(`${data[j].firstName} | ${data[j].lastName}`);
    newData[index] = [...newData[index], data[j]];
  }

  console.log(newData);
  /* return :
  [ [ { firstName: 'Jean', lastName: 'TEDAME', ref: 0 },
    { firstName: 'Jean', lastName: 'TEDAME', ref: 1 },
    { firstName: 'Jean', lastName: 'TEDAME', ref: 3 },
    { firstName: 'Jean', lastName: 'TEDAME', ref: 4 },
    { firstName: 'Jean', lastName: 'TEDAME', ref: 6 } ],
  [ { firstName: 'Clair', lastName: 'VOYAN', ref: 2 },
    { firstName: 'Clair', lastName: 'VOYAN', ref: 5 } ] ]
   */
}
