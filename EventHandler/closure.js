
// F5, F11-debug
function outer(number){
console.log(number);

innerHeight(number++)
}
function inner(number){
    let current="inner";
     console.log('Inner'+number);
}
outer(10);

//******************    CLOSURE  */
function outer(number){
    let current='outer';
log('OUTER '+number);
return inner(number);
}