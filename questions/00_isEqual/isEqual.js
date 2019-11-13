
function isEqual(obj1, obj2) {
<<<<<<< HEAD
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
=======
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
}

module.exports = { isEqual };
