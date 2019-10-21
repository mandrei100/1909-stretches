const trim = obj => {
    let newObj = {};
    for (var i in obj){
      if (obj[i] !== 'undefined' || obj[i] !== 'null'){
        newObj[i] = obj[i];
      }
    }
    return newObj;
  };

module.exports = { trim };
