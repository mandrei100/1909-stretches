
function isEqual(obj1, obj2) {
  var solution;
  var obj1Arr = Object.keys(obj1);
  var obj2Arr = Object.keys(obj2);
  if (obj1Arr.length !== obj2Arr.length) {
    return false;
  }
  if (obj1Arr.length === 0 && obj2Arr.length === 0) {
    return true;
  }
  for (var i in obj1){
    for (var j in obj1Arr){
    if (obj1[i] === obj2[i] && obj1[j] === obj2[j]){
       solution = true;
    } else {
      solution =  false;
    }}
  }
  return solution;
}

module.exports = { isEqual };
