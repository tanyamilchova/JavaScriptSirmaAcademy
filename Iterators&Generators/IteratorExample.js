let arr=[10,20,30];
// const iterator=arr[Symbol.iterator]();
// let num=iterator.next();
// for (const num in arr){
//     console.log(arr[num]);
// }
//***********************
arr[Symbol.iterator]=function(){
    let idx=0;
    return{
        next(){
            
            return{
                value:idx++,
                done:idx>arr.length
            }
        }
    };
};
for (const elem of arr) {
    console.log(arr[elem]);
}


