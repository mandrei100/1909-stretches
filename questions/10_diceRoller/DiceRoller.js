// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(side, numDice) {
    this.side = side;
    this.numDice = numDice;
  }
  diceRoll(){
    return roll();
  }
  roll(side, numDice){
    let obj = {};
    if (typeof side !== 'number'){
      return undefined;
    }
    if (!side > 0 || !side <= 6) {
      return undefined;
    }
    let array = [];
    numDice = array.length;
    if (!numDice > 0 || !numDice < 2){
       return undefined;
    }
    array.push(side);
    return obj[numDice] = array;
  }

}

module.exports = { DiceRoller };
