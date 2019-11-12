const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let arr = [];
  let count = 0;
  if (count === n){
    return arr;
  } else {
    count++;
    arr.push(func());
    repeater();
  }
};

module.exports = { repeater };
