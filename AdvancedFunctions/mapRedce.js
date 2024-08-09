// Map - new arr based on the previious arr
const numbers=[1,2,3,4,5];
console.log(numbers);
//const doubleNums =numbers.map( (number, index)=>number*2);
const doubleNums =numbers.map(number=>number*2);
console.log(doubleNums);

//Filter
const oddNums=numbers.filter(number => number % 2 !== 0);
console.log(oddNums);

//Reduce
const reducedRes=numbers.reduce((accumulator, currentNumbre)=>accumulator + currentNumbre , 0);
console.log(reducedRes);