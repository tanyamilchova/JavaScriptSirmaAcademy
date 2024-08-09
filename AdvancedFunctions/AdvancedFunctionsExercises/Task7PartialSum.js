// 7. Partial Application with Closures
// Create a function that takes four arguments and returns their sum. Create a partially
// applied version of this function that always adds 5 to the sum of three other numbers.

function adition (a,b,c,d){
    console.log(a+b+c+d);
}

const partialSum=(d)=>adition(1,2,3, d);

const addFive = partialSum(5);
console.log(addFive);