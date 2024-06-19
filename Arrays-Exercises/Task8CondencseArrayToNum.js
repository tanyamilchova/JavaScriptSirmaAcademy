// Write a program to receive an array of numbers and condense them by summing
// adjacent couples of elements until a single number is obtained. For example, if we have
// 3 elements {2, 10, 3}, we sum the first two and the second two elements and obtain
// {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13}
// = {25}.
// Input Output
// [2,10,3] 25
let arr=[5,0,4,1,2];
let start=arr[0];
let temp;
while (arr.length>1){
temp=[];
    for (let i =1 ; i < arr.length; i++) {
        let sum=arr[i]+arr[i-1];
        temp.push(sum);
        
    }
    arr=temp;
}
console.log(temp);