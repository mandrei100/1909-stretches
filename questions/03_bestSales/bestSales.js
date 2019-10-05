const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let newObj = {};
  let key;
  let value;
  var array = [];
  for (var i in sales) {
    for (var j in sales) {
      if (sales[i].productId === sales[j].productId) {
        key = sales[i].productId;
        value = sales[i].amount + sales[j].amount;
      }
    }
    newObj[key] = value;
  }
  return newObj;
}

console.log(bestSales(sales));
module.exports = { bestSales, sales };
