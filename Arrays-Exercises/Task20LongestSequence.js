//Write a program that finds the longest sequence of identical elements in an array of integers. If 2 or
// more sequences have the same length, print the one that is on the &quot;right&quot;.let arr = [2, 2, 2, 3, 4, 4, 5, 5, 5, 1];
let arr = [2, 2, 2, 3, 4, 4, 5, 5, 5, 1];
let maxCount = 0;
let tempCount = 1;
let endPrint = 0;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
        tempCount++;
    } else {
        if (maxCount <= tempCount) {
            maxCount = tempCount;
            endPrint = i;
        }
        tempCount = 1;
    }
}

let output = "";
for (let i = endPrint - maxCount + 1; i <= endPrint; i++) {
    output += arr[i];
}
console.log(output);
