// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  let lowStr1 = str1.toLowerCase().split('').sort();
  let lowStr2 = str2.toLowerCase().split('').sort();
  console.log(lowStr1, lowStr2);
  let solution;
  for (var i in lowStr1){
    if (lowStr1[i] === lowStr2[i]){
      return true;
    } else {
      return false;
    }
    
  }


  
};

module.exports = { checkAnagrams };
