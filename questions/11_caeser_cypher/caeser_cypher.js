// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"
// let obj = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   3: 'd',
//   4: 'e',
//   5: 'f',
//   6: 'g',
//   7: 'h',
//   8: 'i',
//   9: 'j',
//   10: 'k',
//   11: 'l',
//   12: 'm',
//   13: 'n',
//   14: 'o',
//   15: 'p',
//   16: 'q',
//   17: 'r',
//   18: 's',
//   19: 't',
//   20: 'u',
//   21: 'v',
//   22: 'w',
//   23: 'x',
//   24: 'y',
//   25: 'z',
// }

// const encryptString = (str, shift) => {
//   let obj = []
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     3: 'd',
//     4: 'e',
//     5: 'f',
//     6: 'g',
//     7: 'h',
//     8: 'i',
//     9: 'j',
//     10: 'k',
//     11: 'l',
//     12: 'm',
//     13: 'n',
//     14: 'o',
//     15: 'p',
//     16: 'q',
//     17: 'r',
//     18: 's',
//     19: 't',
//     20: 'u',
//     21: 'v',
//     22: 'w',
//     23: 'x',
//     24: 'y',
//     25: 'z',
//   ]
//   console.log(str.split(''));
//   let number = str.split('');
//   number.forEach((element,idx) => {
//     console.log(element, idx);
//   });
// };

const encryptString = (str, shift) => {
  let result = '';
  const alphaShift = shift % 26;
  const numShift = shift % 10;

  const nonAlphanumeric  = /^a-zA-Z\d/;
  if (str.match(nonAlphanumeric)){
    throw new Error('String must contain only numbers and letters');
  }
  for (var i = 0; i < str.length; i += 1){
    const currChar = str[i];
    if(charCode >= 65 && charCode <= 90){
      charCode += alphaShift;
      if (charCode > 90) {
        charCode -= 26;
      } else if (charCode < 65){
        charCode += 26;
      }
    }
    if (charCode >= 97 && charCode <= 122){
      charaCode += alphaShift;
      if (charCode)
    }
  }
}

console.log(encryptString('yolo789', 4));

// result = "csps123"


module.exports = { encryptString };
