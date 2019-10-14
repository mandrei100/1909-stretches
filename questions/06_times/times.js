function times() {
    // if (typeof num !== 'number') throw "Numbers Only";
    // return function (nextNum) {
    //     return num * nextNum
    // }
    if (typeof num !== 'number') throw "Numbers Only";
    var arr = [...times.arguments];
    return solution(arr => {
        console.log(arr);
    })


    // var arr = [...times.arguments];
    // if (arr.length === 0 ) {
    //     throw "Numbers Only";
    // }
    // if (typeof a !== 'number' && typeof b !== 'number') {
    //     throw "Numbers Only";
    // }
    // return arr.reduce((a,b) => {
      
    //     return a*b;
      
    // })
}


module.exports = { times };
