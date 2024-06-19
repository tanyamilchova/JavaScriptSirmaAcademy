// You are given two integers n and k. Write a program that generates and prints the following
// sequence:
//  The first element is 1
//  Every following element equals the sum of the previous k elements
//  The length of the sequence is n elements

// The input comes as two number arguments. The first element represents the number n, and
// the second – the number k.
// The output is printed on the console on a single line, separated by space.let length = 3;
let length=6;
let k = 3;
let start = 1;
let sum = 0;

let helpArr = new Array(length);
helpArr[0] = start;

for (let i = 1; i < length; i++) {
    if (i <= k) {
        sum += helpArr[i - 1];
        helpArr[i] = sum;
    } else {
        sum += helpArr[i - 1] - helpArr[i - k - 1];
        helpArr[i] = sum;
    }
}

console.log(helpArr);
