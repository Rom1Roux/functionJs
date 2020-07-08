
console.log(isSameDate(new Date("2020/07/11 10:00:00"), new Date("2020/07/11 11:00:00"))); //  return true
console.log(isSameHours(new Date("2020/07/11 10:00:00"), new Date("2020/07/11 11:00:00"))); //  return false

/**
* Only compare date (without hours) 
*
* @param{Date} date1
* @param{Date} date2
* @return{boolean} return true or false
*/
function isSameDate(date1, date2) {
  let res = [date1, date2];

  res = res.map(el=>{
    el = new Date(el);
    el.setHours(0, 0, 0, 0);
    return el;
  })

  //console.log("isSameDate : ", Date.parse(res[0]) === Date.parse(res[1]));
  return Date.parse(res[0]) === Date.parse(res[1]);
}


/**
* Only compare hours (without date)
*
* @param{Date} date1
* @param{Date} date2
* @return{boolean} return true or false
*/
function isSameHours(date1, date2) {
  let res = [date1, date2];

  res = res.map(el => {
    el = new Date(el);
    el.setDate(1);
    el.setYear(2020);
    el.setMonth(0);
    return el;
  });

  // console.log(Date.parse(res[0]) === Date.parse(res[1]))
  return Date.parse(res[0]) === Date.parse(res[1]);
}
