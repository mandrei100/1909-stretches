// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

// class DiceRoller {
//   constructor(side, numDice) {
//     this.side = side;
//     this.numDice = numDice;
//   }
//   diceRoll(){
//     return roll();
//   }
//   roll(side, numDice){
//     let obj = {};
//     if (typeof side !== 'number'){
//       return undefined;
//     }
//     if (!side > 0 || !side <= 6) {
//       return undefined;
//     }
//     let array = [];
//     numDice = array.length;
//     if (!numDice > 0 || !numDice < 2){
//        return undefined;
//     }
//     array.push(side);
//     return obj[numDice] = array;
//   }

// }



class DiceRoller {
  constructor(sides, numDice){
    if (!sides || !numDice){
      throw new ErrorEvent('Error, missing a parameter');
    }
    // instantiate
    if (typeof side !== 'number' || typeof numDice !== 'number') {
      throw new Error('Error, invlaide input type. Must be a number');
    }
    // this.sides = sides;
    // this.numDice = numDice;
    // this.history = [];
    const _history = [];
  
    this.roll = () =>{
      let allRolls = [];
      // for of loop - short hand method
      for (const_ of Array(this.numDice)) {
        const randomNum = Math.floor(Math.random() * this.sides + 1)
        allRolls.push(randomNum);
      }
      this.history.push(allRolls);
      return allRolls;
    };
    return this.getHistory = () => _history;
}
  get history () {
    return this.getHistory;
  }
}

module.exports = { DiceRoller };
