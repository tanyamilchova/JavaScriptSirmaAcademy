
let phonebook={
    Pesho:'123',
    Gosho:'456',
    Stamat:'789',
    [Symbol.iterator]:function*(){
        for (const name in this) {
            yield `${name}->${this[name]}`
        }
    }
}

for (const entry of phonebook) {
    console.log(entry);
}
// *******************************************
function*genA(){
    yield 1;
    yield*genB();
}
function*genB(){
    yield 2;
    yield 3;
}
for (const number of genA()) {
    console.log(number);
}