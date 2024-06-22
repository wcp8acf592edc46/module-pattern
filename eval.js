const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const merge = (a, b) => a.concat(b);