function cache(cb) {
    if (typeof cb !== 'function') {
        throw Error ("Input must be a function");
    }
    const memo = {};
    return function cachedAdder(...num){
        console.log('num', num);
        if (num in memo){
        //if (memo[num] !== undefined) {
            return memo[num]
        } else {
            memo[num] = cb(...num);
            return memo[num];
        }
    };
}

module.exports = { cache };
