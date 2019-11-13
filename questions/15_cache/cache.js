function cache(func) {
    if (typeof func() === 'function'){
        func();
    } else {
        return "Not a function";
    }
    
}

module.exports = { cache };
