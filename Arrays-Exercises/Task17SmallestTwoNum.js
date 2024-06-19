// Write a program that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
let arr=[30,15,50,5];
let min=arr[0];
let min2=arr[0];

for (let i = 1; i< arr.length; i++) {
  if(min>arr[i]){
    min=arr[i];
  }
  
}
for (let j = 0; j < arr.length; j++) {
    if(min!=arr[j] && min2>arr[j]){
        min2=arr[j];
      }
}
console.log(min+", "+min2);
