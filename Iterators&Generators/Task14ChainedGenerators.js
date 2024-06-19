function*generator1(){
    let start=1;
    yield start;
    start++;
    yield start;
    yield*generator2();

}
function*generator2(){
    yield 3;
    yield 4;
}
let generObject=generator1();
for (const iterator of generObject) {
    console.log(iterator);
}