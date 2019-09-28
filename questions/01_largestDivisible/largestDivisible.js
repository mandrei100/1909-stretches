/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
    var array = [];
    arr.forEach(divisible=>{
      if (divisible % num === 0) {
        array.push(divisible);
      }
    })
    if (array.length === 0) {
      return null;
    }
    return solution =  array.sort().reduce((large, largest) =>{
      if (large < largest){
        
        return largest;
      }
    })
    
  }

  
  
module.exports = { largestDivisible };
