// Write a JS Function that reaceives two integer numbers. Calculate factorial of each
// number. Divide the first result by the second and print the division formatted to the
// second decimal point.
let number1=5;
let number2=2;
function factorialDivision(number1,number2){
    let result=getFactorial(number1)/getFactorial(number2);
    return result;
}
function getFactorial(num){
    let fact=1;
    for (let index = 2; index <= num; index++) {
        fact*= index;   
    }
    return fact;
}
console.log( factorialDivision(number1,number2));