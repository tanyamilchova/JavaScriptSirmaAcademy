let arr=[1,2,3,4,5,6];
let evenSum=0;
let oddSum=0;
for (let index = 0; index < arr.length; index++) {
   if(arr[index]%2==0){
evenSum+=arr[index];
   }else{
    oddSum+=arr[index];
   }
}
console.log(evenSum-oddSum);