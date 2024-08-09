console.log("Welcome to Node.js APP!");
const{sum} = require('./calculator'); //Common JS import
console.log(sum(1,2));

const calculator=require('./calculator'); 
console.log(calculator.sum(1,2));