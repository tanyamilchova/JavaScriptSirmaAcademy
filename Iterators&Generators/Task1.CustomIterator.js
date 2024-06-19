// const obj2={
//     a:'apple',
//     b:'banana',
//     c:'chery',
//     [Symbol.iterator](){
//         let values=Object.values(this);
//         let currIdx=0;
//         return {
//             next(){
//                 return{
//                     value:values[currIdx++],
//                     done:currIdx>values.length,
//                 };
//             }
//         }
//     }
// };
// for (const value of obj2) {
//     console.log(value);
// }
//**********************************
// const obj={
//     a:'apple',
//     b:'banana',
//     c:'chery',
//     [Symbol.iterator]:function*(){
//         let values=Object.values(this);
//         for (const value of values){
//             yield value;
         
//         }
//     }
// }
// for (const value of obj) {
//     console.log(value);
// }
// ***************************************
const obj3={
    a:'apple',
    b:'banana',
    c:'chery',
    [Symbol.iterator]:function*(){
        for (const value of Object.values(this)) {
                yield value;
            }
        }   
    }
for (const value of obj3) {
    console.log(value);
}