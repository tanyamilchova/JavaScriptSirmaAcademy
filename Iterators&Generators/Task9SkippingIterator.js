// Create an iterator for an array that skips every even value.
let arr=[1,2,3,4];
arr[Symbol.iterator]=function (){
    let idx=0;
    return{
        next(){
            return{
                    value:arr[idx++],
                    done:idx>arr.length
            }
        }
    };
}

let result=arr[Symbol.iterator]();
let nextResult=result.next();
while(! nextResult.done){
    console.log(nextResult);
    nextResult=result.next();
}