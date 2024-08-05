const add = function(a,b) {
     return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(c) {
	return c.reduce((a, b) => b * a)
};

const multiply = function() {
    return a * b;
};

const power = function() {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
        product *= i;
    }
    return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};