// function*powerOfTwo(){
//     let start=1;
//     let power=2;
//     while(true){
//         yield start*power;
//         start=start*power;
//     }
// }
// let times=10;
// let result=powerOfTwo();
// let nextPower=result.next();

const { log } = require("console");

// for (let i=0;i<times;i++){
//     console.log(nextPower.value);
//     nextPower=result.next();
// }
// ***************************************

function*powerOfTwo2(num){
    let start=1;
    let power=2;
    while(num>0){
        yield start*power;
        start=start*power;
        num--;
    }
}
let res2=powerOfTwo2(5);
// let nextValue=res2.next();
// while(nextValue.done!==true){
//     console.log(nextValue);
//     nextValue=res2.next();
// }
for (const iterator of res2) {
    console.log(iterator);
}
let res3=powerOfTwo2(3);
for (const iterator of res3) {
    console.log(iterator);
}



