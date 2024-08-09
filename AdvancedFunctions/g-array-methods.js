// Map -> new array based on previous array elements
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// Filter -> filters elements based on a specific rule
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);

// Reduce -> reduces array values to another value
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log(sum);
