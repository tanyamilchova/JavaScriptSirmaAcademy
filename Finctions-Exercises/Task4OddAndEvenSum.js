//You have to write a JS function, that returns the sum of all even and all odds digits
//from that number.
function oddEvenSum(num){

    let evenSum=0;
    let oddSum=0;
   while(num>0){
    let temp=num%10;
    if(temp%2==0){
        evenSum=evenSum+temp;
    }else{
        oddSum=oddSum+temp;
    }
    num=Math.trunc(num/10);
   }
   console.log("Odd sum="+oddSum+", Even sum="+evenSum);
}
oddEvenSum(3495892137259234);