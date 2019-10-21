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


// function groupBy(arr, attr) {
//   var obj = {};
//   var array = [];
//   var word;
//   arr.forEach((key)=>{
//     word = key;
//     obj[key.length] = word;
//   })
//   return obj;
// }

// function groupBy(arr, attr){

//     arr.reduce((groupDict, nextItem) => {
//       let groupDictKey;
  
//       if(typeof attr === 'function') groupDictKey = attr(nextItem);
//       else groupDictKey = nextItem[attr];
  
//       groupDictKey[groupDictKey] = !groupDict[groupDictKey] ? [nextItem]
//       : groupDict[groupDictKey].concat([nextItem]);
  
//       // let groupDictKey;
//       // if(typeof attr === 'function') groupDictKey = attr(nextItem);
//       // else groupDictKey = nextItem[attr];
  
//       // groupDict[groupDictKey] = !groupDict[groupDictKey]
//       // ? [nextItem]
//       // :groupDict[groupDictKey].concat([nextItem]);
//       // return groupDict;
//       return groupDict;
//     }, {});
//   }
  
//   console.log(groupBy(['one', 'two', 'three', 'four']));
//   module.exports = { groupBy };