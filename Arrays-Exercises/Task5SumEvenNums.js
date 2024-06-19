let arr=[ "1","2","3","4","5","6"];
let sum=0;
for (let index = 0; index < arr.length; index++) {
    let intElem=parseInt(arr[index]);
    if(intElem%2==0){
        sum+=intElem;
    }  
}
console.log(sum);