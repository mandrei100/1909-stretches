/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, objKey) {
    let newArray = arr.map(ele=> {
      for (let i in ele){
       if (objKey === i){
         return ele[i];
       }
      }
    })
    return newArray.sort();
  }

module.exports = { sortOrder };
