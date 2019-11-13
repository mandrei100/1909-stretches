/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
<<<<<<< HEAD
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
=======
  let largestSoFar = -Number('Infinity');
  for (let val of arr) {
    if (val % num === 0) {
      largestSoFar = Math.max(val, largestSoFar);
    }
  }
  if (largestSoFar === -Number('Infinity ')) {
    return null;
  }
  return largestSoFar;
}

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null
>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882

  
  
module.exports = { largestDivisible };
