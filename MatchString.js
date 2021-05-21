const matchWithWordExact = (search, str) => {
  return str.split(" ").map(el => el.match(search) !== null && el === search)
    .filter(el => el).length > 0;
}

const matchExact = (r, str) => {
  var match = str.match(r);
  return match ? str === match[0] : false;
}

console.log(matchExact(/^mission$/, 'mission')); // true
console.log(matchExact(/^mission$/, 'mission test')); // false
console.log(matchExact(/^mission$/, 'mission2 test')); // false

console.log(matchWithWordExact('mission', 'mission')); // true
console.log(matchWithWordExact("mission", 'mission test')); // true
console.log(matchWithWordExact("mission", 'mission2 test')); // false
