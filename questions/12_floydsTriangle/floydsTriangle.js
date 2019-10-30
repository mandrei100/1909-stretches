// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

// const floydsTriangle = n => {
//     let row = n;
//     let array = [];
//     for (var i = 0; i < row; i++){
//       let counter = i+1;
//       array.push(counter);
//       console.log(array.join(''));
//     }
    
    
// };

const floydsTriangle = n => {
    const result = [];
    let curNum = 1;
    for (let i = 0; i < n; i++){
        const curRow = [];
        for (let j = 0; j <= 1; j++){
            curRow.push(curNum);
            curNum++;
        }
        result.push(curRow.join(''));
    }
    return result.join('\n');
}


console.log(floydsTriangle(10));
module.exports = { floydsTriangle };
