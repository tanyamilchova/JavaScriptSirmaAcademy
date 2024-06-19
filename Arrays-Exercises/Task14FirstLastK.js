// Write a program that prints the first k and the last k elements from an array of numbers.
// The input comes as an array of number elements and k.
// The output is printed on the console on two lines. On the first line print the first k elements,
// separated by space. On the second line print the last k elements, separated by space.let k = 3;
let arr = [6,7,8,9];
let k=3;
if (arr.length > 0) {
    for (let i = 0; i < k; i++) {
        process.stdout.write(arr[i] + " ");
    }
    console.log(); // Move to the next line

    for (let i = arr.length - k; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }
} else {
    console.log("Array is empty");
}
