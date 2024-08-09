function sum(a,b){
    return a+b;
}
function multipl(a,b){
    return a*b;
}
// CommonJS  module export
// module.exports={
//     sum,
//     multipl
// }


// es module
export default {
    sum,
}

// import os from 'os'  //import from core modules
// console.log(`First line ${`EOL`} Second line`);
// console.log(os.EOL.charCodeAt[0]);
// console.log();  