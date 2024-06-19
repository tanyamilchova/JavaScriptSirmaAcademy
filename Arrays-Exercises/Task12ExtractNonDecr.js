// Extracts only those numbers that form a non-decreasing subsequence. Start from the
// first element and continue to the end of the given array of numbers. Any number which
// is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than
// the current biggest one you set it as the current biggest one and you continue to the next
// number.
// The input comes as an array of numbers.

// e: office@sirma.bg a: 135 Tsarigradsko Shosse, blvd.
// m: +359 2 9768310 1784 Sofia, Bulgaria

// sirma.com
// The output is the processed array after the filtration, which should be a non-decreasing
// subsequence. The elements should be printed on one line, separated by a single space.
// Examples
// Input Output
// [ 1, 3, 8, 4, 10, 12, 3, 2, 24] 1 3 8 10 12 24
let arr=[ 1, 3, 8, 4, 10, 12, 3, 2, 24];
let max=0;
for (let i = 0; i <arr.length ; i++) {
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]>=max){
        console.log(arr[i]+" ");
    }
}