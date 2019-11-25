// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

Array.prototype.next = function (arr){
    if (arr.length === 0){
      return undefined;
    }
    let count = 0;
    
    for (let i = 0; i < arr.length; i++){
      console.log(arr[i]);
      count++;
    }
   }


// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

// no export statement required
