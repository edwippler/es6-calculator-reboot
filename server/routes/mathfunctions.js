var calculator = require('./calculator');

var multiply = (num1, num2) => num1 * num2;

var divide = (num1, num2) => num1 / num2;

var subtract = (num2, num1) => num2 - num1;

var add = (num1, num2) => Number(num1) + Number(num2);

module.exports = {
  multiply,
  divide,
  subtract,
  add
}
