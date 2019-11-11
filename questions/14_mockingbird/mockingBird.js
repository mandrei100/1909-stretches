const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let arr = [];
  let count = 0;
  if (count !== n){
    count++;
    arr.push(func());
    repeater(func, n);
  } else {
    return arr;
  }
};

module.exports = { repeater };
