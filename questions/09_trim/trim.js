const obj = {
    foo: false,
    bar: undefined,
    bazz: null,
    quq: 0,
  };
  
  const trim = obj => {
    let newObj = {};
    for (var i in obj){
      if (obj[i] != undefined || obj[i] != null){
        newObj[i] = obj[i];
      }
    }
    return newObj;
  };
  console.log(trim(obj))
  module.exports = { trim };
module.exports = { trim };
