//(Write a JS function that receive a number and return if this number is perfect or not.
// A perfect number is a positive integer that is equal to the sum of its proper positive
// divisors. That is the sum of its positive divisors excluding the number itself (also known
// as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive
// divisors (including itself) =&gt; 6 is a perfect number, because it is the sum of 1 + 2 + 3 (all
// of which are divided without remainder).
// Examples
// Input Output
// 6 Perfect number!
// 1 + 2 + 3)
let number=6;
let divisors=[];
function getPositiveDivisors(){
    for (let i = 1; i <number; i++) {
        if(number%i==0){
            divisors.push(i);
        }
    }
}

function sumPositiveDiv(divisors){
    let sum=0;
    for (let index = 0; index < divisors.length; index++) {
        sum+=divisors[index];
    }
    console.log(sum);
    return sum;
}
function checkIfPerfectNum(number) {
    getPositiveDivisors(number);
    console.log(divisors);
    if(sumPositiveDiv(divisors)==number){
        console.log("Perfect number!");
    }else{
        console.log("It's not a perfect number");
    }
}
checkIfPerfectNum(number);