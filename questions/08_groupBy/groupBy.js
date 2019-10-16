function groupBy(arr, attr) {
    var obj = {};
    var array = [];
    var word;
    arr.forEach((key)=>{
      word = key;
      obj[key.length] = word;
    })
    return obj;
  }
module.exports = { groupBy };
