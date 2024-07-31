// 3. Using bind for Partial Application.
// Create a function that multiplies two numbers. Use bind to create a new function that
// always multiplies by a specific number.


function multiply(a, b) {
    return a * b;
    }

 const multiplyByFive=function(a){
    const multiplyByFive=(multiply.bind(this,5));
    console.log( multiplyByFive(a));
 }   
 multiplyByFive(3);