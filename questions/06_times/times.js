function times() {
    
    var arr = [...times.arguments];
    return arr.reduce((a,b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a*b;
      } else {
        return 'Numbers only!';
      }
      
    })
}


module.exports = { times };
