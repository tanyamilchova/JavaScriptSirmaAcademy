// for (const label in object){
 
// }
// for (const i=0;i<arr.length;i++){
//  let elem=arr[i];
// }   
// class Iter{
//     constructor() {
//         this.obj = {
//             a: 'apple',
//             b: 'banana',
//             c: 'kiwi',
//         };
//     }

//     [Symbol.iterator]() {
//         let idx = 0;
//         let values = Object.values(this.obj);
//         return {
//             next() {
//                 const result = {
//                     value: values[idx],
//                     done: idx >= values.length
//                 };
//                 idx++;
//                 return result;
//             }
//         };
//     }
// }

// let classInstance = new Iter();
// for (const elem of classInstance) {
//     console.log(elem);
// }

//*****************************************
class Iter{
    constructor() {
        this.obj = {
            a: 'apple',
            b: 'banana',
            c: 'kiwi',
            [Symbol.iterator]:function*(){
                for (const elem of Object.values(this.obj)){
                 console.log(elem);
                }
             }
        };
    }
}
let classIter=new Iter();
for (const elem in classIter.obj){
 console.log(elem);
}
  