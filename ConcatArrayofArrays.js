function concatArrays(arr){
  return [].concat.apply([], arr);
}

var tab = [['tab1'],['tab2'],['tab3'],['tab4']]
console.log(concatArrays(tab));