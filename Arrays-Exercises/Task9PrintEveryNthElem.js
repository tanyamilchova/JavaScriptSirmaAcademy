// Write a program that collects every element of an array on a given step.
// The input comes as array of strings and N - the step.
// The collections are every element on the N-th step starting from the first one, until you
// reach the end of the array. Then, print elements in a row, separated by single space.
// Examples
// Input Output
// [&#39;5&#39;, &#39;15&#39;, &#39;31&#39;, &#39;14&#39;, &#39;20&#39;], 2 5 31 20
let arr=[ "5","15","31","14","20"];
let num=2;

for (let i = 0;i< arr.length; i++) {
   if(arr[i]%2!=0){
    console.log(arr[i]);
   }

}