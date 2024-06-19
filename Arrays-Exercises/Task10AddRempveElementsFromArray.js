let start=1;

let arr=[ "add","add","remove","add","add"];
// let arr=[ "add","add","add","add"];
let resrltArr=[];
for (let i = 0; i < arr.length; i++) {
    if( arr[i]==="add"){
    resrltArr.push(start++);
    }else{
        if(arr[i]==="remove"){
             resrltArr.pop(resrltArr[resrltArr[i-1]]);
        }
    }
}
console.log(resrltArr);